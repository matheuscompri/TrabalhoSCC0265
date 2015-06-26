    var trank = angular.module("trankApp");

    trank.controller("MenuController", function ($rootScope, $timeout, $scope, lugaresApi, $location) {
        $scope.categorias = lugaresApi.listarCategorias();
        $scope.usuario = false;
        
        $scope.busca_termo = "";

        (function init() {
	       initMenu(lugaresApi.autoComplete());
        })();

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
        
        $scope.buscaSubmit = function (){
            $location.search('termo',$scope.busca_termo);
            $location.path("/busca/");
        }

    });

function initMenu(autoComplete){
    $( "#search" ).autocomplete({
      source: autoComplete
    });
}