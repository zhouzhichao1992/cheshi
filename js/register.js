$id("yz").innerHTML = getYZM(6);
$id("btn").onclick = function(){
	$id("yz").innerHTML = getYZM(6);
}


	var yzmCheckSuc = false;
	

	$("#yzm").blur(function(){
		if ($(this).val().length==0) {
			var yzmCheckSuc = false;
			alert("验证码输入不能为空");
		}else if ($(this).val()!=$("#yz").html()) {
			var yzmCheckSuc = false;
			alert("验证码输入错误");
			
		}else{
			var yzmCheckSuc = true;
			alert("验证码输入正确");
			
		}
	})








	var form = $id("form");
	
	var uname = $id("uname");



	
	var userCheckSuc = false;
	var userNameReg = /^1[34578]\d{9}$/;
	//用户名验证
	function checkUserName(){
		var uVal = uname.value;
		if(userNameReg.test(uVal)){//对用户名进行正则的验证
			return true;//验证成功
		}else{
			return false;//验证失败
		}
	}
	
	uname.onfocus = function(){
		
	}
	uname.onblur = function(){
		
		//光标离开时要对用户名进行一个验证
		if(checkUserName()){
			//验证成功
			userCheckSuc = true;
			alert("输入正确");
		}else{
			//失败
			alert("请输入11位手机号码");
		}
	}
	
	var pwd = $id("pwd");
	var passCheckSuc = false;
	var passCheckReg = /^[0-9a-zA-Z]{6,20}$/;
	function passCheck(){
		var pVal = pwd.value;
		if(passCheckReg.test(pVal)){
			return true;
		}else{
			return false;
		}
	}

	pwd.onfocus = function(){

	}
	pwd.onblur = function(){

		if(passCheck()){
			passCheckSuc = true;
			alert("可用密码");
		}else{
			passCheckSuc = false;
			alert("密码格式不正确，请充型输入");
		}
	}
	





	form.onsubmit = function(){
		//if(用户名验证通过 && 密码要通过 && 密码确认通过 && 电子邮件){
		if(userCheckSuc && passCheckSuc){	
			return true;
		}else{
			return false;
		}
	}