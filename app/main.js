;(function(){
  'use strict';

  angular
    .module('ngl', [
      'ngRoute',
      'ui.bootstrap',
      'ngl.home',
      'ngl.about',
      'ngl.users',
      'ngl.registration',
    ])
    .constant('FURL', 'https://ngl1.firebaseio.com/')
    .controller('MainCtrl', MainController)
    .controller('SubCtrl', SubController)
    .run(MainRun)
    .config(MainConfig);
    
    function MainController ($rootScope) {
      var s = this;

      s.hello_message = "Привет, мир!";
      $rootScope.root = 'Root 1';
    }

    
    function SubController($rootScope)
    {
      var s = this;
      $rootScope.root = 'Root 2';
      s.hello_message = 'Sub message';
      
    }
    
    
    function MainRun($log, $rootScope){
      $log.debug('Main Run');

      $rootScope.alerts = [];
      $rootScope.addAlert = function(_msg, _type){
        _type = _type || 'warning';
        $rootScope.alerts.push({msg: _msg, type: _type});
      };

      $rootScope.closeAlert = function(index) {
        $rootScope.alerts.splice(index, 1);
      };
    }

    
    function MainConfig ($routeProvider, $logProvider) {
      console.log('Main Config');
      $routeProvider.otherwise({ redirectTo: '/' });
      $logProvider.debugEnabled(false);

    }

})();

// var Singleton;
// Singleton = (function(){
//   var instance;

//   instance = {
//     count: 0
//   };
//   return function(){
//     return instance;
//   };
// }());

// var sin1, sin2, sin3;
// sin1 = new Singleton();
// sin2 = new Singleton();

// console.log(sin1 === sin2);
// console.log(sin1.constructor === sin2.constructor);
// sin1.count++;
// sin3 = new Singleton();
// console.log(sin1.count === sin2.count, sin1.count, sin2.count, sin3.count);


