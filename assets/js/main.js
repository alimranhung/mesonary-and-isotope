(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".project-title li").on('click', function() {
        	$(".project-title li").removeClass("active");
        	$(this).addClass("active");
        	var selector =$(this).attr('data-filter');
        	$(".project-list").isotope({
        		filter:selector,
        	});
        	
        });
        	$('.project-list').isotope({
			  itemSelector: '.single-portfolio-item',
			  percentPosition: true,
			  masonry: {
		      columnWidth: '.single-portfolio-item',
			    horizontalOrder:true,
			  }
			});
        });



    jQuery(window).load(function(){

        
    });


}(jQuery));	