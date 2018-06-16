  $('.h-bottom>div').tap(function(){
      window.location.href="orderTime.html"; 
}) 
    
		$('.top-up>p>a').tap(function(){
			console.log($(this).parent().index())
			if($(this).parent().index() ===0){
				var top1 = $('.repeat').offset().top
				$('html,body').scrollTop(top1)
			}
			if($(this).parent().index() ===1){
				var top2 = $('.repeat').eq(1).offset().top
				$('html,body').scrollTop(top2)
			}
			if($(this).parent().index() ===2){
				var top3 = $('.repeat').eq(2).offset().top
				$('html,body').scrollTop(top3)
			}
		})
		$('.lingdui').tap(function(){
			window.location.href='theLeader.html' 
		})
		$('.lingjieshao').tap(function(){
			window.location.href='tourLeader.html'
		})