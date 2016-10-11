(function () {
    'use strict';

    angular
        .module('data')
        .component('items', {
            templateUrl: 'src/menuapp/components/items.template.html',
            bindings: {
                itemdetails: '<',
            },
        });

})();