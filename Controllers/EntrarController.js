    var trank = angular.module("trankApp");

    trank.controller("EntrarController", function ($rootScope, $scope, $location, lugaresApi, next) {
        
        $rootScope.title = "Entrar";
        $rootScope.meta_desc = "Página para acesso ao sistema."
            
        $scope.usuario = "";
        $scope.senha = "";
        $scope.next = next;


        $scope.senha_incorreta = false;

        $scope.campoVazio = function (field) {
            return (field.$error.required && field.$dirty);
        }

        $scope.pattern = function (field) {
            return (field.$error.pattern && field.$dirty);
        }

        $scope.emailNaoExiste = function (field) {
            var email = field.$modelValue;
            if (!field.$error.pattern && !field.$error.required) {
                if (email) {
                    return !lugaresApi.emailJaExiste(email) && field.$dirty;
                } else {
                    return true && field.$dirty;
                }
            }
            return false;
        }

        $scope.entrar = function (usuario, senha) {
            console.log(next);

            var valid = $scope.loginForm.$valid;

            if ($scope.emailNaoExiste($scope.loginForm.usuario))
                valid = false;

            if ($scope.loginForm.$valid) {
                var u = lugaresApi.login(usuario, senha);
                if (u) {
                    $rootScope.usuario = u;
                    $location.path($scope.next);
                    $location.search('next', null);
                    $scope.senha_incorreta = false;
                } else {
                    $rootScope.usuario = false;
                    $scope.senha_incorreta = true;
                }
            } else {
                for (var i = 0; i < $scope.loginForm.$error.required.length; i++) {
                    $scope.loginForm.$error.required[i].$setDirty();
                }
            }

        };
    });