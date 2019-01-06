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

	//净含量选择
	var ml1 = document.getElementById('ml1');
	var ml2 = document.getElementById('ml2');
	var ml_value = document.getElementById('ml_value');
	ml1.onclick = function(){
		ml1.className = 'select';
		ml2.className = 'unselect';
		ml_value.innerHTML = '';
		var text = document.createTextNode('"'+ml1.value+'ml"');
		ml_value.appendChild(text);
	}
	ml2.onclick = function(){
		ml2.className = 'select';
		ml1.className = 'unselect';
		ml_value.innerHTML = '';
		var text = document.createTextNode('"'+ml2.value+'ml"');
		ml_value.appendChild(text);
	}

	//数量加减
	var number = document.getElementById('number');
	var num_left = document.getElementById('num_left');
	var num_right = document.getElementById('num_right');

	num_left.onclick = function(){
		if(number.value>1){
			number.value--;
			this.style.cursor = 'pointer';
			num_right.style.cursor = 'pointer';
			if(number.value==1){
				this.style.cursor = 'not-allowed';
			}
		}
	}
	num_right.onclick = function(){
		if(number.value<5){
			number.value++;
			this.style.cursor = 'pointer';
			num_left.style.cursor = 'pointer';
			if(number.value==5){
				this.style.cursor = 'not-allowed';
			}
		}
	}
	number.onblur = function(){
		if(this.value<1 || this.value>5){
			this.value = 1;
		}
	}

	//放大镜
	var small_img = document.getElementById('small_img');
	var big_img = document.getElementById('big_img');
	var list_s1 = document.getElementById('list_s1');
	var list_s2 = document.getElementById('list_s2');
	var slider = document.getElementById('slider');
	var big = document.getElementById('big');

	list_s1.onmouseover = function(){
		this.className = 'active';
		list_s2.className = '';
		small_img.src = 'img/pp0.jpeg';
		big_img.src = 'img/pp0.jpeg';
	}
	list_s2.onmouseover = function(){
		this.className = 'active';
		list_s1.className = '';
		small_img.src = 'img/pp1.jpeg';
		big_img.src = 'img/pp1.jpeg';
	}
	small_img.onmouseenter = function(){
		slider.style.display = 'block';
		big.style.display = 'block';
	}
	small_img.onmouseleave = function(){
		slider.style.display = 'none';
		big.style.display = 'none';
	}
	small_img.onmousemove = function(ev){
		var oL = ev.clientX-small_img.getBoundingClientRect().left-slider.offsetWidth/2;
		var oT = ev.clientY-small_img.getBoundingClientRect().top-slider.offsetHeight/2;
		var oMaxw = small_img.offsetWidth-slider.offsetWidth;
		var oMaxh = small_img.offsetHeight-slider.offsetHeight;
		oL = oL>oMaxw?oMaxw:oL<0?0:oL;
 		oT = oT>oMaxh?oMaxh:oT<0?0:oT;
 		slider.style.left = oL+'px';
 		slider.style.top = oT+'px';
 		var scale = big_img.offsetHeight/small_img.offsetHeight;
 		big_img.style.left = -oL*scale+'px';
 		big_img.style.top = -oT*scale+'px';
	}

	//加入购物车
	var but2 = document.getElementsByClassName('but2');
	var all = document.getElementById('all');
	but2[0].onclick = function(){
		all.style.display = 'block';
	}

	var but3 = document.getElementsByClassName('but3');
	var but5 = document.getElementsByClassName('but5');
	function disappear(){
		all.style.display = 'none';
	}
	but3[0].onclick = disappear;
	but5[0].onclick = disappear;

