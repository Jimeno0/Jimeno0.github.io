angular
  .module('MyApp')
  .controller('MyWebController',myWebControler);

  function myWebControler ($http,$mdSidenav){
    var self=this;

    this.toggleSidenav = toggleSidenav;

    console.log('Hello world');
    $http.get('data/section.json').then(function(response){
          self.sections = response.data;
    });


    function toggleSidenav(){
      $mdSidenav('right').toggle();
    }

  }