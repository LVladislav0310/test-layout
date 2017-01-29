/*
 Third party
 */
//= ../../bower_components/jquery/dist/jquery.min.js

/*
    Custom
 */
//= partials/helper.js

// window.onload = function () {
// 	var controls = $(".menu__controls");
// 	var catalog = $("menu__catalog__a");
// 	controls.on("click", function () {
// 		catalog.removeClass("active");
// 		$(this).addClass("active");
// 	})
// }

window.onload = function () {
	var items = $('.menu__item');
	items.hover( function () {
	     $(this).children('.sub-menu__wrapper').stop(true, false, true).slideDown();
	  }, 
	  function () {
	     $(this).children('.sub-menu__wrapper').stop(true, false, true).slideUp();
	  }
	);
	var imgs = ['pic0', 'pic1', 'pic2'];
	var subItems = $('.sub-menu__column-item');
	subItems.on('mouseover', function(){
		var i = $(this).index();
		console.log(i);
		if(i<=1 ){
			console.log("own");
			$(".hover-menu__img").attr("src","img/pic1.jpg");
		}
		else{
			if(i<=3){
				console.log("two");
				$(".hover-menu__img").attr("src","img/pic2.jpg");
			}
			else{
				console.log("three");
				$(".hover-menu__img").attr("src","img/pic3.jpg");
			}
		}
	
	});
	
	subItems.on('mouseout', function() {$(".hover-menu__img").attr("src","img/pic0.jpg")});
}
