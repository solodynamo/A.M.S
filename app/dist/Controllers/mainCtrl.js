(function(){

  angular
 .module('BPIT')
 .controller('MainController', [
  
  '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$state', '$mdToast',

  function ( $mdSidenav, $mdBottomSheet, $log, $q, $state, $mdToast) {
    var vm = this;

    console.log("hello");

    vm.menuItems = [
      {
        name: 'Placements',
        icon: 'work',
        sref: '.placements'
      },
      {
        name: 'Examinations',
        icon: 'class',
        sref: '.examinations'
      },
      {
        name: 'Facilities',
        icon: 'accessibility',
        sref: '.facilities'
      },
      {
        name: 'Departments',
        icon: 'group',
        sref: '.departments'
      },
      {
        name: 'Student Life',
        icon: 'face',
        sref: '.studentlife'
      },
      {
        name: 'Recruitment',
        icon: 'work',
        sref: '.recruitment'
      }
      
    ];
    vm.toggleItemsList = toggleItemsList;

    function toggleRightSidebar() {
        $mdSidenav('right').toggle();
    }

    function toggleItemsList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }

  }]);

})();
