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

	// --Fine funzioni utente
});
