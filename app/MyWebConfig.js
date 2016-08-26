angular
  .module('MyApp')
  .config(function($mdIconProvider, $mdThemingProvider){
    $mdIconProvider.icon('menu','svg/menu.svg',24);
    $mdThemingProvider
      .theme('default')
      .primaryPalette('teal')
    .accentPalette('light-blue')
    .warnPalette('orange')
    .backgroundPalette('grey');
  });