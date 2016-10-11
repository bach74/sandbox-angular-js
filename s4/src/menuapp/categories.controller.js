(function () {

    angular
        .module('data')
        .controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService','categoryitems'];
    function CategoriesController(MenuDataService, categoryitems) {
        this.categoryitems = categoryitems;
    };
})();