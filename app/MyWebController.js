angular
  .module('MyApp')
  .controller('MyWebController',myWebControler);

  function myWebControler ($http,$mdSidenav){
    var self=this;

    self.toggleSidenav = toggleSidenav;

    
    $http.get('data/section.json').then(function(response){
          self.sections = response.data;

    });
    $http.get('data/skills.json').then(function(response){
          self.cats = response.data;
          console.log(response.data);
    });

    function toggleSidenav(){
      $mdSidenav('right').toggle();
    }

  }