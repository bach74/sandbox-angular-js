(function () {
    'use strict';

    angular.module('data').service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = function () {
            var response = $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/categories.json'
            }).then(
                function successCallback(response) {
                    return response.data;
                },
                function errorCallback(response) {
                    console.log(response);
                });
            return response;
        };

        service.getItemsForCategory = function (categoryShortName) {
            var response = $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName
            }).then(
                function success(response) {
                    return response.data;
                },
                function error(response) {
                    console.log(response);
                });
            return response;
        };
    }

})();
