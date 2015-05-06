    var trank = angular.module("trankApp");

    trank.controller("LugarController", function ($scope, lugar) {
        $scope.lugar = lugar;

        $scope.salvarComentario = function (nome, email, comentario, lugarId) {
            lugaresApi.adicionarComentario(nome, email, comentario, lugarId);
        }
    });