$('header>a').tap(function(event){
      	  event.preventDefault();
      	  window.history.go(-1);
      })
		var text = $('.up-top p span').eq(0).text()
		 $('.add').tap(function(){
		 	var value = $(this).siblings('input').val()
		 	value++
		 	$(this).siblings('input').val(value)
		 	console.log(text)
		 	$(this).parent().siblings('.up-top').find('p span').text(text*value)
		 })
		 $('.mouis').tap(function(){
		 	var value = $(this).siblings('input').val()
		 	value--
		 	if(value < 1){
		 		value = 1	
		 	}
		 	$(this).siblings('input').val(value)
		 		$(this).parent().siblings('.up-top').find('p span').text(text*value)
		 })