$(document).ready(function(){

//lightbox code for images
	$(".lightbox-link").click(function(e){
		
		var link_element = $(e.currentTarget);
		var imageURL = link_element.data("img-url");

		var image = $("#lightbox-image");
		image.attr('src', imageURL);
		centerImage(image);

		$('#lightbox-outer').show();

		$("#lightbox-outer").click(function(){		
			$("#lightbox-outer").hide();
		});

	});

//lightbox code for images
	function centerImage(image) {

		image.load(function(){
			var page_height = $(window).height();
			var image_height = image.height();
			var image_height_offset = ( page_height - image_height ) / 2;
			image.parent().css("margin-top", image_height_offset);
		});
	}


//modal code
	$(".modal-link").click(function(e){
		
		var modal = $("#modal-image");

		centerModal(modal);

		$('#modal-outer').show();

		$("#close").click(function(){		
			$("#modal-outer").hide();
		});

	});

//function to center modal vertically
	function centerModal(modal) {

		modal.ready(function(){
			var page_height = $(window).height();
			var modal_height = modal.height();
			var modal_height_offset = ( page_height - modal_height ) / 2;
			$('#modal-inner').css("margin-top", modal_height_offset);
		});
	}

//function to change edit the page via the #about modal

	$('button').click(function(e){
		var newName = $('#input').val();
		$('.name').text(newName);
		$("#modal-outer").hide();
	});





});












