var trank;

trank = angular.module("trankApp", ["ngAria" ,"ngRoute", "lugaresApi", "ngAnimate"]);

trank.config(function ($routeProvider) {
    $routeProvider.when("/", {
        title: "Viagem Tranquila é Viagem com Trank!",
        controller: "InicioController",
        templateUrl: "Pages/inicio.html"
    });
        
    $routeProvider.when("/entrar", {
        title: "Entrar",
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
        title: "Registre-se",
        controller: "CadastroController",
        templateUrl: "Pages/cadastro.html"
    });

    $routeProvider.when("/cadastrarLugar", {
        title: "Novo Lugar",
        controller: "CadastrarLugarController",
        templateUrl: "Pages/cadLugar.html",
    });

    $routeProvider.when("/categorias/:catId", {
        title: function(lugaresApi, $route){
                var categoria = $route.current.params.catId;
                var cat =  lugaresApi.listarCategoria(categoria);            
                return "Lugares da Categoria " + cat.nome;
        },
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

    $routeProvider.when("/busca", {
        title: function(lugaresApi, $route){          
                return "Busca por " + $route.current.params.termo;
        },
        controller: "BuscaController",
        templateUrl: "Pages/buscaLugares.html",
        resolve: {
            termo: function ($route) {
                return $route.current.params.termo;
            },
            lugares: function (lugaresApi, $route) {
                var termo = $route.current.params.termo;
                return lugaresApi.buscaLugares(termo);
            },
        }
    });
    
    $routeProvider.when("/lugares/:lugarId", {
        title: function(lugaresApi, $route){
                var lugarId = $route.current.params.lugarId;
                var lugar lugaresApi.listarLugar(lugarId);          
                return lugar.nome;
        },
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
        title: function(lugaresApi, $route){
                var categoria = $route.current.params.catId;
                var cat =  lugaresApi.listarCategoria(categoria);            
                return "Comparativo da Categoria " + cat.nome;
        },
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
        title: "404 Não Encontrado",
        template: "<h1>404 Not Found</h1>"
    });
});

trank.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);