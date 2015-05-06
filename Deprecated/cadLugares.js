var fotos_index = 1;
var campos_index = 1;

$(document).ready(function(){
	$('#add_mais_fotos').click(function(){
		var foto = $('<div id="div_foto-'+fotos_index+'" class="file-field input-field col s11">'+
	        		 ' <input class="file-path validate" type="text" />'+
	    			 ' <div class="btn waves-effect waves-light deep-purple lighten-2">'+
	   				 '  <span class="mdi-file-cloud-upload file_icon"></span>'+
	    			 '  <input id="foto_'+fotos_index+'" type="file" />'+
	    			 ' </div>'+
	    			 '</div> '+
	    			 '<div class="col s1"><a id="rmv_foto-'+fotos_index+'" class="red-text" href=""><i class="mdi-action-highlight-remove small"></i></a></div>'+
	     			 '');
		foto.hide().insertBefore($(this).parent()).slideDown()

		$('#rmv_foto-'+fotos_index).click(function(event){
			foto.slideUp("normal", function() { $(this).remove(); } );
			event.preventDefault();
		});

		fotos_index++;
	});


	$('#add_mais_campos').click(function(){
		var campos = $(
						'<div class="col s12 borda-on-small round-corner">'+
						'    <div class="col s11">'+
						'        <div class="input-field col l6 m6 s12">'+
						'            <input id="campo_nome-'+campos_index+'" name="campo_nome0" type="text" class="validate">'+
						'            <label for="campo_nome-'+campos_index+'">Nome do campo</label>'+
						'        </div>'+
						'        <div class="input-field col l6 m6 s12">'+
						'           <input id="campo_valor-'+campos_index+'" name="campo_valor0" type="text" class="validate">'+
						'            <label for="campo_valor-'+campos_index+'">Valor do campo</label>'+
						'        </div>'+
						'    </div>'+
						'    <div class="col s1">'+
						'        <a id="rmv_campos-'+campos_index+'" class="red-text" href=""><i class="mdi-action-highlight-remove small"></i></a>'+
						'    </div>'+
						'</div>');

		campos.hide().insertBefore($(this).parent().parent()).slideDown()

		$('#rmv_campos-'+campos_index).click(function(event){
			campos.slideUp("normal", function() { $(this).remove(); } );
			event.preventDefault();
		});

		campos_index++;
	});

});