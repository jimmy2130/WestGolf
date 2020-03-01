$(document).ready(function(){

	// wow plugin initialize
	new WOW().init();
	// 當 input 是 focus 的狀態下

	$(".js-input").focus(function(){
			// 找到 .label-text 元素並加上 .is-active
		$(this).parent().find(".label-text").addClass("is-active");
		$(this).parent().find(".js-icon").addClass("is-active");
	})
		// 當 input 是 blur 的狀態下
	$(".js-input").blur(function(){
			// 如果裡面沒有內容
		if($(this).val().length == 0){
				// 找到 .label-text 元素並移除 .is-active
			$(this).parent().find(".label-text").removeClass("is-active");
			$(this).parent().find(".js-icon").removeClass("is-active");
		}
	})


})