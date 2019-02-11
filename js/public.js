//通过id名称获取元素
function $id(id){
	return document.getElementById(id);
}


//获取任意区间的随机数
function getRand(min,max){
	return Math.round(Math.random()*(max-min))+min;
}


//随机获取十六进制颜色
function getColor(){
	var str = "0123456789abcdef";
	var color = "#";
	var rand = 0;
	for (var i = 0; i < 6; i++) {
		rand = getRand(0,15);
		color += str[rand];
	}
	return color;
}


//获取随机验证码
function getYZM(num){
	var yzm = "";
	for (var i = 0; i < num; i++) {
		var rand = getRand(48,122);
		if((rand >= 48 && rand <= 57) || (rand >= 65 && rand <= 90) || (rand >= 97 && rand <= 122)){
			var ch = String.fromCharCode(rand);
			yzm += ch;
		}else{
			i--;
		}
	}
	return yzm;
}


//把日期转化为字符串日期格式
function dateToString(date){
	var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	var yy = date.getFullYear();
	var MM = date.getMonth()+1;//0-11
	var dd = date.getDate();
	var HH = date.getHours();
	var mm = date.getMinutes();
	var SS = date.getSeconds();
	var w = date.getDay();//0-6
	return yy + "年" + dbNum(MM) + "月" + dbNum(dd) + "日" + dbNum(HH) + ":" + dbNum(mm) + ":" + dbNum(SS) + " " + week[w];
}
//获取中文时间格式 月份，日期，小时，分钟，秒都需要两位数字
function dbNum(num){
	return num/10 < 1 ? 0 + ""+ num :num;
}


//获得时间差
function diffTime(startTime,endTime){
	//获取时间秒值
   return (endTime.getTime() - startTime.getTime())/1000;
}
//diff(startTime,endTime)/3600/24：得到天数



//跨浏览器兼容ie8及以下浏览器获取class命名的元素集合。
function getEleByClass(className){
	var tag = document.getElementsByTagName("*");
	var eleArr = [];
	for (var i = 0; i < tag.length; i++) {
		if(tag[i].className == className){
			eleArr.push(tag[i]);
		}
	}
	return eleArr;
}


//判断浏览器是否是ie
function isIE(name,ver){
	var appName = navigator.appName;
	var version = navigator.appVersion;
	var str = version.split(";")[1];
	var reg = /\s/g;//空格正则
	//console.log(str.replace(reg,""))
	if(appName == name && str.replace(reg,"") == ver){
		return true;
	}
	return false;
}


//将创建的新元素插入到指定元素的后面
function insertAfter(targetEle,newEle){
	var parentEle = targetEle.parentNode;
	//console.log(parentEle);
    //如果当前元素是最后一个子节点，添加父节点里所有子节点的最后面	
    if(parentEle.lastElementChild === targetEle){
        parentEle.appendChild(newEle);
    }else{
        //如果当前元素不是最后一个子节点，那么就在下一个子节点之前添加
        parentEle.insertBefore(newEle,targetEle.nextElementSibling);
    }
}


//鼠标事件对象的button属性ie8以下浏览器兼容代码
function getButton(e){
    if(e){
        return e.button;
    }else{
       var button = e.button;
        switch(button){
            case 1:
                return 0 ;
            case 4:
                return 1;
            case 2:
                return 2;
        }
    }
}

 //跨浏览器 兼容ie8及以下浏览器  阻止事件冒泡
function stopBubbling(eve){
	var e = eve || event;
	if(typeof e.stopPropagation == "undefined"){
		e.cancelBubble = true;//所有浏览器都兼容，但是不纳入ECMAscript标准中
	}else{
		e.stopPropagation();
	}
}
//e.stopPropagation ? e.stopPropagation() :  e.cancelBubble = true;


//跨浏览器兼容ie8及以下浏览器  阻止事件默认行为的运行
function preventdefault(eve){
	var e = eve || window.event;
    if(typeof e.preventDefault == "undefined"){
    	e.returnValue = false;
    }else{
    	e.preventDefault();
    }
}
//e.preventDefault ? e.preventDefault() : e.returnValue = false;



//事件监听跨浏览器兼容
function addEvent(obj,type,fn){
    if(obj.addEventListener){
        obj.addEventListener(type,fn);
    }else{
        obj.attachEvent("on"+type,fn);
    }
}

//设置cookie数据
function setCookie(key,val,date){
		if(date){//如果传入date 则设置cookie有效期
			document.cookie = key+"="+val+";expires"+date;
		}else{
			document.cookie = key+"="+val;
		}
	}
	
	
//获取cookie数据
function getCookie(key){
	if(document.cookie){
		//console.log(document.cookie);
		var cookieInfor = document.cookie;
		var cookieInforArr = cookieInfor.split("; ");
		//console.log(arr);
		for (var i = 0; i < cookieInforArr.length; i++) {
			if(cookieInforArr[i].split("=")[0] == key){
				return cookieInforArr[i].split("=")[1];
			}
		}
	}else{
		return "";
	}
}


//删除cookie数据
function delCookie(key){
	document.cookie = key + "=;expires=" + new Date(0); 
}


//
function isIDCard(idCard){
	//检测身份证平年还是润年43256719930632345x
	var y = idCard.substr(6,4);
	var m = idCard.substr(10,2);
	var dStr = "";
	switch(m){
		case "01":
		case "03":
		case "05":
		case "07":
		case "08":
		case "10":
		case "12":
			dStr = "(0[1-9]|(1|2)\\d|30|31)";
			break;
		case "04":
		case "06":
		case "09":
		case "11":
			dStr = "(0[1-9]|(1|2)\\d|30)";	
			break;
		case "02":
			if(y % 4 == 0 && y % 100 != 0 || y % 400 == 0){
				dStr = "(0[1-9]|(1|2)\\d)";
			}else{
				dStr = "(0[1-9]|1\\d|2[0-8])";	
			}
			break;
			
	}
	var idCardStr = "^[1-9]\\d{5}(1(8|9)|2[0-2])\\d{2}(0[1-9]|1[0-2])"+dStr+"\\d{3}[0-9Xx]$";
	var reg = new RegExp(idCardStr);
	return reg.test(idCard);
}

//函数获取css中的样式
function getStyle(ele,attr){
		return window.getComputedStyle ? window.getComputedStyle(ele)[attr] : ele.currentStyle[attr];
}

function isPeng(obj1,obj2){
	var h1=obj1.offsetTop>obj2.offsetTop+obj2.offsetHeight;
	var w1=obj1.offsetLeft>obj2.offsetLeft+obj2.offsetWidth;
	var h2=obj1.offsetTop+obj1.offsetHeight<obj2.offsetTop;
	var w2=obj1.offsetLeft+obj1.offsetWidth<obj2.offsetLeft;
	
	if (h1||w1||h2||w2) {//没碰撞
		return false;
	} else{
		return true;
	}
}