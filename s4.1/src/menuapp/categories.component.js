(function () {
    'use strict';

    angular
        .module('data')
        .component('categories', {
            templateUrl: 'src/menuapp/components/categories.template.html',
            controller: 'ComponentCategoriesController as ctrl'
        })
        .controller('ComponentCategoriesController', ComponentCategoriesController);

    ComponentCategoriesController.$inject = ['$http', '$mdToast', 'MenuDataService'];
    function ComponentCategoriesController($http, $mdToast, MenuDataService) {
        this.paginatorCallback = MenuDataService.getAll;
    };

})();