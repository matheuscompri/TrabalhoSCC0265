    var trank = angular.module("trankApp");

    trank.controller("LugaresController", function ($scope, categoria, lugares) {
        //categoria = "america"
        console.log(categoria);
        console.log(lugares);

        $scope.categoria = categoria[0];
        $scope.lugares = lugares;
    });


