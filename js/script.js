$(document).ready(function() {
    $(".button-collapse").sideNav();

    $("#show_login_cadastro").click(function(){
    	$("#login_cadastro").hide().toggleClass("hide").fadeIn(500);
    });

});