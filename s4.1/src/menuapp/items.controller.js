(function () {

    angular
        .module('data')
        .controller('ItemsController', ItemsController);

ItemsController.$inject = ['MenuDataService','itemdetails'];
    function ItemsController(MenuDataService, itemdetails) {
        this.itemdetails = itemdetails;
    };
})();