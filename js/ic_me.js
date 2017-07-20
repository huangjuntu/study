$(function() {

	$(".learn_course_list").css("display", "none");

	//	当点击“学习中”，索引index为0，或者“已完成”，索引index为1
	//begin
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
		//end		

	})
})