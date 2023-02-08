function projinfo(p)
{

  $('#proj1').removeClass('blinking');
  var temp = p.id;

  if (temp === "proj1" && document.getElementById("pinfo1").style.opacity !== "1") {
    document.getElementById("pinfo1").style.opacity = "1";
    document.getElementById("pbtn1").style.filter = "brightness(30%)";
    $('#proj1').addClass('no-hover');
    document.getElementById("pchosen1").style.display = "block";
  } else {
    document.getElementById("pinfo1").style.opacity = "0";
    document.getElementById("pbtn1").style.filter = "brightness(100%)";
    $('#proj1').removeClass('no-hover');
    document.getElementById("pchosen1").style.display = "none";
  }
  if (temp === "proj2" && document.getElementById("pinfo2").style.opacity !== "1") {
    document.getElementById("pinfo2").style.opacity = "1";
    document.getElementById("pbtn2").style.filter = "brightness(30%)";
    $('#proj2').addClass('no-hover');
    document.getElementById("pchosen2").style.display = "block";
  } else {
    document.getElementById("pinfo2").style.opacity = "0";
    document.getElementById("pbtn2").style.filter = "brightness(100%)";
    $('#proj2').removeClass('no-hover');
    document.getElementById("pchosen2").style.display = "none";
  }
  if (temp === "proj3" && document.getElementById("pinfo3").style.opacity !== "1") {
    document.getElementById("pinfo3").style.opacity = "1";
    document.getElementById("pbtn3").style.filter = "brightness(30%)";
    $('#proj3').addClass('no-hover');
    document.getElementById("pchosen3").style.display = "block";
  } else {
    document.getElementById("pinfo3").style.opacity = "0";
    document.getElementById("pbtn3").style.filter = "brightness(100%)";
    $('#proj3').removeClass('no-hover');
    document.getElementById("pchosen3").style.display = "none";
  }
  if (temp === "proj4" && document.getElementById("pinfo4").style.opacity !== "1") {
    document.getElementById("pinfo4").style.opacity = "1";
    document.getElementById("pbtn4").style.filter = "brightness(30%)";
    $('#proj4').addClass('no-hover');
    document.getElementById("pchosen4").style.display = "block";
  } else {
    document.getElementById("pinfo4").style.opacity = "0";
    document.getElementById("pbtn4").style.filter = "brightness(100%)";
    $('#proj4').removeClass('no-hover');
    document.getElementById("pchosen4").style.display = "none";
  }
  if (temp === "proj5" && document.getElementById("pinfo5").style.opacity !== "1") {
    document.getElementById("pinfo5").style.opacity = "1";
    document.getElementById("pbtn5").style.filter = "brightness(30%)";
    $('#proj5').addClass('no-hover');
    document.getElementById("pchosen5").style.display = "block";
  } else {
    document.getElementById("pinfo5").style.opacity = "0";
    document.getElementById("pbtn5").style.filter = "brightness(100%)";
    $('#proj5').removeClass('no-hover');
    document.getElementById("pchosen5").style.display = "none";
  }
  if (temp === "proj6" && document.getElementById("pinfo6").style.opacity !== "1") {
    document.getElementById("pinfo6").style.opacity = "1";
    document.getElementById("pbtn6").style.filter = "brightness(30%)";
    $('#proj6').addClass('no-hover');
    document.getElementById("pchosen6").style.display = "block";
  } else {
    document.getElementById("pinfo6").style.opacity = "0";
    document.getElementById("pbtn6").style.filter = "brightness(100%)";
    $('#proj6').removeClass('no-hover');
    document.getElementById("pchosen6").style.display = "none";
  }
}

