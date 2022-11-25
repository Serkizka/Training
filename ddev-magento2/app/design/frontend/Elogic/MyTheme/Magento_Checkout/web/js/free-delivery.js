define(['jquery',
    'ko',
    'uiComponent',
    'Magento_Checkout/js/model/quote'
], function ($, ko, Component, quote) {
    'use strict';

    return Component.extend({

        defaults: {
            template: 'Magento_Checkout/summary/grand-total'
        },

        getGrandTotal: function() {
            let freeShipping = 150;
            let totals = quote.totals();
            let sum = (totals ? totals : quote)['grand_total'];
            let result = freeShipping - sum;

            return result;
        },
    });
});
