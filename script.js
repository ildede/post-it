function createElement(text) {
	var newDiv = "<div class='element'></div>";
	var check = "<input type='checkbox' />";
	var post = "<div class='post'></div>";
	post = $(post).html(text);
	var d = new Date();
	var date = "<div class='date'></div>";
	date = $(date).html( d.getHours()+":"+d.getMinutes()+"<br />"+d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear() );
	newDiv= $(newDiv).append(check).append(date).append(post);
	newDiv.draggable();
	
	return newDiv;
};

$(document).ready(function(){
			
	//Funzioni utilizzabili dall'utente
	$('#add').click(function(){
		if ($('#item_to_add').val() != "") {
			var text = $('#item_to_add').val();
			$('#item_to_add').val("");
			var newDiv = createElement(text);
			$('#container').append(newDiv);
		}
	});
	
	$("#rem").click(function(){
		$(":checked").parent().remove();
	});
	
// Funzioni sul singolo post-it
	$('.remove').click(function(){
		$(this).parent().parent().remove();
	});
	$('.move').click(function(){
		$(this).parent().parent().draggable();
	});
	// --Fine funzioni utente
});
