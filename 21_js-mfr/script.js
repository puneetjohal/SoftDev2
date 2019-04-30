//Puneet Johal
//SoftDev2 pd8
//K21 -- Onions, Bell Peppers, and Celery, Oh My!
//2018-04-29

d3.json("https://raw.githubusercontent.com/stuy-softdev/workshop/master/thluffy/21_js-mfr/2006_-_2012_School_Demographics_and_Accountability_Snapshot.json?token=AFRFQK7N644MC7AUI4U22J242DI26", function(error, d) {

var data = d.filter(function(n) {return n["schoolyear"] == 20112012;});
document.getElementById("numSchools").innerHTML = data.length;

var maleOnly = data.filter(function(n) {return n['male_per'] == 100;});
document.getElementById("allMale").innerHTML = maleOnly.length / data.length;

var sumFemales = data.map(function(n) {return n['female_num'];}).reduce(function(x,y) {return x+y});
var sumEnrolled = data.map(function(n) {return n['total_enrollment'];}).reduce(function(x,y) {return x + y});
document.getElementById("meanFemales").innerHTML = sumFemales / sumEnrolled;

var retElls = data.filter(function(n) {return n['ell_percent'] > 10;})
document.getElementById("ells").innerHTML = retElls.length;
});
