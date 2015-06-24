var trank;

trank = angular.module("trankApp", ["ngRoute", "lugaresApi", "ngAnimate"]);

trank.config(function ($routeProvider) {
    $routeProvider.when("/", {
        controller: "InicioController",
        templateUrl: "Pages/inicio.html"
    });
        
    $routeProvider.when("/entrar", {
        controller: "EntrarController",
        templateUrl: "Pages/entrar.html",
        resolve: {
            next: function ($route) {
                var next = $route.current.params.next;

                if (next)
                    return next;
                else
                    return "/";
            }
        }
    });

    $routeProvider.when("/cadastro", {
        controller: "CadastroController",
        templateUrl: "Pages/cadastro.html"
    });

    $routeProvider.when("/cadastrarLugar", {
        controller: "CadastrarLugarController",
        templateUrl: "Pages/cadLugar.html",
    });

    $routeProvider.when("/categorias/:catId", {
        controller: "LugaresController",
        templateUrl: "Pages/listaLugares.html",
        resolve: {
            categoria: function (lugaresApi, $route) {
                var categoria = $route.current.params.catId;
                return lugaresApi.listarCategoria(categoria);
            },
            lugares: function (lugaresApi, $route) {
                var categoria = $route.current.params.catId;
                return lugaresApi.listarLugares(categoria);
            },
        }
    });

    $routeProvider.when("/lugares/:lugarId", {
        controller: "LugarController",
        templateUrl: "Pages/lugar.html",
        resolve: {
            lugar: function (lugaresApi, $route) {
                var lugarId = $route.current.params.lugarId;
                return lugaresApi.listarLugar(lugarId);
            }
        }
    });

    $routeProvider.when("/comparativo/:catId", {
        controller: "ComparativoController",
        templateUrl: "Pages/comparativo.html",
         resolve: {
            categoria: function (lugaresApi, $route) {
                var categoria = $route.current.params.catId;
                return lugaresApi.listarCategoria(categoria);
            },
            lugares: function (lugaresApi, $route) {
                var categoria = $route.current.params.catId;
                return lugaresApi.listarLugares(categoria);
            },
        }
    });

    $routeProvider.otherwise({
        template: "<h1>404 Not Found</h1>"
    });
});