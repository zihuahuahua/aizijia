          $('.top-up>a').tap(function(event){
                	  event.preventDefault();
                	  window.history.go(-1);
                })
                    
           	$('.classification button').tap(function(){
           		$('.classification-beijing').eq($(this).index()).siblings('.classification-beijing').fadeIn(300)
           		$('.classification-beijing').eq($(this).index()).css('display','none')
           	})
          
         
           	$('.classification-beijing>div>div>a').tap(function(event){
          		event.preventDefault();
          		$('.classification-beijing').css('display','none')
           	})
            $('.main>div').tap(function(){
                window.location.href='OrderDetails.html'
            })