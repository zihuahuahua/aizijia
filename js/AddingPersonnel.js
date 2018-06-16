$('.zhengjian').tap(function(){
	$(this).siblings('ul').css('display','block')
})
$('.h-banner>div>ul li').tap(function(){
	var text = $(this).text()
	$('.zhengjian').text(text)
	$(this).parent().css('display','none')
})
$('.baocun').tap(function(){
	var value = $('.username').find('input').val()
	
	var text1 = $('.zhengjian').text()
	console.log(text1)
	if(value.trim() !== '' && text1 !== '暂无证件'){
		window.location.href="TouristChoice.html"; 
	}
})