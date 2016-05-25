var $windowHeight = parseInt($(window).height());
var $midHeight = parseInt($(".middle").height());
var $topBottomHeight = ($windowHeight - $midHeight)/2;
$(".top, .bottom").css("height",$topBottomHeight);

// var $isTrue = false;

// $("#redBorder").click(function() {
// 	// if($isTrue === false) {
// 	// 	$("*").css("border", "1px solid red");
// 	// 	$(".img-a, .header-img").css("border", "none");

// 	// 	$isTrue = true;
// 	// } else {
// 	// 	$("*").css("border", "none");
// 	// 	$isTrue = false;
// 	// }
// 	console.log($(".top").outerHeight());
// });

// $(".social-logos li a").click(function(e) {
// 	e.preventDefault();
// 	window.open($(this).attr("href"));
// })

$(window).resize(function() {
	var $windowHeight = parseInt($(window).height());
	var $midHeight = parseInt($(".middle").height());
	var $topBottomHeight = ($windowHeight - $midHeight)/2;
	$(".top, .bottom").css("height",$topBottomHeight);
});