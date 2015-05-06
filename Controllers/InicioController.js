    var trank = angular.module("trankApp");

    trank.controller("InicioController", function ($scope, lugaresApi) {
        $scope.lugares = lugaresApi.listaTodosLugares();
        $scope.categorias = lugaresApi.listarCategorias();
    });