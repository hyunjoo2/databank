$(window).scroll(function () {

	var Top = $(this).scrollTop();
	//var header__inner = $(".header__inner");
	var mainOffset = $( '.news' ).offset();

	// if (Top > 100) {
	//     $(".etc-btn").addClass('on');
	//     $(".header.main").addClass('on');
	// }
	// if (Top < 100) {
	//     $(".etc-btn").removeClass('on');
	//     $(".header.main").removeClass('on');
	// }

	//document가 mainOffset 값보다 많이 스크롤 되면 실행
	// if ( $( document ).scrollTop() >= mainOffset.top ) {
	// 	$( '.top-button' ).addClass( 'on' );
	// 	//$("body").css("padding-top", "50px");
	// }
	// //mainOffset 값 이하로 줄어들면 실행
	// else {
	// 	$( '.top-button' ).removeClass( 'on' );
	// 	//$("body").css("padding-top", "0px");
	// }


});
$(function () {

    $(".top-button").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 300);	
    });

	$(".sitemap-button").click(function(){
		$(".sitemap_cont").css("display", 'block');
	});

	$(".content__inner.sub").parents().find('header').children(".header").addClass("sub");
	$(".content__inner.sub").parents().find('footer').children().find(".footer__inner").addClass("sub");

	//breadcrumb
	$(".u-page-breadcrumb__item--mobile-hide").click(function(){
		$('.u-page-list--depth1').toggleClass("is-over");
		$(this).toggleClass("is-over");
		
	});
	$(".u-page-breadcrumb__item--last").click(function(){
		$('.u-page-list--depth2').toggleClass("is-over");
		$(this).toggleClass("is-over");
	});

	//tab-menu
	$('.content__tab ul.tab li').click(function () {
		var activeTab = $(this).attr('data-tab');
		$('.content__tab ul.tab li').removeClass('current');
		$('.content__tab .tabcontent').removeClass('current');
		$(this).addClass('current');
		$('#' + activeTab).addClass('current');
	});

	$('.content__tab2 ul.tab li').click(function () {
		var activeTab2 = $(this).attr('data-tab');
		$('.content__tab2 ul.tab li').removeClass('current');
		$('.content__tab2 .tabcontent').removeClass('current');
		$(this).addClass('current');
		$('#' + activeTab2).addClass('current');
	});
    

});











//Tweenmax를 이용한 header  

// $(function () {
//     gnbSubMenu();

// });


// function gnbSubMenu() {
//     var gnb = $(".gnb");
//     var gnbChild = $(".gnb > div");
//     var gnbTitle = gnb.find('a');

//     gnbChild.on({
//         mouseover: function () {
//             $(this).addClass('on')
//         },
//         mouseleave: function () {
//             $(this).removeClass('on');
//         }
//     });
//     gnbTitle.mouseover(function () {
//         headerOpen();
//     });
//     $('.gnb').mouseleave(function () {
//         headerClose();
//         $('body').css('overflow', 'initail')
//     });

//     function headerOpen() { //Tweenmax를 이용한 헤더 메뉴 슬라이드 open
//         TweenMax.killAll();
//         TweenMax.to($(".menu"), .5, {
//             height: 440,
//             ease: 'easeOutExpo'
//         });
//         $(".gnb").addClass("on");
//     }

//     function headerClose() { //Tweenmax를 이용한 헤더 메뉴 슬라이드 close
//         TweenMax.killAll();
//         TweenMax.to($(".menu"), .5, {
//             height: 60,
//             ease: 'easeOutExpo',
//             onComplete: function () {
//                 $(".gnb").removeClass("on");
//             }
//         });
//         $('.overlay').removeClass('on');
//         $(".gnb-hover-bar").removeClass("on");
//     }



    



// }
