    var trank = angular.module("trankApp");

    trank.controller("InicioController", function ($scope, $timeout, lugaresApi) {
        $scope.$on("$viewContentLoaded", function () {
	      $timeout(function() {
	            initInicio();
	      },0);
        });

        $scope.lugares = lugaresApi.listaTodosLugares();
        $scope.categorias = lugaresApi.listarCategorias();

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