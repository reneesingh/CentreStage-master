// JavaScript Document

// jQuery controls to follow:

$(function() {
    $(".playlist tr td:first-of-type ").on("click", function() {
      	title = $(this).text();
	   
	    $("#audioarea").attr({
            "src": $(this).attr("data-audiourl"),
		    "poster": "",
            "autoplay": "autoplay"
        })
		
		$('#now_playing').text(title);
		
		
    })
    $("#audioarea").attr({
        "src": $(".playlist tr td").eq(0).attr("data-audiourl"),
        "poster": $(".playlist tr td").eq(0).attr("moviesposter")
    })
})


// buy music button

$('.songs tr td:last-of-type').hide();
/*
$('.playlist tr').mouseover(function(){
		$(this).('td:last-of-type').toggle();
	
})
*/

