var $windowHeight = parseInt($(window).height());
var $midHeight = parseInt($(".middle").height());
var $topBottomHeight = ($windowHeight - $midHeight)/2;
var $elementWidth = $(".name").outerWidth() + $(".site-anchors").outerWidth();
var $centerWidth = $(window).width() - $elementWidth;
var $projectPicHeight = $(".projects-img-p1");
$(".top, .bottom").css("height",$topBottomHeight);

$(window).resize(function() {
	var $windowHeight = parseInt($(window).height());
	var $midHeight = parseInt($(".middle").height());
	var $topBottomHeight = ($windowHeight - $midHeight)/2;
	$(".top, .bottom").css("height",$topBottomHeight);
});

$(".body-content").css("margin-top",$("#nav").outerHeight());


