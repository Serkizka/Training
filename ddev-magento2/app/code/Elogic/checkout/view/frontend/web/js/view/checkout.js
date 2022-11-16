define([
    'ko',
    'uiComponent',
    'underscore',
    'Magento_Checkout/js/model/step-navigator',
    'Magento_Ui/js/form/form',
], function (ko, Component, _, stepNavigator) {
    'use strict';

    /**
     * mystep - is the name of the component's .html template,
     * <Vendor>_<Module>  - is the name of your module directory.
     */
    return Component.extend({
        defaults: {
            template: 'Elogic_checkout/checkout',
        },

        // logic to display step,
        isVisible: ko.observable(true),

        // add here your logic to display step,

        /**
         * @returns {*}
         */
        initialize: function () {
            this._super();

            // register your step
            stepNavigator.registerStep(
                // step code will be used as step content id in the component template
                'step_code',
                // step alias
                'step_code',
                // step title value
                'Name',
                // observable property with logic when display step or hide step
                this.isVisible,

                _.bind(this.navigate, this),

                /**
                 * sort order value
                 * 'sort order value' < 10: step displays before shipping step;
                 * 10 < 'sort order value' < 20 : step displays between shipping and payment step
                 * 'sort order value' > 20 : step displays after payment step
                 */
                5
            );

            return this;
        },

        /**
         * The navigate() method is responsible for navigation between checkout steps
         * during checkout. You can add custom logic, for example some conditions
         * for switching to your custom step
         * When the user navigates to the custom step via url anchor or back button we_must show step manually here
         */
        navigate: function () {
            step && step.isVisible(true);
            this.isVisible(true);
        },

        /**
         * @returns void
         */
        navigateToNextStep: function () {
            //validate
            //form submission
            stepNavigator.next();
        }
    });
});
