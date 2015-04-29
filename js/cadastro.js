$(document).ready(function () {
    $(".button-collapse").sideNav();

    $('.parallax').parallax();

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
            console.log("Digit: ", error.v, " is invalid for the position: ", error.p, ". We expect something like: ", error.e);
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
            console.log("Digit: ", error.v, " is invalid for the position: ", error.p, ". We expect something like: ", error.e);
        }
    });

    $('#telefone').mask("(00) 00000-0000", {
        onInvalid: function (val, e, f, invalid, options) {
            var error = invalid[0];
            Materialize.toast('Caractere \'' + error.v + '\' Inválido para o Telefone!', 4000, 'rounded red darken-4 left');
            console.log("Digit: ", error.v, " is invalid for the position: ", error.p, ". We expect something like: ", error.e);
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
            Materialize.toast('A Senha é obrigatoria', 4000, 'rounded red darken-4 left');
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
});

// Funcao q verifica o e-mail
function is_email(email) {
    // Regex para validar email
    var mailReg = /^[a-z](([a-z0-9.])*[^.])?@[a-z0-9]+([.][a-z]+)+$/;
    return mailReg.test(email);
}