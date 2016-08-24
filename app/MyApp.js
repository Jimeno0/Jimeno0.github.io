angular.module('MyApp',['ngMaterial'])
  .config(function($mdIconProvider, $mdThemingProvider){
    $mdIconProvider.icon('menu','svg/menu.svg',24);
  });