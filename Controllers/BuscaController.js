    var trank = angular.module("trankApp");

    trank.controller("BuscaController", function ($rootScope, $scope, $timeout, termo, lugares, lugaresApi) {
        
        $rootScope.title = "Busca por " + termo;
        $rootScope.meta_desc = "Tranks - busca por lugares e/ou categorias relacionados ao termo: " + termo;

        $rootScope.trocaBkg();
        
        $scope.$on("$viewContentLoaded", function () {
	      $timeout(function() {
	            initInicio();
	      },0);
        });

        $scope.termo = termo;
        $scope.lugares = lugares;
        
        $scope.categorias_lugar = {};
        for (var j=0; j< $scope.lugares.length;j++){
        
            var cs = [];
            var lugar = $scope.lugares[j];
            
            for (var i = 0; i < lugar.categorias.length; i++) {
                cs.push(lugaresApi.listarCategoria(lugar.categorias[i])[0]);
            }
            
            $scope.categorias_lugar[lugar.id] = cs;
        }
        
        
        $scope.range = function(numero){
        	return new Array(parseInt(numero));
        }
    });


    function initLugares(){

    	$(".jrate").each(function(i,obj){
    		var rating = $(this).data('rating');

			$(this).raty({ 
				starType: 'i',
				score: rating,
				readOnly: true,
				halfShow: true,

			});

    	});
    }