

// 轮播图
  // 点击圆点切换图片
   $(function () {
      $('body').on('click','.ac_slider',function () {
        var index = $(this).index();
        $('.slider li').eq(index).fadeIn().siblings().hide();
        $(this).addClass('current').siblings().removeClass('current');
    });
    // 图片轮播
    setInterval(function () {
      if ($('.ac_slider').index($('.ac_slider.current'))+1==$('.ac_slider').length){
        $('.ac_slider').eq(0).click();
      }else{
        $('.dot_wra a.current').next().click();
      } 

      },3000)
    });




// 导航
  
    $(function () {  
        $('.gps li').click(function () {
          $(this).css('background','#f2e928').siblings().css("background","#000").children().css({'color':'#fff'});  
          $(this).children().css({'color':'#000'});
      }); 
  })
   

// 登录框

    $(function ($) {
		//弹出登录
		$("#example").hover(function () {
			$(this).stop().animate({
				opacity: '1'
			}, 600);
		}, function () {
			$(this).stop().animate({
				opacity: '0.6'
			}, 1000);
		}).on('click', function () {
			$("body").append("<div id='mask'></div>");
			$("#mask").addClass("mask").fadeIn("slow");
      $("#LoginBox").fadeIn("slow");             	           
		});
		
		
		//关闭
		$(".close_btn").hover(function () { $(this).css({ color: '#ccc' }) }, function () { $(this).css({ color: '#ccc' }) }).on('click', function () {
			$("#LoginBox").fadeOut("fast");
			$(".mask").css({ display: 'none' });
		});
	});
	

  $(function () {
    $('.citybox a').click(function () {
      $(this).css({'color':'#f2e927','background':'#000'}).siblings().css({'color':'#000','background':'#bab207'});
    })
  });

  // 左右滚动焦点图
  
  $(function () {
      var ul_width = 0;
      i = 0;
      var index = $(this).index();
      var sWidth = $('.focus').width()/5;
      var len = $('.focus li').length;
    $('.focus ul').css("width",sWidth*len);
      var left = 0
      var li_width = $('.focus li').eq(0).outerWidth(true);
    $('body').on('click','.sceoll_left',function () {
      left = left + li_width;
      if($('.focus ul').width()<=left + li_width*4) return;
        
      
      $(this).closest('.focusbtn').prev().find('ul').animate({'left':-left+'px'});
    });
    $('body').on('click','.sceoll_right',function () {
      left = left - li_width;
      if($('.focus ul').width()<=-left + li_width*11) return;
      $(this).closest('.focusbtn').prev().find('ul').animate({'left':-left+'px'});
    });

    

    
    
  })