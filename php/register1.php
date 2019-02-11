<?php
	header("Content-Type:text/html;charset=utf-8");
	
	$uName=$_GET["uName"];
	$pwd=$_GET["pwd"];
	
	//连接数据源和数据库
	$con=mysqli_connect("localhost","root","","studentSYS");
	//设置编码
	mysqli_query($con,"set names utf-8");
	
	//创建查询语句
	$selectSql="select uname from user";
	
	//查询语句返回一个结果集
	$row=mysqli_query($con,$selectSql);
	
	//遍历这锅结果集，确认是否有数据库里面有没有已存在的用户名
	$flag=false;//用户名不存在
	while($rowArr=mysqli_fetch_array($row)){
		if($uName==$rowArr["uname"]){
			$flag=true;
			break;
		};
	}
	
	
	if($flag){
		echo "<script>alert('用户名已存在，请重新注册');location.href='../register.html';</script>";
	}else{
		//增加数据
		$sql="insert into user (uname,pwd) values ('$uName','$pwd')";
		//执行sql语句
		$result=mysqli_query($con,$sql);
		
		if($result){
			//插入成功，注册成功
			//跳转到登录页
			echo "<script>alert('注册成功');location.href = '../login.html';</script>";
		}else{
			echo "<script>alert('注册失败');location.href = '../register.html';</script>";
		}

		
	}
	
	
?>