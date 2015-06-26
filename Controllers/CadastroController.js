    var trank = angular.module("trankApp");

    trank.controller("CadastroController", function ($rootScope, $scope, lugaresApi, $location) {
        
        $rootScope.title = "Registre-se";
        $rootScope.meta_desc = "Tranks - Registre-se no sistema para obter acesso a inúmeras vantagens!";
            
        $scope.$on("$viewContentLoaded", function () {
            initCadastro()
        });

        $scope.campoVazio = function(field){
            return (field.$error.required && field.$dirty);
        }

        $scope.pattern = function(field){
            return (field.$error.pattern && field.$dirty);
        }

        $scope.emailJaExiste = function(field){
            var email = field.$modelValue;
            if (email){
                return lugaresApi.emailJaExiste(email);
            }else{
                return false;
            }
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
            var senha = field.$modelValue;
            var invalid = false;
            if (senha){

                if ( senha.length < 8){
                    $scope.senha_invalida_erro = "A senha deve ter pelo menos 8 caracteres";
                    invalid = true;
                }else if(!is_password_valid(senha)){
                    $scope.senha_invalida_erro = "A senha deve ter pelo menos 1 letra maiúscula, 1 caractere especial, 1 digito e 1 letra minúscula";
                    invalid = true;
                }
            }

            return (invalid && field.$dirty);
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

            if ($scope.senhaInvalida($scope.cadUsuario.senha))
                valid = false;

            if ($scope.emailJaExiste($scope.cadUsuario.email))
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

        $('#data_nasc').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 120, // Creates a dropdown of 15 years to control year
            format: 'dd/mm/yyyy',
            formatSubmit: 'dd/mm/yyyy',
            monthsFull: ['Janeiro', 'Fevereiro', 'Maço', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            showMonthsShort: undefined,
            showWeekdaysFull: undefined,
            today: 'Hoje',
            clear: 'Limpar',
            close: 'Fechar',
            labelMonthNext: 'Mês seguinte',
            labelMonthPrev: 'Mês anterior',
            labelMonthSelect: 'Selecione um mês',
            labelYearSelect: 'Selecione um ano',
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

        $('#telefone').mask("(00) 00000-0000", {
            onInvalid: function (val, e, f, invalid, options) {
                var error = invalid[0];
                Materialize.toast('Caractere \'' + error.v + '\' Inválido para o Telefone!', 4000, 'rounded red darken-4 left');
            }
        });

    }


    function is_password_valid(password){
        var specialChars = /[\!\@\#\$\%\*?\,\;\.]/;
        var specCharList = [];
        var hasSpecialChar = false;

        var capitalLetters = /[A-Z]/;
        var hasCapital = false;

        var letters = /[a-z]/;
        var hasLetter = false;

        var numbers = /[0-9]/;
        var hasNumber = false;

        // Checking all the chars of the password
        for (var i = 0; i <= password.length; i++) {
            if (specialChars.test(password[i])) {
                // The password has a special character
                hasSpecialChar = true;
            } else if (capitalLetters.test(password[i])) {
                // The password has a capital letter
                hasCapital = true;
            } else if (numbers.test(password[i])) {
                // The password has a number
                hasNumber = true;
            } else if (letters.test(password[i])) {
                // The password has a regular letter
                hasLetter = true;
            }
        }

        return hasSpecialChar && hasCapital && hasNumber && hasLetter;
    }

    // Funcao q verifica o e-mail
    function is_email(email) {
        // Regex para validar email
        var mailReg = /^[a-z](([a-z0-9.])*[^.])?@[a-z0-9]+([.][a-z]+)+$/;
        return mailReg.test(email);
    }