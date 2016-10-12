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

        service.getAll = function (page, pageSize) {
            var offset = (page - 1) * pageSize;

            return $http.post('https://api.nutritionix.com/v1_1/search', {
                'appId': 'a03ba45f',
                'appKey': 'b4c78c1472425c13f9ce0e5e45aa1e16',
                'offset': offset,
                'limit': pageSize,
                'query': '*',
                'fields': ['*'],
                'sort': {
                    'field': 'nf_iron_dv',
                    'order': 'desc'
                }
            }).then(function (result) {
                return {
                    results: result.data.hits,
                    totalResultCount: result.data.total
                }
            });
        }

    }

})();