    var trank = angular.module("trankApp");

    trank.controller("MenuController", function ($rootScope, $scope, lugaresApi, $location) {
        $scope.categorias = lugaresApi.listarCategorias();
        $scope.usuario = false;

        $rootScope.$watch('usuario', function( u ){
            $scope.usuario = u;
        });
        
        $scope.sair = function()
        {
            $rootScope.usuario = false;
            $scope.usuario = false;
        }
        
        $scope.login = function(){
            if (!$scope.usuario){
                $location.search('next',$location.path());
                $location.path('/entrar');
            }
        }

    });