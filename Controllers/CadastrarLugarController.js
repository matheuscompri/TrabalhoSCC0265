    var trank = angular.module("trankApp");

    trank.controller("CadastrarLugarController", function ($scope, $rootScope) {

        $scope.usuario = $rootScope.usuario;

        $rootScope.$watch('usuario', function (u) {
            $scope.usuario = u;
        });

        $scope.campoVazio = function (field) {
            return (field.$error.required && field.$dirty);
        }

        $scope.pattern = function (field) {
            return (field.$error.pattern && field.$dirty);
        }

    });