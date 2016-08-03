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
		$('#wrkhis-content').text('On the forefront of Marine Corps aviation, the F/A-18 provides our troops on the ground the support that they need when they need it.  The F/A stands for fighter-attack so the F/A-18 is also capable of air-to-air mission sets in which the aircrew are engaged in the fast paced chess match that is Beyond Visual Range combat to the "fangs-out" warfare known as dog fighting.  We are a select few, but we work hard and we only accept perfection.');
		$('#wrkhis-pic').css({"background":"url('../images/300pxUSMCemblem.png') center no-repeat", "background-size":"cover"});
	});
	$('#officer').on("click", function() {
		$('#workHistory').css({"background":"url('../images/TBS.jpg') center no-repeat", "background-size":"cover"});
		$('#workDates').text('Dates: January 2008 to Present');
		$('#wrkhis-content').text("Once completing the rigorous ten week long Officer Candidate School and the six month long Basic School, the Marine Corps Officer is entrusted with leading Marines.  This is an honor only few can claim and it is one with great responsibility.  Leadership skills are garnered and honed to effectively make up what is known as the World's premier fighting force.  Management of time and resources become second nature and we thrive in any condition we find ourselves in.");
		$('#wrkhis-pic').css({"background":"url('../images/300pxUSMCemblem.png') center no-repeat", "background-size":"cover"});
	});
	$('#ta').on("click", function() {
		$('#workHistory').css({"background":"url('../images/PSUclass.jpg') center no-repeat", "background-size":"cover"});
		$('#workDates').text('Dates: September 2004 to June 2006');
		$('#wrkhis-content').text("Assisted students in the learning and development of their knowledge in the field of Biology.  Was entrusted with the grading of exams, papers, and other assignments.  Built the web pages for Dr. Jacqueline McLaughlin for the C.H.A.N.C.E. 2004 field trip to Peru and 2006 field trip to Costa Rica.");
		$('#wrkhis-pic').css({"background":"url('../images/300pxPSU.png') center no-repeat", "background-size":"cover"});
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
	rando();
	changeDescriptor();
	$('#descriptor').text(descriptions[randoNumber]);
});
