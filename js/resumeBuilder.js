var bio = {
	"name" : "Nakib Momin",
	"role" : "Software / Web Developer",
	"contacts" : {
		"mobile" : "416-846-1043",
		"email" : "nbmomin14@gmail.com",
		"github" : "nak1b",
		"twitter" : "nakib14",
		"location" : "Toronto"
	},
	"welcomeMessage" : "Welcome to My Online Resume",
	"skills" : ["Web Programming ", "Software Development ", "Problem Solving ", "Learning ", "Time Management "],
	"picture" : "images/profile.jpg"
}


var work = {
	"position" : "Freelace Developer",
	"employeer" : "Freelace.com",
	"dates" : "May 2014 - Dec 2014 ",
	"location" : "Online",
	"description" : "Designing and developing website for clients"
}

var projects = {
	"projects": [	{"title" : "Personal Website",
		"dates" : "August 2014",
		"description" : "Designed and Develope website to showcase my personal as well as academic achievements using latest web technologies like HTML, CSS, Javascript, jQuery, PHP and twitter bootstrap as base.",
		"images" : ["images/pro1Thumb1.png", "images/pro1Thumb3.png", "images/pro1Thumb2.png"] },

		{"title" : "Personal Website",
		"dates" : "2014",
		"description" : "Designed and Develope website to showcase my personal as well as academic achievements using latest web technologies like HTML, CSS, Javascript, jQuery, PHP and twitter bootstrap as base.",
		"images" : ["images/197x148.gif", "images/197x148.gif"] },
	]
	
}

var education = {
	"school" : {
		"name": "Seneca College",
		"degree" : "Computer Programming",
		"dates" : "2013-2015",
		"city" : "Toronto",
		"major" : "CS"
	},
	"OnlineCourses" : [
		{
			"title":"Front-End Developer Nano Degree",
			"school" : "Udacity",
			"dates" : "2014 - 2015",
			"url" : "http://www.udacity.com/course/nd001"
		}
	]

} 


//formating values for header sections
var formatedName = HTMLheaderName.replace("%data%", bio.name);
var formatedRole = HTMLheaderRole.replace("%data%", bio.role);
var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formatedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formatedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formatedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage)
var formatedPic = HTMLbioPic.replace("%data%", bio.picture);


//appending data to header
//$("#header").prepend(formatedMsg);
$("#header").prepend(formatedPic);

$("#topContacts").prepend(formatedLocation);
$("#topContacts").prepend(formatedTwitter);
$("#topContacts").prepend(formatedGithub);
$("#topContacts").prepend(formatedEmail);
$("#topContacts").prepend(formatedMobile);

$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);


function displayWork()
{
	//formating value for work section
	var formatedWorkTitle = HTMLworkEmployer.replace("%data%", work.employeer) + HTMLworkTitle.replace("%data%", work.position);
	var formatedWorkLocation = HTMLworkLocation.replace("%data%", work.location);
	var formatedWordDesc = HTMLworkDescription.replace("%data%", work.description);
	var formatedWordDate = HTMLworkDates.replace("%data%", work.dates);


	//appending work data
	$("#workExperience").append(HTMLworkStart);
	$(".work-entry").append(formatedWorkTitle);
	$(".work-entry").append(formatedWordDate);
	$(".work-entry").append(formatedWordDesc);
}


displayWork();

projects.display = function()
{
	for(project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		
	
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		
		var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDesc);

		for(i=0; i<projects.projects[project].images.length; i++)
		{
				var formattedProjectImg = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
			$(".project-entry:last").append(formattedProjectImg);
		}

	}
}

projects.display();

if(bio.skills.length > 0)
{
	$("#header").append(HTMLskillsStart);
	for(var i = 0; i<bio.skills.length; i++)
	{
		var formatedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formatedSkills);
	}
	
}

$("#mapDiv").append(googleMap);

function displayEdu()
{
	$("#education").append(HTMLschoolStart);
	//formatting value for education
	
	var schoolName = HTMLschoolName.replace("%data%", education.school.name);
	var schoolDegree = HTMLschoolDegree.replace("%data%", education.school.degree);
	var formatedSchoolName = schoolName + schoolDegree;
	$(".education-entry").append(formatedSchoolName);
	var formatedSchoolLocation = HTMLschoolLocation.replace("%data%", education.school.city);
	$(".education-entry").append(formatedSchoolLocation);
	var formatedSchoolDates = HTMLschoolDates.replace("%data%", education.school.dates);
	$(".education-entry").append(formatedSchoolDates);

	$(".education-entry").append(clear);

	for(course in education.OnlineCourses)
	{

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineClasses);
		var onlineTitle = HTMLonlineTitle.replace("%data%", education.OnlineCourses[course].title);
		var onlineSchool = HTMLonlineSchool.replace("%data%", education.OnlineCourses[course].school);
		var formatedOnlineTitle = onlineTitle + onlineSchool;
		$(".education-entry:last").append(formatedOnlineTitle);
		
		var formatedOnlineDates = HTMLonlineDates.replace("%data%", education.OnlineCourses[course].dates);
		$(".education-entry:last").append(formatedOnlineDates);
	

		var formatedOnlineUrl = HTMLonlineURL.replace("%data%", education.OnlineCourses[course].url);
		$(".education-entry:last").append(formatedOnlineUrl);
		
		// var HTMLonlineSchool = ' - %data%</a>';
		// var HTMLonlineDates = '<div class="date-text">%data%</div>';
		// var HTMLonlineURL = '<br><a href="#">%data%</a>';
	}

}

displayEdu();

//adding footer section contact information
$("#footerContacts").prepend(formatedLocation);
$("#footerContacts").prepend(formatedTwitter);
$("#footerContacts").prepend(formatedGithub);
$("#footerContacts").prepend(formatedEmail);
$("#footerContacts").prepend(formatedMobile);


