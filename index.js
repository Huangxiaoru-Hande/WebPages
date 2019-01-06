	//左侧列表
	var bod_left3 = document.getElementById("bod_left3");
	var arr = ["手机","数码","影音","配件","电脑","网络","办公","打印","家电","厨卫","生活","个户","国艺",
		"家具","家纺","家饰","彩妆","面部","身体","香水","男装","女装","内衣","其他","女包","男包","女鞋",
		"男鞋","运动","户外","装备","服饰","儿童","婴儿","食品","玩具","乐器","家宠","收藏","鲜花","保健",
		"理疗","药品","眼镜","果蔬","礼品","精油","特产","文艺","生活","科技","教育"];
	for(var i=0;i<arr.length;i++){
		var a = document.createElement("a");
		var text = document.createTextNode(arr[i]);
		a.appendChild(text);
		a.href="#";
		bod_left3.appendChild(a);
	}

	//轮播图
	var slider = document.getElementById('slider');
	var box = document.getElementById('box');
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var oNavlist = document.getElementById('nav').children;
	var index = 1;
	function animate(obj,json,callback){		
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){	
			var isStop = true;
			for (var attr in json){
				if(attr=='opacity'){
					var now = parseInt(getStyle(obj,attr)*100);
				}else{
					var now = parseInt(getStyle(obj,attr));
				}
				
				var speed = (json[attr]-now)/5;
				speed = speed>0?Math.ceil(speed):Math.floor(speed);
				if (attr=='opacity') {
					obj.style[attr]=(now+speed)/100;
				}else{
					obj.style[attr]=now+speed+'px';
				}
				
				var current = now+speed;
				if(json[attr]!==current){
					isStop = false;
				}
			}					
			if(isStop){
				clearInterval(obj.timer)
				callback&&callback();
			}
	 	},50)
	
	}
	function getStyle(obj,style){
		if(getComputedStyle(obj)){
			return getComputedStyle(obj)[style];
		}else{
			obj.currentStyle[style];
		}		
	}
	function next(){
		index++;
		animate(slider,{left:-810*index},function(){
			if(index==7){
				slider.style.left='-810px';
				index=1;
			}
		})
		navChange();
	}
	function prev(){
		index--;
		animate(slider,{left:-810*index},function(){
			if(index==0){
				slider.style.left='-4860px';
				index=6;
			}
		})
		navChange();
	}
	var timer = setInterval(next,2000);
	//鼠标划上时，停止轮播,左右箭头淡入
	box.onmouseover = function(){
		clearInterval(timer);
		animate(left,{opacity:100});
		animate(right,{opacity:100})
	}
	//鼠标划出时，左右箭头淡出，开始轮播
	box.onmouseout = function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		timer = setInterval(next,2000);
	}
	//点击左右按钮
	right.onclick = next;
	left.onclick = prev;
	//点击小按钮，让slider找到指定的位置
	for(var i=0;i<oNavlist.length;i++){
		oNavlist[i].idx = i;
		oNavlist[i].onclick = function(){
			index = this.idx+1;
			animate(slider,{left:-810*index});
			navChange();
		}
	}
	function navChange(){
		for(var i=0;i<oNavlist.length;i++){
			oNavlist[i].className = '';
		}
		if(index==7)
			oNavlist[0].className = 'active';
		else if(index==0)
			oNavlist[5].className = 'active';
		else
			oNavlist[index-1].className = 'active';
	}

	//顶部跟随
	var pageheader = document.getElementsByClassName("pageheader")[0];
	window.onload = function(){
		window.onscroll = function(){
			var st = document.documentElement.scrollTop||document.body.scrollTop;
			if(st>125)
				pageheader.style.position = 'fixed';
			else
				pageheader.style.position = 'static';
		}
	}

	//充值金额
	var p2 = document.getElementsByClassName('p2');
	var select = document.getElementsByTagName('select');
	var p2_money = document.createTextNode("¥"+select[0].value);
	p2[0].appendChild(p2_money);
	select[0].onchange = function(){
		p2[0].innerHTML = '';
		var p2_money = document.createTextNode("¥"+select[0].value);
		p2[0].appendChild(p2_money);
	}
	
	//滚动公告
	var bod_right12 = document.getElementsByClassName('bod_right12');
	var bod_gundong = document.getElementsByClassName('bod_gundong');
    function marquee(){
        if(bod_gundong[0].offsetHeight<=bod_right12[0].scrollTop){
            bod_right12[0].scrollTop = 0;
        }else{
            bod_right12[0].scrollTop++;
        }
    }
    var interval = setInterval(marquee,20);
    bod_right12[0].onmouseover = function(){
        clearInterval(interval);
    }
    bod_right12[0].onmouseout = function(){
        interval = setInterval(marquee,20);
    }
   
    //侧边弹出
    var f1 = document.getElementById('f1');
    var f2 = document.getElementById('f2');
    var f3 = document.getElementById('f3');
    var f4 = document.getElementById('f4');
    f1.onmouseover = function(){
    	animate(this,{right:0});
    }
    f1.onmouseout = function(){
    	animate(this,{right:-83});
    }
    f2.onmouseover = function(){
    	animate(this,{right:0});
    }
    f2.onmouseout = function(){
    	animate(this,{right:-83})
    }
    f3.onmouseenter = function(){
    	animate(this,{right:0});
    	var img = document.createElement('img');
    	img.setAttribute('class','f3_img');
    	img.src = 'img/erwei.png';
    	this.appendChild(img);
    }
    f3.onmouseleave = function(){
    	var img = this.children;
    	this.removeChild(img[2]);
    	animate(this,{right:-83});
    }
    f4.onmouseover = function(){
    	animate(this,{right:0});
    }
    f4.onmouseout = function(){
    	animate(this,{right:-83});
    }