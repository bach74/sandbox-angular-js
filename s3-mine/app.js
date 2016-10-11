(function () {
    'use strict';

    angular
        .module('Module1', [])
        .controller('Controller1', Controller1)
        .directive('listItem', ListItem)
        .service('Service1', Service1);

    Controller1.$inject = ['Service1'];
    function Controller1(Service1) {
        var vm = this;

        vm.data = Service1.getData();
    }

    function ListItem() {
        var ddo = {
            templateUrl: 'listItem.html',
            bindToController: true,
            controller: Controller1,
            controllerAs: 'vm',
            restrict: 'E',
            scope: {
            }
        };
        return ddo;
    }

    function Service1() {
        this.getData = function () {
            return [{
                item: 'item1',
                color: 'red',
                name: 'unknown'
            }, {
                    item: 'item2',
                    color: 'blue',
                    name: 'JohnDoe'
                }];
        }
    }
})();