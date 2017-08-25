$(document).ready(function(){


  $(".tiki").click(function() {
  	$(".tiki").css('border',"1px solid #83B541");
  	$(".tiki").css('border-right',"none");
  	$(".tiki").css('text-shadow',"none"); 
  	$(".tiki").css('background',"#fff");
  	$(".tiki").find('.fa-tree').css('color','#83B541');
    /*$(this).css('border', "solid 0px #88b161");*/
    $(this).css('text-shadow','1px 2px 4px #fff');
    $(this).find('.fa-tree').css('color','rgb(29, 138, 26)');

    $(this).fadeTo('slow', 0.7, function()
	{
    $(this).css('background-image', 'url(images/f2.png)');
    $(this).css('background-repeat', 'no-repeat');
    $(this).css('background-size', '100%');
	}).delay(1000).fadeTo('slow', 1);

    document.getElementById('sound').play();
     //$('#sound').play();
  	

  });

});

