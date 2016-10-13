(function(){

  angular
 .module('BPIT')
 .controller('DepartmentsController', [
  
  '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$state', '$mdToast',

  function ( $mdSidenav, $mdBottomSheet, $log, $q, $state, $mdToast) {
    var vm = this;

    console.log("DepartmentsController");

  }]);

})();
