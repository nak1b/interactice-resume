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
	"picture" : "images/fry.jpg"
}


var work = {
	"position" : "Freelace Developer",
	"employeer" : "Freelace.com",
	"dates" : "May 2014 - Dec 2014 ",
	"location" : "Online",
	"description" : "Designing and developing website for clients"
}

var project = {
	"title" : "Personal Website",
	"dates" : "2014",
	"description" : "Designed and Develope website to showcase my personal as well as academic achievements using latest web technologies like HTML, CSS, Javascript, jQuery, PHP and twitter bootstrap as base.",
	"images" : ["image1", "image2"] 
}

var education = {
	"school" : {
		"name": "Seneca College",
		"degree" : "Computer Programming",
		"yearStarted" : "2013-2015",
		"city" : "Toronto"
	},
	"OnlineCourses" : [
		{
			"title":"Javascript Basics",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "http://www.udacity.com"
		},

		{
			"title": "Intro To Computer Science",
			"school" : "Udacity",
			"dates" : "2013",
			"url" : "http://www.udacity.com"
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
$("#header").prepend(formatedMsg);
$("#header").prepend(formatedPic);

$("#topContacts").prepend(formatedLocation);
$("#topContacts").prepend(formatedTwitter);
$("#topContacts").prepend(formatedGithub);
$("#topContacts").prepend(formatedEmail);
$("#topContacts").prepend(formatedMobile);

$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);


//formating value for work section
//var formatedWorkStart = HTMLworkStart.replace("%data%", work.workStart);
var formatedWorkTitle = HTMLworkEmployer.replace("%data%", work.employeer) + HTMLworkTitle.replace("%data%", work.position);
var formatedWorkLocation = HTMLworkLocation.replace("%data%", work.location);
var formatedWordDesc = HTMLworkDescription.replace("%data%", work.description);
var formatedWordDate = HTMLworkDates.replace("%data%", work.dates);


//appending work data

$("#workExperience").append(HTMLworkStart);
$(".work-entry").prepend(formatedWordDesc);
$(".work-entry").prepend(formatedWordDate);
$(".work-entry").prepend(formatedWorkTitle);

var formatedSkills = HTMLskills.replace("%data%", bio.skills.join("    "));

if(bio.skills.length > 0)
{
	$("#header").append(HTMLskillsStart);
	for(var i = 0; i<bio.skills.length; i++)
	{
		var formatedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formatedSkills);
	}
	
}
//formatting value for education
var formatedSchoolStart = HTMLschoolStart.replace("%data%", education.school.yearStarted);
var formatedSchoolName = HTMLschoolStart.replace("%data%", education.school.name);
var formatedSchoolDegree = HTMLschoolStart.replace("%data%", education.school.degree);
var formatedSchoolLocation = HTMLschoolStart.replace("%data%", education.school.location);

