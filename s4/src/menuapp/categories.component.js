(function () {
    'use strict';

    angular
        .module('data')
        .component('categories', {
            templateUrl: 'src/menuapp/components/categories.template.html',
            bindings: {
                categoryitems: '<',
            },
        });

})();