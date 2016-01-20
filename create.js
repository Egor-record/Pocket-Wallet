var app = angular.module('Wallet');

	app.controller('createCtrl', ["$scope", "$firebaseObject",
  		function($scope, $firebaseObject) {

   		var ref = new Firebase("https://sweltering-fire-2598.firebaseio.com/");
    	$scope.profile = $firebaseObject(ref.child('wallet').child('items'));
  	}
]);

