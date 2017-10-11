window.onload=function(){
	var pic=document.getElementById("pic");
	var search=document.getElementById("find");
	var move=document.getElementById("head_one").getElementsByTagName("div");
	// var timer=null;
	
	pic.onmouseover=function (){
		move[1].style.left=600+"px";
		search.className="";		
	}
	pic.onmouseout=function (){
		move[1].style.left=780+"px";
		search.className="a";		
	}
	    /*pic.onmouseout=timer;
	    timer=setTimeout(function (){
		move[1].style.left=780+"px";
		search.className="a";},3000)预实现输入框停留功能*/
    

    var hide=document.getElementById("head_two").getElementsByTagName("li");
    var display=document.getElementById("head_two").getElementsByTagName("div");
    hide[5].onmouseover=function(){
    	display[2].className="display";
    }
    hide[5].onmouseout=function(){
    	display[2].className="hide";
    }

    var wrap=document.getElementById('con_one'),
        pic=document.getElementById('pics'),
        picture=pic.getElementsByTagName('li'),
        list=document.getElementById('list').getElementsByTagName('li'),
        index=0,
        timer=null;


  // 定义并调用自动播放函数
    function autoPlay(){
        index++;
        if(index>=list.length){
            index=0;
            };
        changePic(index);
        };
    timer=setInterval(autoPlay,2000);
  // 鼠标划过整个容器时停止自动播放
    wrap.onmouseover=function(){
        clearInterval(timer);
        };
  // 鼠标离开整个容器时继续播放至下一张
    wrap.onmouseout=function(){
        timer=setInterval(autoPlay,2000);
        };
  // 遍历所有数字导航实现鼠标点击切换至对应的图片
    for (var j = 0; j < list.length; j++) {
        list[j].id=j;
        list[j].onclick=function(){
            changePic(this.id);
            clearInterval(timer);  
            index=this.id;  /*使得鼠标离开时从当前标号的下一张开始轮播，而不是之前顺序的后一张*/
        };
    };
  // 定义图片切换函数
    function changePic(num){
        for (var i = 0; i < list.length; i++) {
        //list[i].style.display='none';
            list[i].className='';
          };
        //pics[num].style.display='block';
        pic.style.top= -num*390+"px";
        list[num].className='on';
      
    }


    var button=document.getElementById("con_three").getElementsByTagName("span"),
    	down=document.getElementById("down"),
    	hideup=document.getElementById("uparrow"),
    	showdown=document.getElementById("downarrow");

    	button[0].onclick=function(){
    		down.className="downhide";
    		hideup.className="uparrowhide";
    		showdown.className="downarrow";
    	}
    	button[1].onclick=function(){
    		down.className="down";
    		hideup.className="uparrow";
    		showdown.className="downarrowhide";
    	}


    var message=document.getElementById("background_four").getElementsByTagName("a"),
    	san=document.getElementById("picture").getElementsByTagName("img"),
    	school_report=document.getElementById("school_report");
    	school_lecture=document.getElementById("school_lecture");

        message[1].onmouseover=function(){
        	san[0].style.left=140+"px";
        	school_report.className="school_hide";
        	school_lecture.className="school_lecture";

        }
         message[0].onmouseover=function(){
        	san[0].style.left=30+"px";
        	school_report.className="school_report";
        	school_lecture.className="school_hide";

        }


        // var top_layer=document.getElementById("top_layer"),
        //     suo=document.getElementById("suo");
        //     top_layer.onmouseover=function(){
        //     	top_layer.className="top_layer_hide";
            	
        //     }
        //     suo.onmouseout=function(){
        //     	top_layer.className="top_layer";
            	
        //     }
            
				
 }
		
