$(document).ready(function(e) {
	$(".menu li").eq(1).click(function(e) {
		x1 = $("#firstSec").offset().top;
        $("body,html").animate({scrollTop:x1-80},1000);
    });
	$(".menu li").eq(2).click(function(e) {
		x2 = $("#secSec").offset().top;
        $("body,html").animate({scrollTop:x2-80},1000);
	});
	$(".menu li").eq(3).click(function(e) {
		x3 = $("#thiSec").offset().top;
        $("body,html").animate({scrollTop:x3-80},1000);
	});
	$(".menu li").eq(4).click(function(e) {
		x4 = $("#forSec").offset().top;
        $("body,html").animate({scrollTop:x4-80},1000);
	});
});
