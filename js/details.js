$id("amplifier").onmouseenter = function(){
	$id("mask").style.display = "block";
	$id("big").style.display = "block";
}
$id("amplifier").onmouseleave = function(){
	$id("mask").style.display = "none";
	$id("big").style.display = "none";
}
$id("amplifier").onmousemove = function(e){
	var e = e || event;
	var sTop = document.documentElement.scrollTop;
	var l = e.clientX - $id("amplifier").offsetLeft - $id("mask").offsetWidth/2;
	var t = e.clientY - $id("amplifier").offsetTop - $id("mask").offsetHeight/2 + sTop;
	//console.log(t)
	var maxL = $id("amplifier").clientWidth - $id("mask").offsetWidth;
	var maxT = $id("amplifier").clientHeight - $id("mask").offsetHeight;
	l = l < 0 ? 0 : ( l > maxL ? maxL : l);
	t = t < 0 ? 0 : ( t > maxT ? maxT : t);
	
	//console.log(t)
	
	$id("mask").style.left = l + "px";
	$id("mask").style.top = t + "px";
	
	//大图显示：
	// bigImgLeft / l = (大图的宽度-大图可视区宽度)/(小图宽度-mask的宽度) = 大图宽度/小图宽度 = 大图可视区宽度 / 小图可视区（mask）宽度
	
	
	$id("bigImg").style.left = - l * ($id("bigImg").offsetWidth/$id("small").offsetWidth) + "px";
	$id("bigImg").style.top = - t * ($id("bigImg").offsetHeight/$id("small").offsetHeight) + "px";
	
	
	
}

$(function(){
	$(".addcar").click(function(){
		//console.log(this)
		$(".hidecar").show();
	});
	$(".details").click(function(){
		//console.log(this)
		$(".hidecar").hide();
	});
});

