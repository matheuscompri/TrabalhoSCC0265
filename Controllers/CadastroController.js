    var trank = angular.module("trankApp");

    trank.controller("CadastroController", function ($rootScope, $scope, lugaresApi, $location) {
        $scope.$on("$viewContentLoaded", function () {
            initCadastro()
        });

        $scope.campoVazio = function(field){
            return (field.$error.required && field.$dirty);
        }

        $scope.pattern = function(field){
            return (field.$error.pattern && field.$dirty);
        }

        $scope.dataInvalida = function(field){
            var valid = true;
            var data_nascimento = field.$modelValue;
            if (data_nascimento && data_nascimento.length === 10){
                var data_nasc = new Date(data_nascimento.substr(6, 4),data_nascimento.substr(3, 2) - 1,data_nascimento.substr(0, 2));

                if (data_nasc > new Date().addYears(-13)) {
                    valid = false;
                }
            }
            return !valid && field.$dirty;
        }

        $scope.senhaInvalida = function(field){
            return (field.$error.pattern && field.$dirty);
        }

        $scope.senhaDiferente = function(field1,field2){
            return (field1.$modelValue !== field2.$modelValue) && (field1.$dirty) && field2.$dirty;
        }

        $scope.cadastrar = function(nome,data_nascimento,estado,cidade,telefone,email,senha,confirmar_senha){

            var valid = $scope.cadUsuario.$valid;

            if ($scope.dataInvalida($scope.cadUsuario.data_nascimento))
                valid = false;

            if ($scope.senhaDiferente($scope.cadUsuario.senha,$scope.cadUsuario.confirmar_senha))
                valid = false;

            if (!valid) {
                //Deu ruim
                for (var i=0; i< $scope.cadUsuario.$error.required.length; i++){
                    $scope.cadUsuario.$error.required[i].$setDirty();
                }

            }else{
                alert("Login com Sucesso!");
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

        
    }



    // Funcao q verifica o e-mail
    function is_email(email) {
        // Regex para validar email
        var mailReg = /^[a-z](([a-z0-9.])*[^.])?@[a-z0-9]+([.][a-z]+)+$/;
        return mailReg.test(email);
    }