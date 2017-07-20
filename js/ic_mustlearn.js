$(function() {
	$(".all").on("click", function() {
		$(this).css("color", "#47A9F5");

		console.log("11");
		//		$(".video_mustlearn").toggle();//注意:toggle() 方法在 jQuery 版本 1.8 中被废弃，在版本 1.9 中被移除。
		var xx = $(".video_mustlearn").css("display");
		if(xx == "block") {
			$(".video_mustlearn").css("display", "none");
			$(".content_mustlearn").css("display", "block");
		} else {
			$(".video_mustlearn").css("display", "block");
			$(".content_mustlearn").css("display", "none");
			$(this).css("color", "black");
		}
	})

	var show = 0;
	$(".choose").click(function() {
		if(show == 0) {
			$(this).css("color", "#47A9F5");
			show = 1;
		} else {
			$(this).css("color", "black");
			show = 0;
		}
	});

	$(".cx_left li").on("click", function() {
		$(".cx_left li").each(function() {
			$(this).css("background-color", "#EEEEEE");
		})
		$(this).css("background-color", "#FFFFFF");
		var myindex = $(this).index();
		$(".cx_right").find("div").eq(myindex).css({
			"display": "block"
		}).siblings().css({
			"display": "none"
		});
	})

	$(".cx_right span").on("click", function() {

		$(".cx_right span").each(function() {
			$(this).css("background-color", "#FFFFFF");
		})
		$(this).css("background-color", "#F5F5F5");

	})

})