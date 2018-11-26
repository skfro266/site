$(".fa-bars").click(function(){
	$(".navs_sub").stop().slideToggle(100);
});

$(".navs > li").hover(function(){
    $(".drop_menu").stop().fadeOut(0);
    $(this).children(".drop_menu").stop().fadeIn(100);
},function(){
    $(".drop_menu").stop().fadeOut(0);
});

var start = 0;
Slide();

function Slide() {
    var banner = document.getElementsByClassName("slide");
    for (i = 0; i < banner.length; i++) {
        banner[i].style.display = "none";  
    }
    start++;
    if (start > banner.length) {start = 1} 
    banner[start-1].style.display = "block";  
    setTimeout(Slide, 3000);
}

$(".intro_rt > li").hover(function(){
    $(this).find(".bl_bg").stop().animate({"height":"100%"},300);
},function(){
    $(this).find(".bl_bg").stop().animate({"height":"25%"},300);
});

$(".product_lt").hover(function(){
    $(this).find(".product_lt > img").css({"transform":"scale(1.2)","opacity":"0.8"});
},function(){
    $(this).find(".product_lt > img").css({"transform":"scale(1)","opacity":"1"});
});

$(".play > i").on("click", function(){
    var file = "video.html";
    var opt = "width="+$(window).width()+", height="+$(window).height();
    window.open(file, "video", opt);
});

$(".news_rt > li").hover(function(){
    $(this).find(".bl_bg").stop().animate({"height":"100%"},300);
},function(){
    $(this).find(".bl_bg").stop().animate({"height":"25%"},300);
});






































/*
$(window).scroll(function(){
	var gap = $("html, body").scrollTop();
	if(gap > 150) {
		if($(".navs").hasClass("dn_bg") == false) {
			$(".navs").css({"top":"-60px"}).addClass("dn_bg");
			$(".navs").stop().animate({"top":"0px"}, 500);
		}
	}
	else {
		$(".navs").css({"top":"-60px"}).removeClass("dn_bg");
		$(".navs").stop().animate({"top":"0px"}, 500);
	}
});
*/
