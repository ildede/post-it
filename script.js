$(document).ready(function(){
			
$('#add').click(function(){
	$('#container').append('<div class="element"><div class="bar"><div class="move">M</div><div class="stop">S</div><div class="color">C</div><div class="remove">R</div><div class="date">07:30<br />03/08/1987</div></div><div class="post">Post di test</div></div>');
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
	// --Fine funzioni utente
});
