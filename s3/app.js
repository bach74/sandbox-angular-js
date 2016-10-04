(function () {
    'use strict';

    angular.module('module3', ['smart-table'])
        .controller('NarrowItDownController', NarrowItDownController)
        .factory('MenuSearchItemFactory', MenuSearchItemFactory)
        .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItems);

    NarrowItDownController.$inject = ['MenuSearchItemFactory'];

    function NarrowItDownController(MenuSearchItemFactory) {
        var ctrl = this;
        var found = "";
        var menusearch = MenuSearchItemFactory();
        var error = false;

        ctrl.narrowItDown = function () {
            ctrl.found = "";
            if ((ctrl.searchTerm == 'undefined') || (ctrl.searchTerm == "")) {
                console.log('Empty input!');
                ctrl.error = true;
            } else {
                var promise = menusearch.getMatchedMenuItems(ctrl.searchTerm);
                promise.then(function (response) {
                    ctrl.found = response;
                    console.log(ctrl.found);
                    ctrl.error = (ctrl.found.length==0);
                }).catch(function (error) {
                    ctrl.error = true;
                    console.log("There seems to be some error");
                });
            }
        }

        ctrl.removeItem = function (index) {
            ctrl.found.splice(index, 1);
        }
    }

    MenuSearchItemFactory.$inject = ['$http', 'ApiBasePath', '$filter'];

    function MenuSearchItemFactory($http, ApiBasePath, $filter) {
        var factory = function () {
            return new MenuSearchItemService($http, ApiBasePath, $filter);
        };

        return factory;
    }

    function MenuSearchItemService($http, ApiBasePath, $filter) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (result) {
                // process result and only keep items that match
                var foundItems = $filter('filter')(result.data.menu_items, searchTerm);
                // return processed items
                return foundItems;
            });
            return response;
        };
    }

    function FoundItems() {
        var directive = {
            bindToController: true,
            controllerAs: 'ctrl',
            controller: NarrowItDownController,
            restrict: 'E',
            templateUrl: 'found-items.html',
            scope: {
                items: '<foundItemsList',
                error: '<',
                onRemove: '&'
            }
        };
        return directive;
    }


})();