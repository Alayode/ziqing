(function(){
    var app = angular.module('app');

    app.controller('myCtrl',myCtrl);

    function myCtrl(calculator){
        var vm = this;
        vm.valA = 0;
        vm.valB=0;
        vm.theSum=0;

        vm.addValues = function(){
            vm.theSum =  calculator.addValues(vm.valA,vm.valB);  //parseInt(vm.valA) + parseInt(vm.valB);
        }
    }
})();
