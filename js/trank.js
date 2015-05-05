var trank;

trank = angular.module("trankApp", ["ngRoute"]);

trank.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "inicio.html"
    });
    
    $routeProvider.when("/entrar", {
        templateUrl: "entrar.html"
    
    });
    
    $routeProvider.when("/cadastro", {
        controller: "CadastroController",
        templateUrl: "cadastro.html"
    });    
    
    $routeProvider.otherwise({
        template: "<h1>404 Not Found</h1>"
    });
});

