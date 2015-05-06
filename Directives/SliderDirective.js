    var trank = angular.module("trankApp");

    trank.directive("slider", function(){
       return function(scope, element, attrs)
       {
           scope.$watch("lugar.imagens", function () {
            $('.slider').slider({
                full_width: true
            });

        });
       }
    });
