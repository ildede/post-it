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
	newDiv.resizable();
	
	return newDiv;
};

$(document).ready(function(){
	//quando pronta, la pagina effttua il check dei cookie e crea eventuali elementi salvati
	checkCookie();
			
	//Funzioni utilizzabili dall'utente
	$('#add').click(function(){
		if ($('#item_to_add').val() != "") {
			var text = $('#item_to_add').val();
			$('#item_to_add').val("");
			var newDiv = createElement(text);
			$('.content').append(newDiv);
		}
	});
	
	$("#rem").click(function(){
		$(":checked").parent().remove();
	});
	
	$('#save').click(function() {
		var savedPost= [];
		$('.list').each(function() {
			savedPost.push( $(this).html() );
		});
		setCookie("savedPost",savedPost,365);
	});
	// --Fine funzioni utente
});




// gestione cookie per salvataggio div

function getCookie(c_name) {
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++) {
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name){
			return unescape(y);
		}
	};
};

function setCookie(c_name,value,exdays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
};

function checkCookie() {
	var savedPost=getCookie("savedPost");
	alert(savedPost);

		var newDiv = createElement(savedPost);
		$('.content').append(newDiv);

};