$(function() {
	
	//点击"全部"按钮后的js样式,点击左侧每个li,对应右侧信息显示
	//begin
	$(".examTab li").on("click", function() {
//		$(this).child().css("border-bottom", "0.1rem solid #49A3F1");
//		$(this).css('background-color', 'red');
		
		$(".examTab li").each(function() {
			$(this).children().css("color", "black");
			$(this).children().css("border-style", "none");
			
		})
		$(this).children().css("color", "#75B4EF");
		$(this).children().css("border-bottom", "0.1rem solid #49A3F1");
		
		
		var myindex = $(this).index();
		console.log(myindex);
		$(".examTab li").each(function() {
			$(".exam_content").find("div").eq(myindex).css({
			"display": "block"
		}).siblings().css({
			"display": "none"
		});
			
			
			
//			var xx = $(this).next().html();
//			console.log(xx);
//			$(this).next().css("border-bottom", "0.1rem solid #49A3F1");
		})
//		$(this).css("background-color", "#FFFFFF");
//		var myindex = $(this).index();
//		$(".exam_content").find("div").eq(myindex).css({
//			"display": "block"
//		}).siblings().css({
//			"display": "none"
//		});
	})
	//end
})
