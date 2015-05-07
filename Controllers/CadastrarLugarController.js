    var trank = angular.module("trankApp");

    trank.controller("CadastrarLugarController", function ($scope, $rootScope, lugaresApi) {

        $scope.usuario = $rootScope.usuario;
        $scope.categorias = {america: false, europa: false, asia: false};

        $rootScope.$watch('usuario', function (u) {
            $scope.usuario = u;
        });

        $scope.campoVazio = function (field) {
            return (field.$error.required && field.$dirty);
        }

        $scope.pattern = function (field) {
            return (field.$error.pattern && field.$dirty);
        }
        
        $scope.cadastrar = function(nome, autor, descricao, imagem, categoria, componentes){
            lugaresApi.adicionarLugar(nome, autor, descricao, [imagem], [categoria], [componentes]);
            console.log(nome);
            console.log(categoria);
        }
        
        $scope.algumSelecionado = function(obj){
            return Object.keys(obj).some(function (key){
               return obj[key]; 
            });
        }

    });