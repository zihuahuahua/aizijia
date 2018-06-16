 $('.add').tap(function(){
		 	var value = $(this).siblings('input').val()
		 	value++
		 	$(this).siblings('input').val(value)
		 })

 $('.xiugai>button').tap(function(){
 	 window.location.href = 'orderTime.html'
 })
		 $('.mouis').tap(function(){
		 	var value = $(this).siblings('input').val()
		 	value--
		 	if(value < 1){
		 		value = 1	
		 	}
		 	$(this).siblings('input').val(value)
		 })
		 $('#yesOne').change(function(){
		 	var text = $('.chajia span').text()
		 	var text1 = $('footer p span').text()
		 	$('footer p span').text( Number(text1) - Number(text))
		 })
		 $('#noOne').change(function(){
		 	var text = $('.chajia span').text()
		 	var text1 = $('footer p span').text()
		 	$('footer p span').text(Number(text1 ) + Number(text))
		 })

		 var re = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/
		 var re1 = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
		 $('#username').blur(function(){
		 	var value4 = $('#username').val()
		 	if(value4 === ''){
		 		$('.baocuo h3 span').text('请输入姓名')
		 	}
		 })
		 $('#shouji').blur(function(){
		 	var value5 = $('#shouji').val()
		 	if(value5 === ''){
		 		$('.baocuo h3 span').text('请输入手机号')
		 	}else{
		 		if(re.test(value5) !== true){
		 			$('.baocuo h3 span').text('请输入正确手机号')
		 		}
		 	}
		 })
		 $('#youxiang').blur(function(){
		 	var value6 = $('#youxiang').val()
		 	if(value6 === ''){
		 		$('.baocuo h3 span').text('请输入邮箱')
		 	}else{
		 		if(re1.test(value6) !== true){
		 			$('.baocuo h3 span').text('请输入正确的邮箱')
		 		}
		 	}
		 })
		 $('#username-a').blur(function(){
		 	var value7 = $('#username-a').val()
		 	if(value7 === ''){
		 		$('.tourist h3 span').text('请输入姓名')
		 	}
		 })
		 $('footer a').tap(function(){
		 	var value = $('#username').val()
		 	var value1 = $('#shouji').val()
		 	var value2 = $('#youxiang').val()
		 	var value3 = $('#username-a').val()
		 	if(value2 === ''){
		 		$('.baocuo h3 span').text('请输入邮箱')
		 	}else{
		 		if(re1.test(value2) !== true){
		 			$('.baocuo h3 span').text('请输入正确的邮箱')
		 		}
		 	}
		 	if(value1 === ''){
		 		$('.baocuo h3 span').text('请输入手机号')
		 	}else{
		 		if(re.test(value1) !== true){
		 			$('.baocuo h3 span').text('请输入正确手机号')
		 		}
		 	}
		 	if(value === ''){
		 		$('.baocuo h3 span').text('请输入姓名')
		 	}

		 	if(value3 === ''){
		 		$('.tourist h3 span').text('请输入姓名')
		 	}
		 	
		 	if(value !=='' && re.test(value1) !==false && re1.test(value2) !== false && value3 !== ''){
		 		 window.location.href = 'confirmOrder.html'

		 	}
		 })
		 $('.zhengjian>button').tap(function(){
		 	$(this).siblings('ul').css('display','block')
		 })
		 $('.zhengjian>ul li').tap(function(){
		 	var text2 = $(this).text()
		 	$(this).parent().siblings('button').text(text2 + ' ∨')
		 	$(this).parent().css('display','none')
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