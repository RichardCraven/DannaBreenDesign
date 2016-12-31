$(function() {
	$.scrollify({
			section : ".section",
			sectionName : "",
			interstitialSection : "",
			easing: "easeOutExpo",
			scrollSpeed: 1100,
			offset : 0,
			scrollbars: true,
			standardScrollElements: "",
			setHeights: true,
			overflowScroll: true,
			updateHash: true,
			touchScroll:true,
			before:function() {},
			after:function() {},
			afterResize:function() {},
			afterRender:function() {}
	});
});
// console.log($.scrollify.current())

// $('.scrollFirst').click(function(){
// 	$.scrollify.move("#name");
// })

$('.scroll').click(function(){
	// console.log($.scrollify.current())
	$.scrollify.next();
	// console.log($.scrollify.current())
})