    var trank = angular.module("trankApp");

    trank.controller("CadastroController", function ($rootScope, $scope, lugaresApi, $location) {
        $scope.$on("$viewContentLoaded", function () {
            initCadastro()
        });

        $scope.cadastrar = function(nome,data_nascimento,estado,cidade,telefone,email,senha){

            var valid = true;

            if (!data_nascimento || data_nascimento.length !== 10){
                valid = false;
            }else{
                var data_nasc = new Date(data_nascimento.substr(6, 4),data_nascimento.substr(3, 2) - 1,data_nascimento.substr(0, 2));

                if (data_nasc > new Date().addYears(-13)) {
                    valid = false;
                    Materialize.toast('Você precisa ter mais de 13 anos para poder utilizar o site', 4000, 'rounded red darken-4 left');
                    $('#data_nasc').addClass("invalid");
                } else {
                    $('#data_nasc').removeClass("invalid");
                }
            }

            if (!nome || nome.length === 0){
                valid = false;
            }else if (!estado || estado.length === 0){
                valid = false;
            }else if (!cidade || cidade.length === 0){
                valid = false;
            }else if (!telefone || telefone.length === 0){
                valid = false;
            }else if (!senha || senha.length === 0){
                valid = false;
            }

            if (!valid) {
                //Deu ruim
                alert("Deu ruim");
            }else{
                alert("Deu bom");
                lugaresApi.novoUsuario(nome,data_nascimento,estado,cidade,telefone,email,senha);

                var u = lugaresApi.login(email,senha); 
                if(u){  
                    $rootScope.usuario = u;
                    $location.path( "/" );
                }else{
                    $rootScope.usuario = false;
                }
            }
        }
    });

    function initCadastro() {
        $(".button-collapse").sideNav();

        $('select').material_select();

        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });

        $('#nome').mask("W", {
            translation: {
                'W': {
                    pattern: /[A-Za-z ]+/,
                    recursive: true
                }
            },
            onKeyPress: function (name, event, currentField, options) {
                $(currentField).val($(currentField).val().toUpperCase());
            },
            onInvalid: function (val, e, f, invalid, options) {
                var error = invalid[0];
                Materialize.toast('Caractere \'' + error.v + '\' Inválido para o Nome Completo!', 4000, 'rounded red darken-4 left');
            }
        });

        $('#cidade').mask("W", {
            translation: {
                'W': {
                    pattern: /[A-Za-z ]+/,
                    recursive: true
                }
            },
            onKeyPress: function (name, event, currentField, options) {
                $(currentField).val($(currentField).val().toUpperCase());
            },
            onInvalid: function (val, e, f, invalid, options) {
                var error = invalid[0];
                Materialize.toast('Caractere \'' + error.v + '\' Inválido para a Cidade!', 4000, 'rounded red darken-4 left');
            }
        });

        $('#data_nasc').mask("00/00/0000", {
            placeholder: "__/__/____",
            onInvalid: function (val, e, f, invalid, options) {
                var error = invalid[0];
                Materialize.toast('Caractere \'' + error.v + '\' Inválido para a Data!', 4000, 'rounded red darken-4 left');
            }
        });

        $('#telefone').mask("(00) 00000-0000", {
            onInvalid: function (val, e, f, invalid, options) {
                var error = invalid[0];
                Materialize.toast('Caractere \'' + error.v + '\' Inválido para o Telefone!', 4000, 'rounded red darken-4 left');
            }
        });

        $('#email').focusout(function () {
            // Verificando se o email esta vazia
            if ($('#email').val().trim() === '') {
                Materialize.toast('E-Mail deve ser preenchido', 4000, 'rounded red darken-4 left');
                $('#email').addClass("invalid");
            } else {
                $('#email').removeClass("invalid");
            }

            // Verificando o email
            if (is_email($('#email').val()) === false) {
                Materialize.toast('E-Mail inválido', 4000, 'rounded red darken-4 left');
                $('#email').addClass("invalid");
            } else {
                $('#email').removeClass("invalid");
            }
        });

        $('#senha').focusout(function () {
            // Verificando se a senha esta vazia
            if ($('#senha').val().trim() === '') {
                Materialize.toast('A Senha é obrigatoria', 4000, 'rounded red darken-4 left');
                $('#senha').addClass("invalid");
            } else {
                $('#senha').removeClass("invalid");
            }
        });

        $('#conf_senha').focusout(function () {
            // Verificando se a confirmacao de senha esta vazia
            if ($('#conf_senha').val().trim() === '') {
                Materialize.toast('Confirme sua senha', 4000, 'rounded red darken-4 left');
                $('#conf_senha').addClass("invalid");
            } else {
                $('#conf_senha').removeClass("invalid");
            }

            // Verificando se as senhas sao diferentes
            if ($('#conf_senha').val() !== $('#senha').val()) {
                Materialize.toast('Senhas diferentes', 4000, 'rounded red darken-4 left');
                $('#senha').addClass("invalid");
                $('#conf_senha').addClass("invalid");
            } else {
                $('#senha').removeClass("invalid");
                $('#conf_senha').removeClass("invalid");
            }
        });
    }



    // Funcao q verifica o e-mail
    function is_email(email) {
        // Regex para validar email
        var mailReg = /^[a-z](([a-z0-9.])*[^.])?@[a-z0-9]+([.][a-z]+)+$/;
        return mailReg.test(email);
    }