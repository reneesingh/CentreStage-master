// JavaScript Document

//drop-down menu

$('header .menu_btn').click(function(){
	$('.header_nav').toggleClass('menu_reveal');
});

$('footer .menu_btn').click(function(){
	$('.footer_nav').toggleClass('footer_menu_reveal');
});


//end of drop-down menu


// jQuery controls to follow:

$(function() {
    $(".playlist tr td:first-of-type").on("click", function() {
      	
		//some variables
		title = $(this).text();
		aSrc = $(this).attr("data-audiourl");
		$aTag = $('#audioarea');
		$aDiv = $('#audio_container')
		
		// destroy the audio element
		$aDiv.empty();

		//create a new audio element
		$aDiv.append('<audio id="audioarea" controls autoplay></audio>')

		$aTag = $('#audioarea');
		$aTag.append('<source/>', aSrc);
		$aTag.append('<source/>', aSrc);
		var $aSource = $aTag.children('source');
		
		$aSource.each(function(i){
		
			if(i === 0){
				$(this).attr('src', aSrc + '.mp3'); 	
			}else{
				$(this).attr('src', aSrc + '.ogg');	
			};	
		
		})// end source for each loop
		
		$('#now_playing').text(title);
		

		

    }) // end of click function

})


// buy music button

//$('.songs tr td:last-of-type').hide();
/*
$('.playlist tr').mouseover(function(){
		$(this).('td:last-of-type').toggle();
	
})
*/


//ABOUT PAGE 


// about page - read more
var $showBio  = $('.show-bio');
var $showHide = $('.show-hide');

$showBio.hide();
$showHide.click( function(){
	$showBio.slideToggle(2000);					  
	});//end .click function
	