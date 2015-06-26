var trank = angular.module("trankApp");

trank.controller("ComparativoController", function ($rootScope, $scope, $timeout, $location, lugaresApi, categoria, lugares) {
    
    $rootScope.title = "Comparativo da Categoria " + categoria[0].nome;

    $rootScope.meta_desc = "Comparativo Gráfico da Categoria " + categoria[0].nome;

    
    $scope.$on("$viewContentLoaded", function () {

        $scope.categoria = "Comparativo entre os países da " + categoria[0].nome;

        $timeout(function () {
            initComparativo();
        }, 0);
    });

    function initComparativo() {
        var labels = [];
        var data = [];
        
        for (var i = 0; i < lugares.length; i++) {
            labels.push(lugares[i].nome);
            data.push(lugares[i].ranking);
        }

        var data = {
            labels: labels,
            datasets: [{
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: data
        }]
        };

        // Get context with jQuery - using jQuery's .get() method.
        var ctx = $("#myChart").get(0).getContext("2d");

        // This will get the first returned node in the jQuery collection.
        var myNewChart = new Chart(ctx).Bar(data, {
            scaleOverride: true,
            scaleSteps: 5,
            scaleStepWidth: 1,
            scaleStartValue: 0,
            responsive: true
        });

        $('#myChart').click(function (evt) {
            var activeBars = myNewChart.getBarsAtEvent(evt);
            var label = activeBars[0]._saved.label;
            var lugar = lugaresApi.listarLugarNome(label);
            $rootScope.$apply(function(){
                $location.path('/lugares/' + lugar.id);
            });
        });
    }
});