function expinfo(e)
{

  var temp = e.id;

  if (temp === "exp1" && document.getElementById("einfo1").style.opacity !== "1") {
    document.getElementById("einfo1").style.opacity = "1";
    document.getElementById("ebtn1").style.filter = "brightness(30%)";
    $('#exp1').addClass('no-hover');
    document.getElementById("echosen1").style.display = "block";
  } else {
    document.getElementById("einfo1").style.opacity = "0";
    document.getElementById("ebtn1").style.filter = "brightness(100%)";
    $('#exp1').removeClass('no-hover');
    document.getElementById("echosen1").style.display = "none";
  }
  if (temp === "exp2" && document.getElementById("einfo2").style.opacity !== "1") {
    document.getElementById("einfo2").style.opacity = "1";
    document.getElementById("ebtn2").style.filter = "brightness(30%)";
    $('#exp2').addClass('no-hover');
    document.getElementById("echosen2").style.display = "block";
  } else {
    document.getElementById("einfo2").style.opacity = "0";
    document.getElementById("ebtn2").style.filter = "brightness(100%)";
    $('#exp2').removeClass('no-hover');
    document.getElementById("echosen2").style.display = "none";
  }
  if (temp === "exp3" && document.getElementById("einfo3").style.opacity !== "1") {
    document.getElementById("einfo3").style.opacity = "1";
    document.getElementById("ebtn3").style.filter = "brightness(30%)";
    $('#exp3').addClass('no-hover');
    document.getElementById("echosen3").style.display = "block";
  } else {
    document.getElementById("einfo3").style.opacity = "0";
    document.getElementById("ebtn3").style.filter = "brightness(100%)";
    $('#exp3').removeClass('no-hover');
    document.getElementById("echosen3").style.display = "none";
  }
  if (temp === "exp4" && document.getElementById("einfo4").style.opacity !== "1") {
    document.getElementById("einfo4").style.opacity = "1";
    document.getElementById("ebtn4").style.filter = "brightness(30%)";
    $('#exp4').addClass('no-hover');
    document.getElementById("echosen4").style.display = "block";
  } else {
    document.getElementById("einfo4").style.opacity = "0";
    document.getElementById("ebtn4").style.filter = "brightness(100%)";
    $('#exp4').removeClass('no-hover');
    document.getElementById("echosen4").style.display = "none";
  }
  if (temp === "exp5" && document.getElementById("einfo5").style.opacity !== "1") {
    document.getElementById("einfo5").style.opacity = "1";
    document.getElementById("ebtn5").style.filter = "brightness(30%)";
    $('#exp5').addClass('no-hover');
    document.getElementById("echosen5").style.display = "block";
  } else {
    document.getElementById("einfo5").style.opacity = "0";
    document.getElementById("ebtn5").style.filter = "brightness(100%)";
    $('#exp5').removeClass('no-hover');
    document.getElementById("echosen5").style.display = "none";
  }
  if (temp === "exp6" && document.getElementById("einfo6").style.opacity !== "1") {
    document.getElementById("einfo6").style.opacity = "1";
    document.getElementById("ebtn6").style.filter = "brightness(30%)";
    $('#exp6').addClass('no-hover');
    document.getElementById("echosen6").style.display = "block";
  } else {
    document.getElementById("einfo6").style.opacity = "0";
    document.getElementById("ebtn6").style.filter = "brightness(100%)";
    $('#exp6').removeClass('no-hover');
    document.getElementById("echosen6").style.display = "none";
  }
}


$(window).scroll(function() {

  var scrollPosition = $(window).scrollTop();

  var meTop = $('#me').offset().top;
  var skillsTop = $('#skills').offset().top -10;
  var projectsTop = $('#projects').offset().top -10;
  var experienceTop = $('#experience').offset().top -10;

  if (scrollPosition >= experienceTop) {
    $('#me_link').removeClass('active1');
    $('#skills_link').removeClass('active1');
    $('#projects_link').removeClass('active1');
    $('#experience_link').addClass('active1');
  }
  else if (scrollPosition >= projectsTop) {
    $('#me_link').removeClass('active1');
    $('#skills_link').removeClass('active1');
    $('#experience_link').removeClass('active1');
    $('#projects_link').addClass('active1');
  }
  else if (scrollPosition >= skillsTop) {
    $('#me_link').removeClass('active1');
    $('#projects_link').removeClass('active1');
    $('#experience_link').removeClass('active1');
    $('#skills_link').addClass('active1');
  }
  else {
    $('#skills_link').removeClass('active1');
    $('#projects_link').removeClass('active1');
    $('#experience_link').removeClass('active1');
    $('#me_link').addClass('active1');
  }
});
