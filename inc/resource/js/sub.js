$(function () {
	$(".faq__question").click(function(){
		$(this).toggleClass("on");
		$(this).next().slideToggle();
	});
	$(".select").change(function(){
		$(".select").css("color","#000");
	})

})

