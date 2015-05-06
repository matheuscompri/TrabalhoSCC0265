    var trank = angular.module("trankApp");

    trank.controller("EntrarController", function ($rootScope, $scope, $location, lugaresApi) {
        $scope.usuario = "";
        $scope.senha = "";

        $scope.entrar = function(usuario,senha){
            var u = lugaresApi.login(usuario,senha); 
            if(u){  
                $rootScope.usuario = u;
                $location.path( "/" );
            }else{
                $rootScope.usuario = false;
            }
        };
    });