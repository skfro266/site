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

$(".news_rt > li").hover(function(){
    $(this).find(".bl_bg").stop().animate({"height":"100%"},300);
},function(){
    $(this).find(".bl_bg").stop().animate({"height":"25%"},300);
});