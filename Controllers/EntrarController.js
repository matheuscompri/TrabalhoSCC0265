    var trank = angular.module("trankApp");

    trank.controller("EntrarController", function ($rootScope, $scope, lugaresApi) {
        $scope.usuario = "";
        $scope.senha = "";

        $scope.entrar = function(usuario,senha){
            var u = lugaresApi.login(usuario,senha); 
            if(u){  
                $rootScope.usuario = u;
            }else{
                $rootScope.usuario = false;
            }
        };
    });