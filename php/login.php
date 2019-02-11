<?php
	
	//拿到公共PHP套用
	include("../public.php");
	
	//$调用公共PHP的封装；
	$conn=getConn("studentsys");
	//验证是否调用成功
	//print_r($conn);
	
	//接收请求数据
	$uName=$_GET["uName"];
	$pwd=$_GET["pwd"];
	
	//从表里发生联系，从表里拿到全部的信息
	$selectSql="select * from user";
	//得到一个结果集，这是一个数组，需要对其循环
	$result=mysqli_query($conn,$selectSql);
	
	//对结果集循环拿到需要的的结果
	
	$flag=false;//表示该用户名不存在
	while($arr=mysqli_fetch_array($result)){
		if($uName==$arr["uname"]){
			$flag=true;
			if($pwd==$arr["pwd"]){
				echo "<script>alert('登陆了成功');location.href = '../index.html';</script>";
			}else{
				echo "<script>alert('登陆不成功，密码有误，请重新登陆！！');locaton.href='../login.html';</script>";
				
			}
			break;
		}
	}
	if($flag==false){
		echo "<script>alert('用户名有误，请重新登录！');location.href = '../login.html';</script>";
		
	}
	
?>