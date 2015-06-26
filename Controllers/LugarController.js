    var trank = angular.module("trankApp");

    trank.controller("LugarController", function ($scope, $rootScope, $timeout, lugar, lugaresApi) {
        $scope.$on("$viewContentLoaded", function () {
            $timeout(function () {

                initLugar();
            }, 0);

        });

        $scope.lugar = lugar;
        $scope.avaliacao = 4;
        $scope.usuario = $rootScope.usuario;

        $scope.categorias = [];
        for (var i = 0; i < lugar.categorias.length; i++) {
            $scope.categorias.push(lugaresApi.listarCategoria(lugar.categorias[i])[0]);
        }

        $rootScope.$watch('usuario', function (u) {
            $scope.usuario = u;
        });

        $scope.$watch('usuario', function (u) {
            $rootScope.usuario = u;
        });

        $scope.salvarComentario = function (username, comentario, lugarId) {
            lugaresApi.adicionarComentario(username, comentario, lugarId);
            $scope.comentario = "";
        }

        $scope.enviarAvaliacao = function (lugarId) {
            var voto = $('input[name="score"]').val();
            lugaresApi.calcularAvaliacao(voto, lugarId);
        }

        $scope.exportaXML = function () {




        }

    });

    function initLugar() {

        $('#jRate').raty({
            starType: 'i',
            score: 2.5,
            halfShow: true,
            half: true,
        });

        criaXML();

    }

    function criaXML() {
        var xml = $($.parseXML('<?xml version="1.0" encoding="utf-8" ?><lugar />'));
        
        $('lugar', xml).attr({id : $("#lugar_id").val()});
        
        $('lugar', xml).append($('<nome />', xml).text($("#nome").text()));
        $('lugar', xml).append($('<descricao />', xml).text($("#descricao").text()));
        $('lugar', xml).append($('<autor />', xml).text($("#autor").text()));

        $('lugar', xml).append($('<categorias />', xml));
        $('.categoria').each(function () {
            $('categorias', xml).append($('<categoria />', xml).text($(this).text()));
        });

        $('lugar', xml).append($('<imagens />', xml));
        $('img.imagem').each(function () {
            var img = $('<imagem />', xml);
            
            img.append( $('<url />', xml).text($(this).attr("src")) );
            img.append( $('<alt />', xml).text($(this).attr("alt")) );
            
            $('imagens', xml).append(img);
        });

        $('lugar', xml).append($('<componentes />', xml));
        $('.componentes').each(function () {
            var img = $('<componentes />', xml);
            
            img.append( $('<nome />', xml).text($("b",this).attr("data-nome")) );
            img.append( $('<valor />', xml).text($(".comp_valor",this).text()) );
            
            $('componentes', xml).append(img);
        });    
    
        $('lugar', xml).append($('<comentarios />', xml));
        $('div.comentario').each(function () {
            var com = $('<comentario />', xml);
            
            com.append( 
                $('<usuario />', xml).text($("span",this).text()).attr({
                    email: $("span",this).attr("data-email")
                }) 
            );
            com.append( $('<comentario />', xml).text($("p",this).text()) );
        
            $('comentarios', xml).append(com);
        });
        
        $('lugar', xml).append($('<data />', xml).text($("#data").text()));
        
        $('lugar', xml).append($('<ranking />', xml).text($("#ranking").val()));
        $('lugar', xml).append($('<numVotos />', xml).text($("#numVotos").val()));

        window.URL = window.webkitURL || window.URL;

        var contentType = 'text/xml';

        var xmlFile = new Blob([(new XMLSerializer()).serializeToString(xml.context)], {
            type: contentType
        });

        var a = document.createElement('a');
        a.download = $("#nome").text() + '.xml';
        a.href = window.URL.createObjectURL(xmlFile);
        a.textContent = 'Exportar XML';

        a.dataset.downloadurl = [contentType, a.download, a.href].join(':');

        $(a).insertAfter("#exportar");
    }