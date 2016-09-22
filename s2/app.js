(function () {
    'use strict';

    angular
        .module('SteakOrderModule', [])
        .controller('BuyController', BuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ItemsService', ItemsService)



    function ItemsService() {

        this.items = [
            { name: 'Rib Eye Steak', quantity: 1 },
            { name: 'Tomahawk Steak', quantity: 3 },
            { name: 'Porterhouse Steak', quantity: 10 },
            { name: 'T-Bone Steak', quantity: 2 },
            { name: 'Tenderloin Steak', quantity: 5 }
        ];

        this.boughtItems = [];

        this.buyItem = function (item) {
            this.items.splice(this.items.indexOf(item), 1);
            this.boughtItems.push(item);
        }

        this.removeBoughtItem = function (item) {
            this.boughtItems.splice(this.boughtItems.indexOf(item), 1);
            this.items.push(item);
        }

        this.getItems = function () {
            return this.items;
        }

        this.getBoughtItems = function () {
            return this.boughtItems;
        }

    }

    BuyController.$inject = ["ItemsService"];
    function BuyController(ItemsService) {

        this.items = ItemsService.getItems();

        this.bought = function (item) {
            ItemsService.buyItem(item);
        }
    }

    AlreadyBoughtController.$inject = ["ItemsService"];
    function AlreadyBoughtController(ItemsService) {

        this.items = ItemsService.getBoughtItems();

        this.notBought = function (item) {
            ItemsService.removeBoughtItem(item);
        }
    }

})();