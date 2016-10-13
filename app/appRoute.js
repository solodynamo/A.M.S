'use strict';

angular.module('BPIT')

  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider,
                    $mdIconProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'app/views/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        abstract: true
      })
      .state('home.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/views/dashboard.html',
        data: {
          title: 'Dashboard'
        }
      })
      .state('home.placements', {
        url: '/placements',
        templateUrl: 'app/views/placements.html',
        controller: 'PlacementController',
        controllerAs: 'vm'
      })
      .state('home.examinations', {
        url: '/examinations',
        controller: 'ExaminationsController',
        controllerAs: 'vm',
        templateUrl: 'app/views/examinations.html'
      })
      .state('home.facilities', {
        url: '/facilities',
        controller: 'FacilitiesController',
        controllerAs: 'vm',
        templateUrl: 'app/views/facilities.html'
      })
      .state('home.departments', {
        url: '/departments',
        controller: 'DepartmentsController',
        controllerAs: 'vm',
        templateUrl: 'app/views/departments.html'
      })
      .state('home.studentlife', {
        url: '/studentlife',
        controller: 'StudentlifeController',
        controllerAs: 'vm',
        templateUrl: 'app/views/studentlife.html'
      })
      .state('home.recruitment', {
        url: '/recruitment',
        controller: 'RecruitmentController',
        controllerAs: 'vm',
        templateUrl: 'app/views/recruitment.html'
      });

    $urlRouterProvider.otherwise('/dashboard');

    $mdThemingProvider
      .theme('default')
        .primaryPalette('purple', {
          'default': '400'
        })
        .accentPalette('purple', {
          'default': '500'
        })
        .warnPalette('defaultPrimary');

    $mdThemingProvider.theme('dark', 'default')
      .primaryPalette('defaultPrimary')
      .dark();

    $mdThemingProvider.theme('grey', 'default')
      .primaryPalette('grey');

    $mdThemingProvider.theme('custom', 'default')
      .primaryPalette('defaultPrimary', {
        'hue-1': '50'
    });

    $mdThemingProvider.definePalette('defaultPrimary', {
      '50':  '#FFFFFF',
      '100': 'rgb(255, 198, 197)',
      '200': '#E75753',
      '300': '#E75753',
      '400': '#E75753',
      '500': '#E75753',
      '600': '#E75753',
      '700': '#E75753',
      '800': '#E75753',
      '900': '#E75753',
      'A100': '#E75753',
      'A200': '#E75753',
      'A400': '#E75753',
      'A700': '#E75753'
    });

    
  });
