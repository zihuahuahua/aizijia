
		function time(){
		var min = Number(document.querySelector('.min').innerText)
		var sec = Number(document.querySelector('.sec').innerText)
			 sec--
			if(sec < 0){
			 	min --
			 	sec = 59
			}
			if(sec < 10){
				sec = '0' + sec
			}
			if(min < 10){
				min = '0' + min
			}
			if(min === '00' && sec === '00'){
				clearInterval(time1)
			}
			document.querySelector('.min').innerText = min
			document.querySelector('.sec').innerText = sec
		}
		time()
		var time1 = setInterval(time,1000)
		$('.main>div>button').tap(function(event){
			event.preventDefault();
			$(this).find('img').attr('src','images/zhifu1_03.jpg')
			$(this).parent().siblings().find('button img').attr('src','images/zhfu_03.jpg')
		})
		var num = 0
		$('.footer-left>a').tap(function(){
			for(var i = 0;i < $('.main>div>button img').length;i++ ){
				if($('.main>div>button img').eq(i).attr('src') === 'images/zhifu1_03.jpg'){
					num++
					if(num == 1){
						window.location.href="SuccessfulPayment.html";
					}
				}
			}
		})