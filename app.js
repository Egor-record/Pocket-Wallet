;(function(){
  'use strict';

var app = angular.module('Wallet', ['ui.bootstrap', 'firebase']);


app.factory("chatMessages", ["$firebaseArray",
	function($firebaseArray) {
	    // create a reference to the database where we will store our data
	    var ref = new Firebase("https://sweltering-fire-2598.firebaseio.com/wallet");
	    return $firebaseArray(ref);
	}
]);

app.controller('CreateCtrl', ["$scope", "chatMessages", function($scope, chatMessages) {
  	

			$scope.heading = "Pocket Wallet";
			$scope.describtion = "Personal pocket wallet.";
    		$scope.messages = chatMessages;


    		$scope.addMessage = function() {
      // $add on a synchronized array is like Array.push() except it saves to the database!
		      $scope.messages.$add({
		        from: $scope.message2,
		        content: $scope.message1
		      });

		      $scope.message = "";
		    };


		$scope.totalPrice = function(){
		    var total = 0;
		    var c = $scope.message1;
		    // vas ctn = parseFloat(c);
		    // console.log(ctn);

			for( var count =0; count< $scope.messages.length; count++){
				total +=$scope.message1;
			}
			return total;
		}
  		}
	]);
})();





