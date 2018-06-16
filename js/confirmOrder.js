$('.xiugai>p button').tap(function(){
      window.location.href="orderTime.html"; 
}) 
      
$('.insurance>a').tap(function(event){
     var offide = $(this).find('img').attr('src')
      	event.preventDefault();
      	if(offide === 'images/gou1_03.png'){		
      	  $(this).find('img').attr('src','images/kuang_03.png')
      	  var text = $('footer p span').text()
      	  $('footer p span').text(Number(text) - 2*177)
      	}else{
      	  $(this).find('img').attr('src','images/gou1_03.png')
      	  var text = $('footer p span').text()
      	  $('footer p span').text(Number(text) + 2*177)
     }
})