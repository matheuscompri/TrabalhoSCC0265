    var trank = angular.module("trankApp");

    trank.controller("InicioController", function ($scope, $timeout, lugaresApi) {
        $scope.$on("$viewContentLoaded", function () {
	      $timeout(function() {
	            initInicio();
	      },0);
        });

        $scope.lugares = lugaresApi.listaTodosLugares();
        $scope.categorias = lugaresApi.listarCategorias();

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


    function initInicio(){

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