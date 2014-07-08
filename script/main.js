$(document).ready(function(){	

	$('.bxslider').bxSlider();				// load slider when page loads



	$(".top").rotate({ 						// Rotate picture on mouseover and mouseout 360 deg 
		bind: { 
	        mouseover : function() { 
	            $(this).rotate({animateTo:360})
	        },
	        mouseout : function() { 
	            $(this).rotate({animateTo:0})
	        }
	    } 
	});



	$(".dlbtn, .sicon").hover(function(){			// Dim download button/social icons on mouseover and return to normal on mouseout
    	$(this).animate({"opacity": .5}, 100);
	},function(){
    	$(this).animate({"opacity": 1}, 100);
	});


	$("footer p").wrap("<a href='http://www.dominiksosin.com'></a>");		// Add Link to Footer p element

	$("footer p").css({						// Add Underline and color and other settings to Footer p text
		"text-decoration":"underline",		
		"color":"#fff",
		"font-family":"Arial",
		"margin-bottom":"20px",
		"margin-right":"25px",
		"float":"right"
	});			

	$("footer p").hover(function(){					// Change color of Footer p text from white to blue on hover
    	$(this).css("color",  "##3366FF");
	},function(){
    	$(this).css("color",  "#fff");
	});


});



$(function() {
	/* for each menu element, on mouseenter, 
	enlarge the image, and show both .active span and 
	.wrap span.*/
    $('#menu > li').bind('mouseenter',function(){
		var $elem = $(this);
		$elem.find('img')
			 .stop(true)
			 .animate({
				'width':'170px',
				'height':'84px',
				'left':'0px'
			 },400,'easeOutBack')
			 .andSelf()
			 .find('.wrap')
		     .stop(true)
			 .animate({'top':'100px'},500,'easeOutBack')
			 .andSelf()
			 .find('.active')
		     .stop(true)
			 .animate({'height':'70px'},300,function(){	
		});
	}).bind('mouseleave',function(){
		var $elem = $(this);
				
		$elem.find('.active')
			 .stop(true)
			 .animate({'height':'0px'},300)
			 .andSelf().find('img')
			 .stop(true)
			 .animate({
				'width':'0px',
				'height':'0px',
				'left':'85px'},400)
			 .andSelf()
			 .find('.wrap')
			 .stop(true)
			 .animate({'top':'25px'},500);
	});


});



