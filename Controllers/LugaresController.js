    var trank = angular.module("trankApp");

    trank.controller("LugaresController", function ($scope, categoria, lugares) {
        $scope.categoria = categoria[0];
        $scope.lugares = lugares;
    });


