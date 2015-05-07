    var trank = angular.module("trankApp");

    trank.controller("LugarController", function ($scope, $rootScope, lugar, lugaresApi) {
         $scope.$on("$viewContentLoaded", function () {
            initLugar();
        });

        $scope.lugar = lugar;
        $scope.avaliacao = 4;
        $scope.usuario = $rootScope.usuario;

        $rootScope.$watch('usuario', function( u ){
            $scope.usuario = u;
        });

        $scope.$watch('usuario',function(u){
            $rootScope.usuario = u;
        });

        $scope.salvarComentario = function (username, comentario, lugarId) {
            lugaresApi.adicionarComentario(username, comentario, lugarId);
            $scope.comentario = "";
        }
        
        $scope.enviarAvaliacao = function(lugarId) {
            var voto =  $('input[name="score"]').val();
            lugaresApi.calcularAvaliacao(voto, lugarId);
        }
    });



    function initLugar(){

        $('#jRate').raty({ 
            starType: 'i',
            score: 2.5,
            halfShow: true,
            half: true,
        });

    }