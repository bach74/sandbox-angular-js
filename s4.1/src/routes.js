(function () {
    'use strict';

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/menuapp/templates/home.html'
            })

            // categories
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menuapp/templates/categories.html'
            })
            
            // details
            .state('categories.items', {
                url: '/item/{itemId}',
                templateUrl: 'src/menuapp/templates/items.html',
                controller: 'ItemsController as ctrl',
                resolve: {
                    itemdetails : ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.itemId);
                    }]
                }
            })
            ;
            
    };
})();