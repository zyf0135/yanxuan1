/**
 * Created by Administrator on 2017/9/20.
 */
//电话客服
	var lis4 = document.getElementById("lis4");
	var onTime = document.getElementById("onTime");
	var twolist = document.getElementById('two-list');
	var service = document.getElementById('service');
	service.onmouseover = function(){
		twolist.style.display = "block";
	}
	service.onmouseout = function(){
		twolist.style.display = "none";
	}
    lis4.onmousemove=function(){
     onTime.style.display="block";
    }
   
	lis4.onmouseout=function(){
	    onTime.style.display = "none";
	}
//	$(".time").mouseenter(function(){
//	    $(".time").show();
//	});
//	$(".time").mouseleave(function(){
//	    $(".time").hide();
//	});
//
//二级菜单
let lis=$(".ul-tab>li")
//console.log(lis);
let nav=$(".nav-list");
//console.log(nav);
for(let i=0;i<lis.length;i++){
       	$(lis[i]).mouseenter(function(){
	      this.index=i;
	      nav[this.index].style.display="block";
	      nav[0].style.display="none";
       	});
	$(lis[i]).mouseleave(function(){
		
	      this.index=i;
//	      console.log(this.index);
	      nav[this.index].style.display="none";
	    
//	    console.log(nav);
	});
	
}


(function($){
	
//新品首发
$(".dl").hover(
	function(){
		$(this).find("dd").css({backgroundColor:"rgba(208,196,175,0.5)"});
	},
	function(){
		$(this).find("dd").css({backgroundColor:"rgba(255,255,255,1)"});
	}
)
//----------------------
$(".dl_one").hover(

function(){
	$(this).find("img").attr("src","images/index/28efa4648cd7d27db9abf0b6701f6f2f.jpg");
},

function(){
	$(this).find("img").attr("src","images/index/e4fae7053e67ac53c0e84b0316a72ba9.png");
}
);
//---------------
$(".dl_two").hover(

function(){
	$(this).find("img").attr("src","images/index/63ac0a985142c6c7624319d6f9e9cf68.jpg");
},

function(){
	$(this).find("img").attr("src","images/index/de223c60b2cbcd61d1fe5b550814253d.png");
}
);
//------------------
$(".dl_three").hover(

function(){
	$(this).find("img").attr("src","images/index/055926c93a200c0b04fbc12c3b18ff39.jpg");
},

function(){
	$(this).find("img").attr("src","images/index/2df08187f7618fafe701952deb4a702f.png");
}
);
//---------------------
$(".dl_four").hover(

function(){
	$(this).find("img").attr("src","images/index/b610b7d7c3a91b14dd093272f49bab1b.jpg");
},

function(){
	$(this).find("img").attr("src","images/index/05d98332f0f7b80a3c2ad53d8eb1d27f.png");
}
);
//轮播图
 
var swiper = new Swiper('.swiper-container', {
			direction: 'horizontal',
            loop: true,
	        pagination: '.swiper-pagination',
	        slidesPerView: 3,
	        paginationClickable: true,
	        autoplay:2000,
	        spaceBetween: 10,
	        nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            autoplayDisableOnInteraction : false
	});
//滚轮事件
window.onscroll=function(){
	var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;	
	  if(document.body.scrollTop>=240){
	     $(".scroll_q").css({"display":"block"});
	     
	  }else if(document.body.scrollTop<240){
           $(".scroll_q").css({"display":"none"});
        
      }
}
//搜索框
$(".search-input").blur(function(){
	$(".search-input").css({"border":"0"})
	$(".search_kuang").css({"display":"block"});
	
})

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})(jQuery);


