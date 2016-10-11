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
        sref: '.placement'
      },
      {
        name: 'Examinations',
        icon: 'class',
        sref: '.exam'
      },
      {
        name: 'Facilities',
        icon: 'accessibility',
        sref: '.facility'
      },
      {
        name: 'Departments',
        icon: 'group',
        sref: '.departments'
      },
      {
        name: 'Student Life',
        icon: 'face',
        sref: '.studentLife'
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
