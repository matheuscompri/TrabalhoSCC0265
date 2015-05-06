$(document).ready(function () {
    $(".button-collapse").sideNav();

    $('.parallax').parallax();

    $('select').material_select();

    $('#username').focusout(function () {
        // Verificando se o email esta vazia
        if ($('#username').val().trim() === '') {
            Materialize.toast('E-Mail deve ser preenchido', 4000, 'rounded red darken-4 left');
            $('#username').addClass("invalid");
        } else {
            $('#username').removeClass("invalid");
        }

        // Verificando o email
        if (is_email($('#username').val()) === false) {
            Materialize.toast('E-Mail inválido', 4000, 'rounded red darken-4 left');
            $('#username').addClass("invalid");
        } else {
            $('#username').removeClass("invalid");
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

    $('#loginForm').submit(function (event) {

        var valid = true;

        if (is_email($('#username').val()) === false) {
            valid = false;
            Materialize.toast('E-mail inválido', 4000, 'rounded red darken-4 left');
            $('#username').addClass("invalid");
        } else {
            $('#username').removeClass("invalid");
        }

        if ($('#senha').val().trim() === '') {
            valid = false;
            Materialize.toast('Senha deve ser preenchida', 4000, 'rounded red darken-4 left');
            $('#senha').addClass("invalid");
        } else {
            $('#senha').removeClass("invalid");
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});

function is_email(email) {
    //RegExp to validate e-mail
    var mailReg = /^[a-z](([a-z0-9.])*[^.])?@[a-z0-9]+([.][a-z]+)+$/;
    return mailReg.test(email);
}