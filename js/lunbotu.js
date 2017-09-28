function $(id){
		return document.getElementById(id);
	}
	var ord=0;
	var timer=null;
	var btn=document.getElementById("btn").children;
	//点击右箭头
	$("right").onclick=function(){
		ord++;
		if(ord>=$("lunbo").children.length){//合法性判断
			ord=0;
		}
		//改变透明度
		for(var i=0;i<$("lunbo").children.length;i++){
			$("lunbo").children[i].style.opacity=0;
		}
		$("lunbo").children[ord].style.opacity=1;
		//改变按钮颜色
		for(var i=0;i<$("lunbo").children.length;i++){
			btn[i].className="ccc";
		}
		btn[ord].className="black";
	}
	//点击左箭头
	$("left").onclick=function(){
		ord--;
		if(ord<0){
			ord=$("lunbo").children.length-1;
		}
		for(var i=0;i<$("lunbo").children.length;i++){
			$("lunbo").children[i].style.opacity=0;
		}
		$("lunbo").children[ord].style.opacity=1;
		for(var i=0;i<$("lunbo").children.length;i++){
			btn[i].className="ccc";
		}
		btn[ord].className="black";
	}
	//底部小圆圈
	for(var i=0;i<btn.length;i++){
		btn[i].className="ccc";
		btn[0].className="black";
		btn[i].index=i;
		btn[i].onmousemove=function(){
			for(var i=0;i<btn.length;i++){
				btn[i].className="ccc";
				$("lunbo").children[i].style.opacity=0;
			}
			btn[this.index].className="black";
			$("lunbo").children[this.index].style.opacity=1;
		}
		btn[i].onmouseout=function(){
			for(var i=0;i<btn.length;i++){
				btn[i].className="ccc";
				$("lunbo").children[i].style.opacity=0;
			}
			ord=this.index;
			btn[ord].className="black";
			$("lunbo").children[ord].style.opacity=1;
			timer=setInterval($("right").onclick,3000);
		}
	}
	//启动定时器
	timer=setInterval($("right").onclick,3000);
		//鼠标移入，停止播放
	$("box").onmouseover=function(){
		for(var i=0;i<$("lunbo").children.length;i++){
			btn[i].className="ccc";
			$("lunbo").children[i].style.opacity=0;	
		}
		btn[ord].className="black";
		$("lunbo").children[ord].style.opacity=1;
		clearInterval(timer);
	}
		//鼠标移出，继续播放
	$("box").onmouseout=function(){
		for(var i=0;i<$("lunbo").children.length;i++){
			btn[i].className="ccc";
			$("lunbo").children[i].style.opacity=0;	
		}
		btn[ord].className="black";
		$("lunbo").children[ord].style.opacity=1;
		clearInterval(timer);
		timer=setInterval($("right").onclick,3000);
	}
