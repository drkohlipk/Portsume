<<<<<<< HEAD
$(function() { //on page load...
	
	/**********************global variables*********************/
	var descriptions = ['A Leader', 'Creative', 'A Fast Learner', 'Fun!', 'Innovative', 'Willing to Learn', 'Ambitious', 'Driven', 'Disruptive']; //descriptors for 'I Am' skills in cloud
	
	var randoNumber; //defines variable for the random number
	
	
	
	
	/**********************nav scroll function*********************/
	function checkScroll(){ //define checkScroll...
		
		var startY = $('#topbar').height(); //the point where the navbar changes in px

		if ($(window).scrollTop() > startY) { //if the window scroll is above the defined value of startY...
			
			$('#topbar').addClass('scrolled'); //add the class of 'scrolled' to the navbar
			
		} else { //if the window scroll is below the defined value of startY...
			
			$('#topbar').removeClass('scrolled'); //remove 'scrolled' from navbar
			
		} //else bracket
		
	}; //nav scroll function

	if ($('#topbar').length > 0) { //as long as a navbar is present...
		
		$(window).on('scroll load resize', function() { //anytime the page is scrolled, loaded, or resized...
			
			checkScroll(); //run the checkScroll function
			
		}); //on scroll load resize function
		
	} //if navbar is present bracket
	
	
	
	
	/**********************nav toggle click function*********************/
		$('.nav a').on('click', function(){ //when a nav toggle link is selected...
			
			if($('.navbar-toggle').css('display') !='none'){ //if nav toggle is set to 'display'
				
				$('.navbar-toggle').trigger('click');	//trigger nav to toggle closed
				
			} //if nav toggle is set to 'display' bracket
			
		}); //nav toggle click function
	
	
	
	
	/**********************rando*********************/
	function rando() { //generates the random number
		
		randoNumber = Math.floor(Math.random() * 9); //random number 0-9
		
	} //rando function
	
	
	
	
	/**********************changeDescriptor*********************/
	function changeDescriptor() { //changes the listed skill descriptor based on the random number
		
		$('#descriptor').fadeIn(500).delay(7000).fadeOut(500, function() { //slow fade in, stay for 7s, fade out
			
			$(this).text(descriptions[randoNumber]); //fade in/out this text!
			
			changeDescriptor(); //run the function again! loop loop loop
			
			rando(); //run the random number again
			
		}); //fade in/out function
		
	} //changeDescriptor function
	
	
	
	
	/**********************ftrPilot click function*********************/
	$('#ftrPilot').on('click', function() { //if you click on the fighter pilot link...
		
		$('#workHistory').css({"background":"url('../images/datJetAss.jpg') center no-repeat", "background-size":"cover"}); //update the bg image to the jet
		
		$('#workDates').text('Dates: October 2011 to Present'); //change the dates
		
		$('#p1').html('On the forefront of Marine Corps aviation, the F/A-18 provides our troops on the ground the support that they need when they need it.  The F/A stands for fighter-attack so the F/A-18 is also capable of air-to-air mission sets in which the aircrew are engaged in the fast paced chess match that is beyond visual range combat to the "fangs-out" warfare known as dog fighting.  We are a select few, but we work hard and we only accept perfection.'); //change the job description
		
		$('#wrkhis-pic').css({"background":"url('../images/300pxUSMCemblem.png') center no-repeat", "background-size":"cover"}); //change the emblem
		
		$('#ftrPilot').html('<img src="images/hornet.png" class="hornet" id="wrkHrnt"><span>Fighter Pilot</span>'); //add  the hornet to fighter pilot
		
		$('#officer').html('<span>Marine Corps Officer</span>'); //get rid of the hornet next to MCO
		
		$('#ta').html('<span>Teaching Assistant/Web Developer</span>'); //get rid of the hornet next to TA/WD
		
		$('#doodyContent').html('<li>Facilitate over 100 mission briefs/debriefs and aviation lessons learned annually.</li><li>Study the aircraft and weapons systems and tactics of both friendly and enemy nations to adapt to the combat situation at hand and be more lethal than the opponent.</li><li>Appointed as the subject matter expert for Surface-to-Air Counter Tactics, F/A-18 Combat Systems, Link 16 tactical data exchange network, AGM-84H/K Standoff Land Attack Missile, and F/A-18 Fire Detection and Extinguishing Systems.</li><li>Conducted operational planning and project management in support of the exercises NORTHER EDGE, MAX THUNDER, RED FLAG, and SCORPION FIRE as well as for Marine Aviation Weapons and Tactics Squadron’s premier courses Marine Division Tactics Course and Weapons and Tactics Instructor Course.</li><li>Planned and flew as part of four separate trans-oceanic strategic movements.</li><li>Logged over 540 mishap-free hours in the F/A-18 of which about 100 were in support of Operation Enduring Freedom.</li><li>Effectively and efficiently managed a system of combat systems under high stress situations throughout numerous detachments and two deployments.</li>'); //change info in the expand sxn
		
		$('#doodyWindow').addClass('hidden'); //hide the expanded sxn
		
	}); //ftrPilot click function
	
	
	
	
	/**********************officer click function*********************/
	$('#officer').on('click', function() { //if you click on the marine corps officer link...
		
		$('#workHistory').css({"background":"url('../images/TBS.jpg') center no-repeat", "background-size":"cover"}); //update the bg image to TBS pic
		
		$('#workDates').text('Dates: January 2008 to Present'); //change the dates
		
		$('#p1').text("Once completing the rigorous ten week long Officer Candidate School and the six month long Basic School, the Marine Corps Officer is entrusted with leading Marines.  This is an honor only few can claim and it is one with great responsibility.  Leadership skills are garnered and honed to effectively make up what is known as the World's premier fighting force.  Management of time and resources become second nature and we thrive in any condition we find ourselves in."); //change the job description
		
		$('#wrkhis-pic').css({"background":"url('../images/300pxUSMCemblem.png') center no-repeat", "background-size":"cover"}); //change the emblem
		
		$('#ftrPilot').html('<span>Fighter Pilot</span>'); //get rid of the hornet next to fighter pilot
		
		$('#officer').html('<img src="images/hornet.png" class="hornet" id="wrkHrnt"><span>Marine Corps Officer</span>'); //add the hornet to MCO
		
		$('#ta').html('<span>Teaching Assistant/Web Developer</span>'); //get rid of the hornet next to TA/WD
		
		$('#doodyContent').html('<em>Senior Operations Analyst (May 2016 – Present)</em><li>Manage day-to-day operations of over 3,400 members and 60 aircraft valued at over $4.2 billion.</li><li>Ensure seamless air support operations and training for over 1,000 Marines and Sailors.</li><br><em>Maintenance Officer (November 2015 – May 2016)</em><li>Transformed the unit’s Aviation Life Support Systems program from “Off-Track” to “On-Track” through constant and deliberate supervision and mentoring despite only having 40% of the requisite manning for the division and a persistent high operational tempo.</li><li>Developed and implemented a life-skills subject matter expert program within the division to help foster skills and qualities within my subordinates to ensure their success both in and out of the Marine Corps.</li><br><em>Squadron Legal/Public Affairs/Education/Evaluation Program Officer (June 2014 – November 2015)</em></li><li>Rebuilt the squadron evaluation program which had less than a 50% accurate reporting record with several major discrepancies to a program the had 100% accurate reporting with all discrepancies corrected with checks and balances instituted to ensure its longevity.</li><li>Directed the administrative compilation and review of five separate high-visibility legal cases with no discrepancies.</li><li>Mentored over 250 Marines and Sailors on the education programs and benefits available to them through the Marine Corps.</li><br><em>Mission Planning Officer (July 2013 – June 2014)</em><li>Monitored and administered implementation of the Combat iPad and Android Program for use in tactical aircraft.  Kept all software and systems operating as required for daily use and ensured all devices were fully functional.</li><li>Worked with the developers of the Personal Computer Debriefing System software to correct the bugs that were identified upon incorporation of the latest tactical systems software upgrade for the F/A-18.  Was in charge of the testing of three beta versions of the Personal Computer Debriefing System software.</li><li>Repaired and reloaded mission essential software and installed over 300 software patches to six mission planning computers on a tactical network.  Was in charge of the break down and set up of this tactical network as the squadron moved between strategic locations in austere environments throughout the Middle East.</li><br><em>Naval Aviator Training/Marine Corps Officer Training and Evaluation (January 2008 – July 2013)</em><li>Selected to bestow the honor of being a Marine Corps Officer after a 50% rate of attrition and to fly F/A-18s for the Marines, which accounts for less than 10% of all students that enter the selective Naval Aviator training pipeline.</li><li>Held a variety of leadership billets to ensure flexibility and high performance in different scenarios and stress levels.</li>'); //change info in the expand sxn
		
		$('#doodyWindow').addClass('hidden'); //hide the expanded sxn
		
	}); //officer click function
	
	
	
	
	/**********************ta click function*********************/
	$('#ta').on('click', function() { //if you click on the ta link...
		
		$('#workHistory').css({"background":"url('../images/PSUclass.jpg') center no-repeat", "background-size":"cover"}); //update the bg image to classroom pic
		
		$('#workDates').text('Dates: September 2004 to June 2006'); //change the dates
		
		$('#p1').text("Developing a student into a 'budding biologist' is no easy task and in order for said student to be successful as they progress through Penn State's challenging biology program, it takes a lot of dedication and hard work!  To alleviate some of the workload for a professor, a teaching assistant is brought on board so the professor can focus on making their syllabus and class presentations as productive as possible.  It is for this reason that Dr. Jacqueline McLaughlin is such an award winning professor with the incredible number successful students that she has produced!"); //change the job description
		
		$('#wrkhis-pic').css({"background":"url('../images/300pxPSU.png') center no-repeat", "background-size":"cover"}); //change the emblem
		
		$('#ftrPilot').html('<span>Fighter Pilot</span>'); //get rid of the hornet next to fighter pilot
		
		$('#officer').html('<span>Marine Corps Officer</span>'); //get rid of the hornet next to MCO
		
		$('#ta').html('<img src="images/hornet.png" class="hornet" id="wrkHrnt"><span>Teaching Assistant/Web Developer</span>'); //add the hornet to ta
		
		$('#doodyContent').html('<li>Built the web pages for Dr. McLaughlin’s study abroad program C.H.A.N.C.E.’s 2004 field trip to Peru and 2006 trip to Costa Rica after teaching myself basic web development skills.</li><li>Hand selected to be the teaching assistant for the following year’s biology student out of a class of 40 students.</li><li>Entrusted with the grading of exams, papers, and other assignments for Dr. Jacqueline McLaughlin’s Biology 110 class.</li><li>Assisted students in the learning and development of their knowledge in the field of biology.</li>'); //change info in the expand sxn
		
		$('#doodyWindow').addClass('hidden'); //hide the expanded sxn
		
	}); // ta click function
	
	
	
	
	/**********************wrkExpd click function*********************/
	$('#wrkExpd').on('click', function(){ //if you click on the expand 'here'...
		
		if ($('#doodyWindow').hasClass('hidden')) { //if the class of 'hidden' is present in doodyWindow
			
			$('#doodyWindow').removeClass('hidden'); //remove the class and show the world!
			
		} else { //if 'hidden' is not present...
			
			$('#doodyWindow').addClass('hidden'); //add 'hidden' and hide the expand sxn
			
		} //else bracket
		
	}); //wrkExpd click function
	
	
	
	
	/**********************wrkCls click function*********************/
	$('#wrkCls').on('click', function(){ //if you click on the 'here' for less...
		
		$('#doodyWindow').addClass('hidden'); //add the class of 'hidden' to doodyWindow
		
	}); //wrkCls click function
	
	
	
	
	/**********************bottom form click functions*********************/
	$('#nameEnter').on('click', function(){ //when nameEnter is clicked...
		
    $('#nameEnter').attr('value', ''); //remove 'name' from value
		
  }); //nameEnter click function
	
	
	$('#emailEnter').on('click', function(){ //when emailEnter is clicked...
		
    $('#emailEnter').attr('value', ''); //remove 'E-mail' from value
		
  }); //emailEnter click function
	
	
	$('#messageEnter').on('click', function(){ //when messageEnter is clicked...
		
    $('#messageEnter').text(''); //remove 'Type your message here' from value
		
  }); //messageEnter click function
	
	
	
	
	/**********************JS media query functions*********************/
	if (document.documentElement.clientWidth < 767) { //if the window is less than 767px...
		
		$(window).scroll(function() { //when the window is scrolled...allows fixed bg image for mobile
			
			var scrolledY = $(window).scrollTop(); //define scrolledY as the number of pixels vertically scrolled from the top by the user
			
			$('body').css('background-position', 'left ' + ((scrolledY)) + 'px'); //define the body's CSS property of bg-pos to left and the defined number of pixels scrolled
			
		}); //window scroll function
		
		$(window).on('load resize', function() { //anytime the page is loaded or resized...
			
			$('#dan-img').css('left', winWidth * .0568 + '%'); //re-center the pic of me!
			
			$('#name').css("margin-left", winWidth * .050 +"%"); //re-center my name!

		}); //on scroll load resize function
		
		if (document.documentElement.clientWidth < 550) { //if the window is less than 550px...
			
			var winWidth = document.documentElement.clientWidth;
			
			$('#wx').attr('src', 'images/PJsWXAppSmall.png'); //change the wx app thumbnail to the smaller one in portfolio
			
			$('#wiki').attr('src', 'images/WickedWikiSmall.png'); //change the wiki app thumbnail to the smaller one in portfolio
			
			$('#twitch').attr('src', 'images/PJsTwitchTVPortholeSmall.png'); //change the twitch.tv app thumbnail to the smaller one in portfolio
			
			$('#cr').attr('src', 'images/costaRicaSmall.png'); //change the costa rica website thumbnail to the smaller one in portfolio
			
			$('#peru').attr('src', 'images/peruSmall.png'); //change the peru website thumbnail thumbnail to the smaller one in portfolio
			
		}	//if 550px bracket
		
	} //if 767px bracket
	
	
	
	
	/**********************on page load, run these functions!*********************/
	rando(); //run the rando function
	
	changeDescriptor(); //run the changeDescriptor function
	
	$('#descriptor').text(descriptions[randoNumber]); //right off the bat, give me a descriptor in the cloud skill!
	
}); //on page load function
=======
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
		$('#workHistory').css({"background":"url('https://drkohlipk.github.io/resume/images/datJetAss.jpg') center no-repeat", "background-size":"cover"});
		$('#workDates').text('Dates: October 2011 to Present');
		$('#wrkhis-content').text('On the forefront of Marine Corps aviation, the F/A-18 provides our troops on the ground the support that they need when they need it.  The F/A stands for fighter-attack so the F/A-18 is also capable of air-to-air mission sets in which the aircrew are engaged in the fast paced chess match that is Beyond Visual Range combat to the "fangs-out" warfare known as dog fighting.  We are a select few, but we work hard and we only accept perfection.');
		$('#wrkhis-pic').css({"background":"url('https://drkohlipk.github.io/resume/images/300pxUSMCemblem.png') center no-repeat", "background-size":"cover"});
	});
	$('#officer').on("click", function() {
		$('#workHistory').css({"background":"url('https://drkohlipk.github.io/resume/images/TBS.jpg') center no-repeat", "background-size":"cover"});
		$('#workDates').text('Dates: January 2008 to Present');
		$('#wrkhis-content').text("Once completing the rigorous ten week long Officer Candidate School and the six month long Basic School, the Marine Corps Officer is entrusted with leading Marines.  This is an honor only few can claim and it is one with great responsibility.  Leadership skills are garnered and honed to effectively make up what is known as the World's premier fighting force.  Management of time and resources become second nature and we thrive in any condition we find ourselves in.");
		$('#wrkhis-pic').css({"background":"url('https://drkohlipk.github.io/resume/images/300pxUSMCemblem.png') center no-repeat", "background-size":"cover"});
	});
	$('#ta').on("click", function() {
		$('#workHistory').css({"background":"url('https://drkohlipk.github.io/resume/images/PSUclass.jpg') center no-repeat", "background-size":"cover"});
		$('#workDates').text('Dates: September 2004 to June 2006');
		$('#wrkhis-content').text("Assisted students in the learning and development of their knowledge in the field of Biology.  Was entrusted with the grading of exams, papers, and other assignments.  Built the web pages for Dr. Jacqueline McLaughlin for the C.H.A.N.C.E. 2004 field trip to Peru and 2006 field trip to Costa Rica.");
		$('#wrkhis-pic').css({"background":"url('https://drkohlipk.github.io/resume/images/300pxPSU.png') center no-repeat", "background-size":"cover"});
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
	rando();
	changeDescriptor();
	$('#descriptor').text(descriptions[randoNumber]);
});
>>>>>>> b524f4e0ab9315ab142bb34cc66e8506ac04d65c
