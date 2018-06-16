		 $('.top-two a').tap(function(){
		      	$(this).addClass('active')
		      	$(this).siblings().removeClass('active')
		 })
				var num = 0;
		function lunbo(){
			num++
			if(num > 2){
				num = 0	
			}
			$('.banner ul li').eq(num).find('a').addClass('astive')
			$('.banner ul li').eq(num).siblings().find('a').removeClass('astive')
			// $('.banner ul li').index(num)
			document.querySelector('.pic').style.marginLeft = num * -6.4 + 'rem'
		}
		setInterval(lunbo,1000)

			$('.banner-dawn>a').tap(function(event){
			  event.preventDefault();
			  $(this).addClass('aative')
			 	$(this).siblings().removeClass('aative')
			})
			$('.search>a').tap(function(event){
				event.preventDefault();
				var value = $(this).prev('input').val()
				if(value === '南京'){
					window.location.href="result.html"; 
				}
			})
			$('.content').tap(function(){
				window.location.href="TeamDetails.html";
			})

