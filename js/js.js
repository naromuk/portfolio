	jQuery(document).ready(function ($) {
		
		
		
		//Cache some variables
		var slide = $('.slide');
		var mywindow = $(window);
		var htmlbody = $('html,body');
		var samplebutton = $('.button');
		var closebutton = $('#ajaxReturn');
		var samplemenu = $('.samplemenu');
//Adding elements on the load************************************************
		//$(".navigation").hide().delay(2500).fadeIn(1000);
		//$(".menu").hide().delay(2000).fadeIn('slow');
		
		//$('body').css('display', 'none');
		//$('body').fadeIn(1000);

//Ajax functions on click
		samplebutton.click(function() {
			event.preventDefault();
			newLocation = $(this).attr('href');
			//history.pushState({}, '', newLocation);
			$('.samplecontainer').fadeOut(300, function(){newpage(newLocation);});	
		});
		
		samplemenu.click(function() {
			event.preventDefault();
			newLocation = $(this).attr('href');
			//history.pushState({}, '', newLocation);
			$('.samplecontainer').fadeOut(300, function(){newpage(newLocation);});	
		});
		
		function newpage(href) {
			$(".ajaxcontainer")
				.hide()
				.load(href + " .ajaxcontainer >*", function(){
					$(".ajaxcontainer").fadeIn(300);
				
						$(".headerlineblack").animate({			
						width:"100%"
						},500, "swing",function(){
						$(".samplemenu").addClass("visible");
						$(".sampleclose").addClass("visible");
						});	
							
					});
			}
		
		closebutton.click(function() {
			event.preventDefault();
			$(".samplemenu").removeClass("visible");
			$(".sampleclose").removeClass("visible");
			$(".menu.active").animate({
			left:"-400px",
			opacity:"0"
			},200);
			$('.project-container').fadeOut("fast", function(){headerclose();});	
			
		});
		
		function headerclose(){
				$(".headerlinewhite").animate({			
								width:"100%"
								},700, function(){
								location.reload(true);});
								
		}
		
		function fullhorizontal(){
			//$.fn.fullpage.reBuild();
			$('.ajaxcontainer').fullpage({
					sectionsColor: ['#ffffff', '#4BBFC3', '#ffffff', 'whitesmoke', '#ccddff'],
					anchors: ['firstPage', 'secondPage', 'thirdPage', 'fifthSlide', 'sixthSlide'],
					menu: '.main-menu',
					loopHorizontal: true,
					continuousVertical: true,
					afterLoad: function(anchorLink, index){
				  
						if(index == 1){
							$('.currenttitle').html("Top");
						}
						if(index == 2){
							$('.currenttitle').html("About");
						}
						if(index == 3){
							$('.currenttitle').html("Projects");
							$(".samples").find('li').each(function(i) {
								var li = $(this);
								setTimeout(function() {
									li.addClass("visible");
								}, i*100);
							});
						} else {
							$(".samples").find('li').each(function(i) {
								var li = $(this);
								setTimeout(function() {
								li.removeClass("visible");
								}, i*100);
							});	
						}
					}
			});
		}
		
		
		
    	
	
	//When the menu icon is clicked, the icon will transform to X("Close") icon
	$(".menu").click(function() {
	
		$(".menu").toggleClass("close");
		$("#navitem5").find("a").addClass("white").removeClass("black");
		$(".outline").toggleClass("visible");
		
		//Adding z-index when menu button is clicked.
		$(".nav-item").toggleClass("index"); 
	
		
		//Adding class "visible" to the navigation items in delay of 200ms when menu icon is clicked.	
		$(".nav-item").each(function(i) {
			var $li = $(this);
			setTimeout(function() {
				$li.toggleClass("visible");
				}, i*100);
		});
		
		$('.contactoutline').removeClass('visible');
			
		
	});
	
	$('#navitem4').click(function(){
	
		$('.contactoutline').toggleClass('visible');
	});
	

	
	
	
	//scrollTop() returns the value of the current vertical position of the scroll bar.	
	mywindow.scroll(function() {
		
		
		var currentheightpercent = ($(document).scrollTop())/(($(document).height())-($(window).height()));
		
		var x = ($(".line").height())*currentheightpercent;
		$(".white-container").height(x);
		
		//The sample cases will show up in order when it scrolltop to slide 3.	
		if( currentheightpercent > 0.5 && currentheightpercent < 0.74){
			$(".sample").each(function(i) {
					var li = $(this);
					setTimeout(function() {
						li.addClass("visible");
						}, i*100);
				});	
			}
		//The sample cases will disappear in order when it scrolltop to slide 2.	
		if( currentheightpercent < 0.48 || currentheightpercent >0.75){
			$(".sample").each(function(i) {
					var li = $(this);
					setTimeout(function() {
						li.removeClass("visible");
						}, i*100);
				});	
			}
			
		});
		
	
	
	//function that fadein all the elements on the load.
	//$(".hidden").fadeIn(3000).fadeOut(1000).removeClass('hidden');
	$(".hidden").each(function(i){
		var $intelem = $(this);
		setTimeout(function() {
				$intelem.fadeIn('slow').removeClass('hidden');
				}, i*1000);
		
		});
	
	//Allowing the class "samples overview" to be draggable.
	
		
		$(".samples").draggable({scroll: false, axis: "x", stop: function(){
		
			var casesposition = $(".samples").position();
			var rightoffset = $(window).width()-$(".samples").width();
				if(casesposition.left > 0){
					$(".samples").animate({
					left: "0",
					},200, "swing")
				} else if(casesposition.left < rightoffset){
					$(".samples").animate({
					left: rightoffset,
					},200, "swing")
				} 
				
		}});
		
		$(".samples").on("swipeleft",function(){
		
					alert("hello");
				
		});
		
		$(".samples").on("swiperight",function(){
		
					$(".samples").animate({
					left: "0"
					},200, "swing");
				
		});
		
		
		

		
	//The animation when hover on send button.

		$(".button").hover(
			function(){
			$(this).find(".helper").height("180px");
			},
			function(){
			$(this).find(".helper").height("0px");
			}
		);
		
	//AboutBtn hover effect.
		$(".aboutbtn").hover( function(){
			var aboutid = $(this).attr('about-id');
			if(aboutid === '2'){
					$('.grid-container span').removeClass("visible");
					$('.grid-container span[about-id="' + aboutid + '"]').addClass("visible");
					
					$(".japanlist").find('li').each(function(i) {
					var li = $(this);
					setTimeout(function() {
						li.addClass("visible");
						}, i*100);
				});	
					
				} else{
					$('.grid-container span').removeClass("visible");
					$('.grid-container span[about-id="' + aboutid + '"]').addClass("visible");
					
					$(".japanlist").find('li').each(function(i) {
					var li = $(this);
					setTimeout(function() {
						li.addClass("nonvisible");
						li.removeClass("visible");
						li.removeClass("nonvisible");
						}, i*100);
					});
				}
		});
			
		$(".aboutbtn").hover(
			function(){
			$(this).find(".helper").height("120px");
			},
			function(){
			$(this).find(".helper").height("0px");
			}
		);
	
// hey [visitor name] effect******************************************************

		
		
		
		
		var hellotext = function(text){
			//var textinput = $(".contact-form").find('input[name="name"]').val();
			var hellotext = text;
				var letter = hellotext.split("");
				var n = 0;
				var length = letter.length;
						$("#heading").addClass("blinking-cursor");
						$.each(letter, function(i, letter) {	
						setTimeout(function() {
							$("#heading").append('<span class="char'+(n+1)+'">'+letter+'</span>');
							n++;
							},i*100);
						});

			
		}
		
		var cleartext = function(){
				var letters = $("#heading").children();
				var rletters = letters.get().reverse();
				
				$(rletters).each(function(i){
					var textletter = $(this);
					setTimeout (function(){
						textletter.remove();
						},i*100);
				});
		};
		
		hellotext("contact");
		$(".contact-form").find('input[name="name"]').on('blur', function() {
				var r = $.Deferred();
				var textinput = $(".contact-form").find('input[name="name"]').val();
				setTimeout(function(){
				//cleartext();
				hellotext('hello ' +textinput);
				r.resolve();
				},2000);
				//hellotext('hello ' +textinput);
				//cleartext().done(function(){ hellotext(textinput); });
				cleartext();
				//hellotext('hello ' +textinput);
		});	
		
		//Opening resume on new window.
		$("#navitem5").find("a").click(function() {
			window.open("narom_resume.pdf","Narom's Resume");
		});
		
		//Scroll automatically to next slide.
		//var lastScrollTop = 0;
		//$(window).scroll(function(){
		  // var st = $(this).scrollTop();
		   //if (st < lastScrollTop){
			   // downscroll code
				//var currentslide = $(".activenav").attr('data-slide');
				//var nxtslide = ++currentslide;
				//goToByScroll(nxtslide);
		  // } else {
			  // upscroll code
			  //var currentslide = $(".activenav").attr('data-slide');
				//var nxtslide = --currentslide;
				//goToByScroll(nxtslide);
		  // }
		  //lastScrollTop = st;
		//});
		
/*	
		$(function() {
			var $main = $("main");

			  $(document).on("click", "a", function() {
				var href = $(this).attr("href");

				history.pushState({}, '', href);
				$main.load(href + " main>*");
				return false;
				});
		});
		
		function samplescale(datasample){
		 var windowwidth = $(window).width();
		$(".samples").find('.sample[data-sample="'+ datasample + '"]').animate({
			top: "0",
			height:"100%",
			width:windowwidth,
			left:"0",
			},500);
	}
		//Make the sample window bigger when the "go" button is clicked.
	
		samplebutton.click(function(e) {
			var datasample = $(this).attr('data-sample');
			e.preventDefault();
			samplescale(datasample);
		});
		
*/	

});	
	
	
	
	
 