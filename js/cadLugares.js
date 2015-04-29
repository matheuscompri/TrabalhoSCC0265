var fotos_index = 1;

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

});