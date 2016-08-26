angular
  .module('MyApp')
  .controller('MyWebController',myWebControler);

  function myWebControler ($http,$mdSidenav){
    var self=this;
    var onScreen = 'img';

    self.icons = [
    {name:'github',     url:'svg/github-circle.svg',   href:'https://github.com/jimeno0' },
    {name: 'linkedin',  url:'svg/linkedin.svg',        href:'https://www.linkedin.com/in/carlos-perez-jimeno-087b3390' },
    {name:'twitter',    url:'svg/twitter.svg',         href:'https://twitter.com/jimeno0' },
    {name: 'email',     url:'svg/email.svg',           href:'mailto:carlospj@icloud.com' }
    ];




    self.toggleSidenav = toggleSidenav;
    self.toggleMap = toggleMap;

    
    $http.get('data/section.json').then(function(response){
          self.sections = response.data;

    });
    $http.get('data/skills.json').then(function(response){
          self.cats = response.data;
    });

    $http.get('data/portfolio.json').then(function(response){
          self.portfolio = response.data;
          
    });

    function toggleSidenav(){
      $mdSidenav('right').toggle();
    }


    function toggleMap(){
      var img = angular.element(document.getElementById('imgProfExp'));
      var ifr = angular.element(document.getElementById('iframeProfExp'));
      if (onScreen === 'img' ) {
        img[0].style.display = 'none';
        ifr[0].style.display = 'inline';
        onScreen = 'ifr';
      }
      else {
        img[0].style.display = 'inline';
        ifr[0].style.display = 'none'; 
        onScreen = 'img';
      }

    }    

  }