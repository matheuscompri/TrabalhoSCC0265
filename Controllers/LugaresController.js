    var trank = angular.module("trankApp");

    trank.controller("LugaresController", function ($scope, categoria, lugares) {
        $scope.categoria = categoria[0];
        $scope.lugares = lugares;

        $scope.range = function(numero){
        	return new Array(parseInt(numero));
        }
    });


