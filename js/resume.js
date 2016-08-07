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
		$('#p1').html('On the forefront of Marine Corps aviation, the F/A-18 provides our troops on the ground the support that they need when they need it.  The F/A stands for fighter-attack so the F/A-18 is also capable of air-to-air mission sets in which the aircrew are engaged in the fast paced chess match that is beyond visual range combat to the "fangs-out" warfare known as dog fighting.  We are a select few, but we work hard and we only accept perfection.');
		$('#wrkhis-pic').css({"background":"url('../images/300pxUSMCemblem.png') center no-repeat", "background-size":"cover"});
		$('#ftrPilot').html('<img src="images/hornet.png" class="hornet" id="wrkHrnt"><span>Fighter Pilot</span>');
		$('#officer').html('<span>Marine Corps Officer</span>');
		$('#ta').html('<span>Teaching Assistant/Web Developer</span>');
		$('#doodyContent').html('<li>Facilitate over 100 mission briefs/debriefs and aviation lessons learned annually.</li><li>Study the aircraft and weapons systems and tactics of both friendly and enemy nations to adapt to the combat situation at hand and be more lethal than the opponent.</li><li>Appointed as the subject matter expert for Surface-to-Air Counter Tactics, F/A-18 Combat Systems, Link 16 tactical data exchange network, AGM-84H/K Standoff Land Attack Missile, and F/A-18 Fire Detection and Extinguishing Systems.</li><li>Conducted operational planning and project management in support of the exercises NORTHER EDGE, MAX THUNDER, RED FLAG, and SCORPION FIRE as well as for Marine Aviation Weapons and Tactics Squadron’s premier courses Marine Division Tactics Course and Weapons and Tactics Instructor Course.</li><li>Planned and flew as part of four separate trans-oceanic strategic movements.</li><li>Logged over 540 mishap-free hours in the F/A-18 of which about 100 were in support of Operation Enduring Freedom.</li><li>Effectively and efficiently managed a system of combat systems under high stress situations throughout numerous detachments and two deployments.</li>');
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
		$('#doodyContent').html('<em>Senior Operations Analyst (May 2016 – Present)</em><li>Manage day-to-day operations of over 3,400 members and 60 aircraft valued at over $4.2 billion.</li><li>Ensure seamless air support operations and training for over 1,000 Marines and Sailors.</li><br><em>Maintenance Officer (November 2015 – May 2016)</em><li>Transformed the unit’s Aviation Life Support Systems program from “Off-Track” to “On-Track” through constant and deliberate supervision and mentoring despite only having 40% of the requisite manning for the division and a persistent high operational tempo.</li><li>Developed and implemented a life-skills subject matter expert program within the division to help foster skills and qualities within my subordinates to ensure their success both in and out of the Marine Corps.</li><br><em>Squadron Legal/Public Affairs/Education/Evaluation Program Officer (June 2014 – November 2015)</li><li>Rebuilt the squadron evaluation program which had less than a 50% accurate reporting record with several major discrepancies to a program the had 100% accurate reporting with all discrepancies corrected with checks and balances instituted to ensure its longevity.</li><li>Directed the administrative compilation and review of five separate high-visibility legal cases with no discrepancies.</li><li>Mentored over 250 Marines and Sailors on the education programs and benefits available to them through the Marine Corps.</li><br><em>Mission Planning Officer (July 2013 – June 2014)</em><li>Monitored and administered implementation of the Combat iPad and Android Program for use in tactical aircraft.  Kept all software and systems operating as required for daily use and ensured all devices were fully functional.</li><li>Worked with the developers of the Personal Computer Debriefing System software to correct the bugs that were identified upon incorporation of the latest tactical systems software upgrade for the F/A-18.  Was in charge of the testing of three beta versions of the Personal Computer Debriefing System software.</li><li>Repaired and reloaded mission essential software and installed over 300 software patches to six mission planning computers on a tactical network.  Was in charge of the break down and set up of this tactical network as the squadron moved between strategic locations in austere environments throughout the Middle East.</li><br><em>Naval Aviator Training/Marine Corps Officer Training and Evaluation (January 2008 – July 2013)</em><li>Was selected to bestow the honor of being a Marine Corps Officer after a 50% rate of attrition and to fly F/A-18s for the Marines, which accounts for less than 10% of all students that enter the selective Naval Aviator training pipeline.</li><li>Held a variety of leadership billets to ensure flexibility and high performance in different scenarios and stress levels.</li>');
		$('#doodyWindow').addClass('hidden');
	});
	$('#ta').on("click", function() {
		$('#workHistory').css({"background":"url('../images/PSUclass.jpg') center no-repeat", "background-size":"cover"});
		$('#workDates').text('Dates: September 2004 to June 2006');
		$('#p1').text("Developing a student into a 'budding biologist' is no easy task and in order for said student to be successful as they progress through Penn State's challenging biology program, it takes a lot of dedication and hard work!  To alleviate some of the workload for a professor, a teaching assistant is brought on board so the professor can focus on making their syllabus and class presentations as productive as possible.  It is for this reason that Dr. Jacqueline McLaughlin is such an award winning professor with the incredible number successful students that she has produced!");
		$('#wrkhis-pic').css({"background":"url('../images/300pxPSU.png') center no-repeat", "background-size":"cover"});
		$('#ftrPilot').html('<span>Fighter Pilot</span>');
		$('#officer').html('<span>Marine Corps Officer</span>');
		$('#ta').html('<img src="images/hornet.png" class="hornet" id="wrkHrnt"><span>Teaching Assistant/Web Developer</span>');
		$('#doodyContent').html('<li>Built the web pages for Dr. McLaughlin’s study abroad program C.H.A.N.C.E.’s 2004 field trip to Peru and 2006 trip to Costa Rica after teaching myself basic web development skills.</li><li>Was hand selected to be the teaching assistant for the following year’s biology student out of a class of 40 students.</li><li>Was entrusted with the grading of exams, papers, and other assignments for Dr. Jacqueline McLaughlin’s Biology 110 class.</li><li>Assisted students in the learning and development of their knowledge in the field of biology.</li>');
		$('#doodyWindow').addClass('hidden');
	});
	$('#wrkExpd').on('click', function(){
		if ($('#doodyWindow').hasClass('hidden')) {
			$('#doodyWindow').removeClass('hidden');
		} else {
			$('#doodyWindow').addClass('hidden');
		}
	});
	$('#wrkCls').on('click', function(){
		$('#doodyWindow').addClass('hidden');
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
