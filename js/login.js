$(document).ready(function () {
    $(".button-collapse").sideNav();

    $('.parallax').parallax();

    $('select').material_select();

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