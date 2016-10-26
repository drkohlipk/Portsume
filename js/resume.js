$(function() {
	var descriptions = ['A Leader', 'Creative', 'A Fast Learner', 'Fun!', 'Innovative', 'Willing to Learn', 'Ambitious', 'Driven', 'Disruptive'];
	var randoNumber;
	function rando() {
		randoNumber = Math.floor(Math.random() * 9);
	}
	function changeDescriptor() {
		$('#descriptor').fadeIn(500).delay(7000).fadeOut(500, function() {
			$(this).text(descriptions[randoNumber]);
			changeDescriptor();
			rando();
		});
	}
	$('#ftrPilot').on("click", function() {
		$('#workHistory').css({"background":"url('../images/datJetAss.jpg') center no-repeat", "background-size":"cover"});
		$('#workDates').text('Dates: October 2011 to Present');
		$('#p1').html('On the forefront of Marine Corps aviation, the F/A-18 provides our troops on the ground the support that they need when they need it.  The F/A stands for fighter-attack so the F/A-18 is also capable of air-to-air mission sets in which the aircrew are engaged in the fast paced chess match that is Beyond Visual Range combat to the "fangs-out" warfare known as dog fighting.  We are a select few, but we work hard and we only accept perfection.');
		$('#wrkhis-pic').css({"background":"url('../images/300pxUSMCemblem.png') center no-repeat", "background-size":"cover"});
		$('#ftrPilot').html('<img src="images/hornet.png" class="hornet" id="wrkHrnt"><span>Fighter Pilot</span>');
		$('#officer').html('<span>Marine Corps Officer</span>');
		$('#ta').html('<span>Teaching Assistant/Web Developer</span>');
		$('#doodyWindow').html('<ul><li>test1</li><li>test1</li><li>test1</li></ul>');
		$('#doodyWindow').addClass('hidden');
	});
	$('#officer').on("click", function() {
		$('#workHistory').css({"background":"url('../images/TBS.jpg') center no-repeat", "background-size":"cover"});
		$('#workDates').text('Dates: January 2008 to Present');
		$('#p1').text("Once completing the rigorous ten week long Officer Candidate School and the six month long Basic School, the Marine Corps Officer is entrusted with leading Marines.  This is an honor only few can claim and it is one with great responsibility.  Leadership skills are garnered and honed to effectively make up what is known as the World's premier fighting force.  Management of time and resources become second nature and we thrive in any condition we find ourselves in.");
		$('#wrkhis-pic').css({"background":"url('../images/300pxUSMCemblem.png') center no-repeat", "background-size":"cover"});
		$('#ftrPilot').html('<span>Fighter Pilot</span>');
		$('#officer').html('<img src="images/hornet.png" class="hornet" id="wrkHrnt"><span>Marine Corps Officer</span>');
		$('#ta').html('<span>Teaching Assistant/Web Developer</span>');
		$('#doodyWindow').html('<ul><li>test2</li><li>test2</li><li>test2</li></ul>');
		$('#doodyWindow').addClass('hidden');
	});
	$('#ta').on("click", function() {
		$('#workHistory').css({"background":"url('../images/PSUclass.jpg') center no-repeat", "background-size":"cover"});
		$('#workDates').text('Dates: September 2004 to June 2006');
		$('#p1').text('Assisted students in the learning and development of their knowledge in the field of Biology.  Was entrusted with the grading of exams, papers, and other assignments.  Built the web pages for Dr. Jacqueline McLaughlin for the C.H.A.N.C.E. 2004 field trip to Peru and 2006 field trip to Costa Rica.');
		$('#wrkhis-pic').css({"background":"url('../images/300pxPSU.png') center no-repeat", "background-size":"cover"});
		$('#ftrPilot').html('<span>Fighter Pilot</span>');
		$('#officer').html('<span>Marine Corps Officer</span>');
		$('#ta').html('<img src="images/hornet.png" class="hornet" id="wrkHrnt"><span>Teaching Assistant/Web Developer</span>');
		$('#doodyWindow').html('<ul><li>test3</li><li>test3</li><li>test3</li></ul>');
		$('#doodyWindow').addClass('hidden');
	});
	$('#wrkExpd').on('click', function(){
		if ($('#doodyWindow').hasClass('hidden')) {
			$('#doodyWindow').removeClass('hidden');
		} else {
			$('#doodyWindow').addClass('hidden');
		}
	});
	$("#nameEnter").on("click", function(){ //when the searchbar is clicked, 'search' is removed
    $("#nameEnter").attr("value", "");
  }); //.on click function
	$("#emailEnter").on("click", function(){ //when the searchbar is clicked, 'search' is removed
    $("#emailEnter").attr("value", "");
  }); //.on click function
	$("#messageEnter").on("click", function(){ //when the searchbar is clicked, 'search' is removed
    $("#messageEnter").text("");
  }); //.on click function
	$(function() {
		$('.nav a').on("click", function(){
			if($('.navbar-toggle').css('display') !='none'){
				$(".navbar-toggle").trigger("click");	
			}
		});
	});
	/**
 * Listen to scroll to change header opacity class
 */
	function checkScroll(){
		var startY = $('#topbar').height(); //The point where the navbar changes in px

		if($(window).scrollTop() > startY){
			$('#topbar').addClass("scrolled");
		}else{
			$('#topbar').removeClass("scrolled");
		}
	}

	if($('#topbar').length > 0){
		$(window).on("scroll load resize", function(){
			checkScroll();
		});
	}
	if (document.documentElement.clientWidth < 767) {
		$(window).scroll(function() {
			var scrolledY = $(window).scrollTop();
			$('body').css('background-position', 'left ' + ((scrolledY)) + 'px');
		});
		if (document.documentElement.clientWidth < 550) {
			$('#wx').attr('src', 'images/PJsWXAppSmall.png');
			$('#wiki').attr('src', 'images/WickedWikiSmall.png');
			$('#twitch').attr('src', 'images/PJsTwitchTVPortholeSmall.png');
			$('#cr').attr('src', 'images/costaRicaSmall.png');
			$('#peru').attr('src', 'images/peruSmall.png');
			if (document.documentElement.clientWidth < 400) {
				$('#dan-img').css('left', '21%');
				if (document.documentElement.clientWidth < 350) {
					$('#dan-img').css('left', '16%');
				}
			}
		}		
	}
	rando();
	changeDescriptor();
	$('#descriptor').text(descriptions[randoNumber]);
});
