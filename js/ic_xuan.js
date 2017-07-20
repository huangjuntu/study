$(function() {

	//	当点击"全部"按钮时
	//begin
	$(".all").on("click", function() {
		$(this).css("color", "#47A9F5");
		//$(".video_xuan").toggle();//注意:toggle() 方法在 jQuery 版本 1.8 中被废弃，在版本 1.9 中被移除。
		var xx = $(".video_xuan").css("display");
		if(xx == "block") {
			$(".video_xuan").css("display", "none");
			$(".content_xuan").css("display", "block");
			$("#content").css("overflow", "hidden");
		} else {
			$(".video_xuan").css("display", "block");
			$(".content_xuan").css("display", "none");
			$("#content").css("overflow", "display");
			$(this).css("color", "black");
		}
	})
	//end

	//导航栏上  最新 最热  排序 关键词
	//begin
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
	//end

	//点击"全部"按钮后的js样式,点击左侧每个li,对应右侧信息显示
	//begin
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
	//end

	//点击"全部"按钮后的右侧的，每个span样式
	//begin
	$(".cx_right span").on("click", function() {
		$(".cx_right span").each(function() {
			$(this).css("background-color", "#FFFFFF");
		})
		$(this).css("background-color", "#F5F5F5");
	})
	//end

	//点击"重置"或"确定"按钮
	//begin
	$(".cx_bottom a").on("click", function() {
		$(this).css({
			"background": "#45A8F5",
			"color": "#FFFFFF"
		})
		setTimeout(function() {
			$(".btn_left,.btn_right").css({
				"background": "#FFFFFF",
				"color": "black"
			});
		}, 1000);
	})
	//end

})