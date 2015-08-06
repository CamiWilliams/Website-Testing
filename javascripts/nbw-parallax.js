/*
Demo: Despiration Tutorial Parallax Demo
Author: Elias Ghosn - Despiration.com
Author URL: http://www.despiration.com/
Tutorial URL: http://www.ianlunn.co.uk/blog/code-tutorials/recreate-nikebetterworld-parallax/

License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Despiration.com simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.despiration.com/.

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/
//PARALLAX ----------------------------------------------------------------------------/
	
//detect mobile device and store the flag value in ISMOBILE variable
 var isMobile = false;
  
      if( navigator.userAgent.match(/Android/i) || 
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) || 
        navigator.userAgent.match(/iPad/i)|| 
        navigator.userAgent.match(/iPod/i) || 
        navigator.userAgent.match(/BlackBerry/i)){
                
          isMobile = true;
              
      }
	
	
$(document).ready(function() { //when the document is ready...

	//save selectors as variables to increase performance
	var $window = $(window);
	var $firstBG = $('#promo1');
	var bg1 = $("#promo1 .bg1");
	var $secondBG = $('#promo2');
	var bg2 = $("#promo2 .bg2");
	var $thirdBG = $('#promo3');
	var bg3 = $("#promo3 .bg3");
	var $fourthBG = $('#promo4');
	var bg4 = $("#promo4 .bg4");
	var $fifthBG = $('#promo5');
	var bg5 = $("#promo5 .bg5");
	var $sixthBG = $('#promo6');
	var bg6 = $("#promo6 .bg6");
	
	var windowHeight = $window.height(); //get the height of the window
	
	
	//apply the class "inview" to a section that is in the viewport
	$('#intro, .promo-parallax').bind('inview', function (event, visible) {
			if (visible == true) {
			$(this).addClass("inview");
			} else {
			$(this).removeClass("inview");
			}
		});
	
	
	//function that is called for every pixel the user scrolls. Determines the position of the background
	/*arguments: 
		x = horizontal position of background
		windowHeight = height of the viewport
		pos = position of the scrollbar
		adjuster = adjust the position of the background
		inertia = how fast the background moves in relation to scrolling
	*/
	function newPos(x, windowHeight, pos, adjuster, inertia){
		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
	}
	
	//function to be called whenever the window is scrolled or resized
	function Move(){ 
		var pos = $window.scrollTop(); //position of the scrollbar

		//if the first section is in view...
		if($firstBG.hasClass("inview")){
			//call the newPos function and change the background position
			$firstBG.css({'backgroundPosition': newPos(0, windowHeight, pos, 100, 0)}); 
			//call the newPos function and change the second background position
			bg1.css({'backgroundPosition': newPos(50, windowHeight, pos, 100, 0.2)});
		}
		
		//if the second section is in view...
		if($secondBG.hasClass("inview")){
			//call the newPos function and change the background position
			$secondBG.css({'backgroundPosition': newPos(0, windowHeight, pos, 100, 0)});  
			//$secondBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1550, 0.3)});
			bg2.css({'backgroundPosition': newPos(70, windowHeight, pos, 100, 0.2)});
			//call the newPos function and change the second background position
		}
		
		if ($thirdBG.hasClass("inview")){
			//call the newPos function and change the background position
			$thirdBG.css({'backgroundPosition': newPos(0, windowHeight, pos, 100, 0)});  
			//$secondBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1550, 0.3)});
			bg3.css({'backgroundPosition': newPos(50, windowHeight, pos, 3000, 0.2)});
			//call the newPos function and change the second background position
		}
		
		if ($fourthBG.hasClass("inview")){
			//call the newPos function and change the background position
			$fourthBG.css({'backgroundPosition': newPos(0, windowHeight, pos, 100, 0)}); 
			//$secondBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1550, 0.3)});
			//call the newPos function and change the second background position
			bg4.css({'backgroundPosition': newPos(50, windowHeight, pos, 2500, 0.2)});
		}

		if ($fifthBG.hasClass("inview")){
			//call the newPos function and change the background position
			$fifthBG.css({'backgroundPosition': newPos(0, windowHeight, pos, 100, 0)}); 
			//$secondBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1550, 0.3)});
			//call the newPos function and change the second background position
			bg5.css({'backgroundPosition': newPos(50, windowHeight, pos, 300, 0.2)});
		}

		$('#pixels').html(pos); //display the number of pixels scrolled at the bottom of the page
	}
		
	//MOBILE OPTIMIZED PARALLAX EXECUTION
	//====================================
	if(isMobile == true){
	//no parallax layers are activated when device is mobile	
	//also making all layers fixed on background to look like a single bg image layer
	$('.parallax-bg, promo-parallax').show();
	$('.parallax-bg').addClass('parallax-removed');
	$('.promo-parallax').addClass('parallax-removed');
	}

	else{
	
	//activating parallax layers only when device is not mobile	
	$window.resize(function(){ //if the user resizes the window...
		Move(); //move the background images in relation to the movement of the scrollbar
	});		
	
	$window.bind('scroll', function(){ //when the user is scrolling...
		Move(); //move the background images in relation to the movement of the scrollbar
	});	

	}
	
	
});