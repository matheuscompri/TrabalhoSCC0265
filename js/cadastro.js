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
});