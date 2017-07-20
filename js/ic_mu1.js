$(function() {

//点击放大缩小,pdf变换
  	var show1 = 0;
	$(".big_small").on("click", function() {
		if(show1 == 0) {
			$("#header").addClass("big1");
			$("#header").removeClass("big");
			$(this).html("缩小");
			show1= 1;

		} else {
			$("#header").addClass("big");
			$("#header").removeClass("big1");
			$(this).html("放大");
			show1 = 0;
		}
	})
  	


//下面的tab滑动效果动画
	$('.tabbox .content ul').width(500 * $('.tabbox .content li').length + 'px');
	$(".tab a").on("click", function() {
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		var distance = -500 * index;
		$('.tabbox .content ul').stop().animate({
			left: distance
		});
	})

	var auto = 2; //等于1则自动切换，其他任意数字则不自动切换
	if(auto == 1) {
		var number = 0;
		var maxNumber = $('.tab a').length;

		function autotab() {
			number++;
			number == maxNumber ? number = 0 : number;
			$('.tab a:eq(' + number + ')').addClass('on').siblings().removeClass('on');
			var distance = -500 * number;
			$('.tabbox .content ul').stop().animate({
				left: distance
			});
		}
		var tabChange = setInterval(autotab, 3000);
		//鼠标悬停暂停切换
		$('.tabbox').mouseover(function() {
			clearInterval(tabChange);
		});
		$('.tabbox').mouseout(function() {
			tabChange = setInterval(autotab, 3000);
		});
	}
	
	$(".content ul li p span").on("click", function() {
		console.log( $(this).index());
		$(this).css("background-color", "#FFFFFF");
		var myindex = $(this).index();
		$(".iframe_pdf").find("iframe").eq(myindex).css({
			"display": "block"
		}).siblings().css({
			"display": "none"
		});
	})

})