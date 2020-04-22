$( document ).ready(function() {
	
   $(".feedback").click(function()
   	{
   		$("#feedback").toggle();
   	});
   $(".search").click(function()
   	{
   		$("#search").toggle();
   	});
   $(".cart").click(function()
   	{
   		$("#cart").toggle();
   	});

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

 $('nav.menu article').click(function(){
    $('nav.menu article').removeClass("active");
    $(this).addClass("active");
});

$('.projects .menu li').click(function(){
    
    /* Подсветка кнопки меню
    setTimeout(function(){
    	$('projects .menu>.filter-button').removeClass("active");
    	$(this).addClass("active");
    },10);
    */
});

 $('.posts article').click(function(){
    $('.posts article ').removeClass("active");
    $(this).addClass("active");
});
$('.posts article .window').click(function(){
	setTimeout(function(){
		$('.posts article ').removeClass("active");
	},100);
	
});
  
});

