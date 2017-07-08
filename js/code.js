$(document).ready(function(){
	//slider
	$(function(){
	    $('#slider li:gt(0)').hide();
	    setInterval(function(){
	      $('#slider li:first-child').fadeOut(2000)
	         .next('li').fadeIn(2000)
	         .end().appendTo('#slider');
	     },6000);
	});

});