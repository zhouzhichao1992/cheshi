	var index = 0;
	var timer = setInterval(autoPlay,2000);
	function autoPlay(){
		index++;
		if($(".box li").size() == index){
			index = 0;
		}
		$(".box li").eq(index).fadeIn(1000).siblings().fadeOut(1000)
		$(".uu li").eq(index).addClass("current").siblings().removeClass("current")
	}	
	$(".uu li").mouseenter(function(){
		clearInterval(timer);
		console.log($(this).index());
		index = $(this).index()-1;
		autoPlay();
	}).mouseout(function(){
		timer = setInterval(autoPlay,2000);
	});
	
	var startTime = new Date();
	//设置活动结束时间
	var endTime = new Date("2019/2/1 15:29:20");
	//计算时间差
	var s = diffTime(startTime,endTime);
	
	
	
	function showTime(){
		//console.log(s/3600/24);
		if(s<0){
			$id("showTime").innerHTML = "活动时间到，商品已过期";
			console.log(s);
			return;
		}
		var houre = s/3600;
		var d = parseInt(houre/24);
		var h = parseInt((houre/24-d)*24);//.040296666666674
		var f = parseInt(((houre/24-d)*24 - h)*60);
		var m = parseInt((((houre/24-d)*24 - h)*60 - f)*60);
		$id("showTime").innerHTML = "距离活动结束还剩"+d+"天"+h+"时"+f+"分"+m+"秒";
	}
	showTime();
	var timer = setInterval(function(){
		s--;
		showTime();
		if(s<0){
			clearInterval(timer);
		}
	},1000);
	
	

			
	$(function(){
		$(".ul1").hover(function(){
			$(".ul2").slideDown(1000);
		},function(){
			$(".ul2").slideUp(1000);
		});
	});
