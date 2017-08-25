$(document).ready(function(){


  $(".tiki").click(function() {	
	
	$('.tiki').removeClass('tikiClick'); 
	$('.tiki').find('.fa-tree').removeClass('fa-tree-click');
	$('.tiki').find('.btn').css('display','none');
	$(this).find('.fa-tree').addClass('fa-tree-click');
    
    $(this).fadeTo('slow', 0.7, function(){
    	$(this).toggleClass('tikiClick');
		$(this).find('.btn').show();
	}).delay(1000).fadeTo('slow', 1);
    
    document.getElementById('sound').play();
  	 
  	

  });

});

