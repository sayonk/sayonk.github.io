var p1, p2, p3, p4, p5;

function projinfo(p)
{

  var temp = p.id;

  if (temp === "proj1" && document.getElementById("info1").style.opacity !== "1") {
    document.getElementById("info1").style.opacity = "1";
    document.getElementById("btn1").style.filter = "brightness(30%)";
    $(p).addClass('no-hover');
    document.getElementById("chosen1").style.display = "block";
    p1 = p;
  } else {
    document.getElementById("info1").style.opacity = "0";
    document.getElementById("btn1").style.filter = "brightness(100%)";
    $(p1).removeClass('no-hover');
    document.getElementById("chosen1").style.display = "none";
  }
  if (temp === "proj2" && document.getElementById("info2").style.opacity !== "1") {
    document.getElementById("info2").style.opacity = "1";
    document.getElementById("btn2").style.filter = "brightness(30%)";
    $(p).addClass('no-hover');
    document.getElementById("chosen2").style.display = "block";
    p2 = p;
  } else {
    document.getElementById("info2").style.opacity = "0";
    document.getElementById("btn2").style.filter = "brightness(100%)";
    $(p2).removeClass('no-hover');
    document.getElementById("chosen2").style.display = "none";
  }
  if (temp === "proj3" && document.getElementById("info3").style.opacity !== "1") {
    document.getElementById("info3").style.opacity = "1";
    document.getElementById("btn3").style.filter = "brightness(30%)";
    $(p).addClass('no-hover');
    document.getElementById("chosen3").style.display = "block";
    p3 = p;
  } else {
    document.getElementById("info3").style.opacity = "0";
    document.getElementById("btn3").style.filter = "brightness(100%)";
    $(p3).removeClass('no-hover');
    document.getElementById("chosen3").style.display = "none";
  }
  if (temp === "proj4" && document.getElementById("info4").style.opacity !== "1") {
    document.getElementById("info4").style.opacity = "1";
    document.getElementById("btn4").style.filter = "brightness(30%)";
    $(p).addClass('no-hover');
    document.getElementById("chosen4").style.display = "block";
    p4 = p;
  } else {
    document.getElementById("info4").style.opacity = "0";
    document.getElementById("btn4").style.filter = "brightness(100%)";
    $(p4).removeClass('no-hover');
    document.getElementById("chosen4").style.display = "none";
  }
  if (temp === "proj5" && document.getElementById("info5").style.opacity !== "1") {
    document.getElementById("info5").style.opacity = "1";
    document.getElementById("btn5").style.filter = "brightness(30%)";
    $(p).addClass('no-hover');
    document.getElementById("chosen5").style.display = "block";
    p5 = p;
  } else {
    document.getElementById("info5").style.opacity = "0";
    document.getElementById("btn5").style.filter = "brightness(100%)";
    $(p5).removeClass('no-hover');
    document.getElementById("chosen5").style.display = "none";
  }
}

var e1, e2, e3, e4, e5;

function expinfo(e)
{

  var temp = e.id;

  if (temp === "exp1" && document.getElementById("info6").style.opacity !== "1") {
    document.getElementById("info6").style.opacity = "1";
    document.getElementById("btn6").style.filter = "brightness(30%)";
    $(e).addClass('no-hover');
    document.getElementById("chosen6").style.display = "block";
    e1 = e;
  } else {
    document.getElementById("info6").style.opacity = "0";
    document.getElementById("btn6").style.filter = "brightness(100%)";
    $(e1).removeClass('no-hover');
    document.getElementById("chosen6").style.display = "none";
  }
  if (temp === "exp2" && document.getElementById("info7").style.opacity !== "1") {
    document.getElementById("info7").style.opacity = "1";
    document.getElementById("btn7").style.filter = "brightness(30%)";
    $(e).addClass('no-hover');
    document.getElementById("chosen7").style.display = "block";
    e2 = e;
  } else {
    document.getElementById("info7").style.opacity = "0";
    document.getElementById("btn7").style.filter = "brightness(100%)";
    $(e2).removeClass('no-hover');
    document.getElementById("chosen7").style.display = "none";
  }
  if (temp === "exp3" && document.getElementById("info8").style.opacity !== "1") {
    document.getElementById("info8").style.opacity = "1";
    document.getElementById("btn8").style.filter = "brightness(30%)";
    $(e).addClass('no-hover');
    document.getElementById("chosen8").style.display = "block";
    e3 = e;
  } else {
    document.getElementById("info8").style.opacity = "0";
    document.getElementById("btn8").style.filter = "brightness(100%)";
    $(e3).removeClass('no-hover');
    document.getElementById("chosen8").style.display = "none";
  }
  if (temp === "exp4" && document.getElementById("info9").style.opacity !== "1") {
    document.getElementById("info9").style.opacity = "1";
    document.getElementById("btn9").style.filter = "brightness(30%)";
    $(e).addClass('no-hover');
    document.getElementById("chosen9").style.display = "block";
    e4 = e;
  } else {
    document.getElementById("info9").style.opacity = "0";
    document.getElementById("btn9").style.filter = "brightness(100%)";
    $(e4).removeClass('no-hover');
    document.getElementById("chosen9").style.display = "none";
  }
  if (temp === "exp5" && document.getElementById("info10").style.opacity !== "1") {
    document.getElementById("info10").style.opacity = "1";
    document.getElementById("btn10").style.filter = "brightness(30%)";
    $(e).addClass('no-hover');
    document.getElementById("chosen10").style.display = "block";
    e5 = e;
  } else {
    document.getElementById("info10").style.opacity = "0";
    document.getElementById("btn10").style.filter = "brightness(100%)";
    $(e5).removeClass('no-hover');
    document.getElementById("chosen10").style.display = "none";
  }
}


$(window).scroll(function() {

  var scrollPosition = $(window).scrollTop();

  var skillsTop = $('#skills').offset().top-51;
  var projectsTop = $('#projects').offset().top-51;
  var experienceTop = $('#experience').offset().top-51;

  if (scrollPosition >= experienceTop) {
    $('#skills_link').removeClass('active1');
    $('#projects_link').removeClass('active1');
    $('#experience_link').addClass('active1');
  }
  else if (scrollPosition >= projectsTop) {
    $('#skills_link').removeClass('active1');
    $('#experience_link').removeClass('active1');
    $('#projects_link').addClass('active1');
  }
  else if (scrollPosition >= skillsTop) {
    $('#projects_link').removeClass('active1');
    $('#experience_link').removeClass('active1');
    $('#skills_link').addClass('active1');
  }
  else {
    $('#skills_link').removeClass('active1');
    $('#projects_link').removeClass('active1');
    $('#experience_link').removeClass('active1');
  }
});
