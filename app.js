var $windowHeight = parseInt($(window).height());
var $midHeight = parseInt($(".middle").height());
var $topBottomHeight = ($windowHeight - $midHeight)/2;
$(".top, .bottom").css("height",$topBottomHeight);

$(window).resize(function() {
	var $windowHeight = parseInt($(window).height());
	var $midHeight = parseInt($(".middle").height());
	var $topBottomHeight = ($windowHeight - $midHeight)/2;
	$(".top, .bottom").css("height",$topBottomHeight);
});