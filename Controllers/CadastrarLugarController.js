    var trank = angular.module("trankApp");

    trank.controller("CadastrarLugarController", function ($scope) {
        
        $scope.campoVazio = function (field) {
            return (field.$error.required && field.$dirty);
        }

        $scope.pattern = function (field) {
            return (field.$error.pattern && field.$dirty);
        }
        
    });