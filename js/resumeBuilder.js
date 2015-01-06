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
	"skills" : ["Web Programming", "Software Development", "Problem Solving", "Learning", "Time Management"],
	"picture" : "images/fry.jpg"
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

