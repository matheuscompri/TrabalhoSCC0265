    var trank = angular.module("trankApp");

    trank.controller("EntrarController", function ($rootScope, $scope, $location, lugaresApi) {
        $scope.usuario = "";
        $scope.senha = "";

        $scope.campoVazio = function(field){
            return (field.$error.required && field.$dirty);
        }

        $scope.pattern = function(field){
            return (field.$error.pattern && field.$dirty);
        }

        $scope.entrar = function(usuario,senha){

            if($scope.loginForm.$valid){
                var u = lugaresApi.login(usuario,senha); 
                if(u){  
                    $rootScope.usuario = u;
                    $location.path( "/" );
                }else{
                    $rootScope.usuario = false;
                }
            }else{
                for (var i=0; i< $scope.loginForm.$error.required.length; i++){
                    $scope.loginForm.$error.required[i].$setDirty();
                }
            }

        };
    });