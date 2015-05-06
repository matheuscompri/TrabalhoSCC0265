    var trank = angular.module("trankApp");

    trank.controller("LugarController", function ($scope, lugar) {
        $scope.lugar = lugar;
    });