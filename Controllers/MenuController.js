    var trank = angular.module("trankApp");

    trank.controller("MenuController", function ($rootScope, $scope, lugaresApi) {
        $scope.categorias = lugaresApi.listarCategorias();
        $scope.usuario = false;

        $rootScope.$watch('usuario', function( u ){
            $scope.usuario = u;
        });

        $scope.$watch('usuario',function(u){
            $rootScope.usuario = u;
        });

    });