    var trank = angular.module("trankApp");

    trank.controller("LugaresController", function ($scope, $timeout, categoria, lugares) {
        $scope.$on("$viewContentLoaded", function () {
	      $timeout(function() {
	            initInicio();
	      },0);
        });

        $scope.categoria = categoria[0];
        $scope.lugares = lugares;

        $scope.range = function(numero){
        	return new Array(parseInt(numero));
        }
    });


    function initLugares(){

    	$(".jrate").each(function(i,obj){
    		var rating = $(this).data('rating');

			$(this).raty({ 
				starType: 'i',
				score: rating,
				readOnly: true,
				halfShow: true,

			});

    	});
    }