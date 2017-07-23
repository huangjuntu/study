$(function() {
	/*选修课页面的JS与必修课页面JS*/

	//	当点击"全部"按钮时
	$(".all").on("click", function() {
		$(this).css("color", "#47A9F5");
		var xx = $(".video_xu_mu").css("display");
		if(xx == "block") {
			$(".video_xu_mu").css("display", "none");
			$(".contetn_xu_mu").css("display", "block");
			$("body").css("overflow", "hidden");
		} else {
			$(".video_xu_mu").css("display", "block");
			$(".contetn_xu_mu").css("display", "none");
			$("#content").css("overflow", "display");
			$("body").css("color", "black");
		}
	})

	//导航栏上  最新 最热  排序 关键词
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

	//点击"全部"按钮后的js样式,点击左侧每个li,对应右侧信息显示
	$(".cx_cm_left li").on("click", function() {
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

	//点击"全部"按钮后的右侧的，每个span样式
	$(".cx_cm_right span").on("click", function() {
		$(".cx_right span").each(function() {
			$(this).css("background-color", "#FFFFFF");
		})
		$(this).css("background-color", "#F5F5F5");
	})

	//点击"重置"或"确定"按钮
	$(".cx_cm_bottom a").on("click", function() {
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

	/*考试课程JS表*/

	//点击"全部"按钮后的js样式,点击左侧每个li,对应右侧信息显示
	$(".examTab li").on("click", function() {
		$(".examTab li").each(function() {
			$(this).children().css("color", "black");
			$(this).children().css("border-style", "none");
		})
		$(this).children().css("color", "#75B4EF");
		$(this).children().css("border-bottom", "0.1rem solid #49A3F1");

		var myindex = $(this).index();
		$(".examTab li").each(function() {
			$(".exam_content").find("div").eq(myindex).css({
				"display": "block"
			}).siblings().css({
				"display": "none"
			});

		})
	})

	/*我的学习JS表*/
	//当点击“学习中”，索引index为0，或者“已完成”，索引index为1
	$(".learn_course_list").css("display", "none");
	$(".type_learning").css("border-bottom", "2px solid #45A8F5");
	$(".learn_news div").on("click", function() {
		var xx = $(this).index();
		var learn_color = "2px solid #45A8F5";
		if(xx == 0) {
			$(".learn_course_list").css("display", "none");
			$(".learn_course_ing").css("display", "block");
			$(this).css("border-bottom", learn_color);
			$(".learn_news div").eq(1).css("border-style", "none");
		} else {
			$(".learn_course_list").css("display", "block");
			$(".learn_course_ing").css("display", "none");
			$(this).css("border-bottom", learn_color);
			$(".learn_news div").eq(0).css("border-style", "none");
		}
	})

	/*详细课程的页面*/
	//点击放大缩小,pdf变换
	var screen_height = window.screen.height;
	var container_height = screen_height * 0.53;
	$("#content_big .course-container").css("height", container_height);

	var show2 = 0;
	$(".big_small").on("click", function() {
		if(show2 == 0) {
			$("#header").addClass("big1");
			$(".course-container").css("display", "none");
			$(".iframe_pdf").css("height", "100%");
			//$("#header").removeClass("big");
			$(this).html("缩小");
			show2 = 1;
		} else {
			//$("#header").addClass("big");
			$(".course-container").css("display", "block");
			$("#header").removeClass("big1");
			$(".iframe_pdf").css("height", "16rem");
			$(this).html("放大");
			show2 = 0;
		}
	})

	//下面的tab滑动效果动画
	$("#content_big .tab a").on("click", function() {
		$(".tab a").each(function() {
			$(this).css("background-color", "#CCCCCC");
			$(this).removeClass("on");
		})
		$(this).css("background-color", "#8EC2D6");
		$(this).addClass("on");

		var myindex1 = $(this).index();
		$(".course-container").find(".tabbox").eq(myindex1).css({
			"display": "block"
		}).siblings().css({
			"display": "none"
		});
	})

	//点击下面的章节,对应上面的显示互换
	$(".tabbox li").on("click", function() {
		var myindex3 = $(this).index();
		$(".tabbox li").each(function() {
			$(this).css("background-color", "#F0F0F0");
		})
		$(this).css("background-color", "pink");

		var product = $(this).data("product"); //是数字
		$(".iframe_pdf").find("iframe").eq(product - 1).css({
			"display": "block"
		}).siblings().css({
			"display": "none"
		});
	})

})