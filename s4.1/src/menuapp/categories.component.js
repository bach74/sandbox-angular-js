(function () {
    'use strict';

    angular
        .module('data')
        .component('categories', {
            templateUrl: 'src/menuapp/components/categories.template.html',
            controller: 'ComponentCategoriesController as ctrl'
        })
        .controller('ComponentCategoriesController', ComponentCategoriesController);

    ComponentCategoriesController.$inject = ['$http', '$mdToast', 'MenuDataService', '$scope'];
    function ComponentCategoriesController($http, $mdToast, MenuDataService, $scope) {
        this.paginatorCallback = MenuDataService.getAll;

        this.getLoadResultsCallback = getLoadResultsCallback;

        var loadPageCallbackWithDebounce;

        $scope.$watch('filterText', function(){
            if(loadPageCallbackWithDebounce){
              loadPageCallbackWithDebounce();  
            }
        });

        function getLoadResultsCallback(loadPageCallback){
            loadPageCallbackWithDebounce = _.debounce(loadPageCallback, 1000);
        }
    };

})();