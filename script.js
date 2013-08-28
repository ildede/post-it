$(document).ready(function(){

$('#save').click(function(){
	var element = $('.post').html();
	if (typeof(Storage)!=="undefined") {
		//salvataggio di tutta la parte html all'interno del container
		var container = $('#container').html();
		localStorage.setItem("container",container);
	} else {
		alert('Il tuo browser non supporta il local storage');
	};
});

$('#restore').click(function(){
	var container = localStorage.getItem("container");
	$('#container').html(container);
});

$('#add').click(function(){
	$('#container').append('<div class="element color1"><div class="bar"><div class="move">M</div><div class="stop">S</div><div class="color">C</div><div class="remove">R</div><div class="date">07:30<br />03/08/1987</div></div><div class="post">Post di test</div><div class="modify">MOD</div></div>');
});

	// Funzioni sul singolo post-it

$('#container').on('click','.move', function(){
		$(this).parent().parent().draggable({disabled:false});
		$(this).hide();
		$(this).next().show();
	});

$('#container').on('click','.stop', function(){
		$(this).parent().parent().draggable({disabled:true});
		$(this).hide();
		$(this).prev().show();
	});

$('#container').on('click','.remove', function(){
		$(this).parent().parent().remove();
	});

$('#container').on('click','.color',function(){
//  IF per cambio ciclico tra tree colori
		var $element = $(this).parent().parent();
		if ($element.hasClass('color1') ) {
			$element.removeClass('color1')
				.addClass('color2');
		} else if ($element.hasClass('color2') ) {
			$element.removeClass('color2')
				.addClass('color3');
		} else {
			$element.removeClass('color3')
				.addClass('color1');
		};
	});

$('#container').on('click','.modify',function(){
		var text = prompt('Scrivi il testo del post-it');
		$(this).prev().html(text);
	});
	// --Fine funzioni utente
});
