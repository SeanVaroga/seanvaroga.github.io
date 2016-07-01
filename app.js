var $windowHeight = parseInt($(window).height());
var $midHeight = parseInt($(".middle").height());
var $topBottomHeight = ($windowHeight - $midHeight)/2;
var $elementWidth = $(".name").outerWidth() + $(".site-anchors").outerWidth();
var $centerWidth = $(window).width() - $elementWidth;
$(".top, .bottom").css("height",$topBottomHeight);

$(window).resize(function() {
	var $windowHeight = parseInt($(window).height());
	var $midHeight = parseInt($(".middle").height());
	var $topBottomHeight = ($windowHeight - $midHeight)/2;
	$(".top, .bottom").css("height",$topBottomHeight);
});

$(".body-content").css("margin-top",$("#nav").outerHeight());
console.log($(".name").outerWidth());
console.log($(".filler-text").outerWidth());
console.log($(".site-anchors").outerWidth());
console.log($(window).width());
// $(".filler-text").css("width","1052px").css("padding","0");
console.log($("#nav").outerWidth());
console.log($centerWidth);