(function($){

$(".toggle-bar").click(function(){

	 $("header .col2 .manu").slideToggle(500);


});


//Top 
$(".top").click(function(){
	$("html, body").animate({
		scrollTop:0
	}, 1000);
});


//Click to go section 
$('.manu li a').click(function(e) {
  	
  	let tt = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(tt).offset().top
	}, 1000);
    
    e.preventDefault();
});



})(jQuery)