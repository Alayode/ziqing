// Module Creation, Routers, config method, run method
(function(){
   'use strict';

   var app = angular.module('app',[]);

   app.service('calculator',calculator);

   function calculator(){

      this.addValues =  function (a,b){
         return parseInt(a)+parseInt(b);
      }


   }

})();
