/*global define*/
define([
    'Magento_Ui/js/form/form',
    "uiComponent",
    'ko',
    'domReady!',
], function(Component) {
    'use strict';
    return Component.extend({
        defaults: {
            template: 'Elogic_shipping/shipping',
            defaultTemplate: 'Magento_Checkout/shipping',
            shippingFormTemplate: 'Magento_Checkout/shipping-address/form',
            shippingMethodListTemplate: 'Magento_Checkout/shipping-address/shipping-method-list',
            shippingMethodItemTemplate: 'Magento_Checkout/shipping-address/shipping-method-item',
        },
        initialize: function () {
            this._super();
            // component initialization logic
            return this;
        },

        /**
         * Form submit handler
         *
         * This method can have any name.
         */
        setShippingInformation: function() {
            // trigger form validation

            // verify that form data is valid
            let errorValidationMessage = ko.observable(false);
            let userText = document.forms["formName"]["inputName"].value;
            if (userText < 1) {
                this.errorValidationMessage(
                    'The shipping method is missing. Select the shipping method and try again.'
                );
            } else if (userText >= 1) {
                stepNavigator.next();
            }
        }
    });
});

