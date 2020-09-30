function getColour(c1,c2,pct) {
  var r = Math.ceil(parseInt(c1.substring(0,2), 16) * pct + parseInt(c2.substring(0,2), 16) * (1-pct));
  var g = Math.ceil(parseInt(c1.substring(2,4), 16) * pct + parseInt(c2.substring(2,4), 16) * (1-pct));
  var b = Math.ceil(parseInt(c1.substring(4,6), 16) * pct + parseInt(c2.substring(4,6), 16) * (1-pct));

  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  new_r = (r.length == 1) ? '0' + r : r;
  new_g = (g.length == 1) ? '0' + g : g;
  new_b = (b.length == 1) ? '0' + b : b;

  return '#' + new_r + new_g + new_b
}

function getC(c1,c2,pct) {
  return c2
}

window.onload = function onLoad() {

  document.getElementById("btn1").value = "Read More";
  document.getElementById("btn2").value = "Read More";
  document.getElementById("btn3").value = "Read More";
  document.getElementById("btn4").value = "Read More";
  document.getElementById("btn5").value = "Read More";
  document.getElementById("btn6").value = "Read More";
  document.getElementById("btn7").value = "Read More";
  document.getElementById("btn8").value = "Read More";

  var pct1 = 0.7
  var circle = new ProgressBar.Circle('#bar1', {
      strokeWidth: 8,  // This means 4% of the container
      color: '#000',
      easing: 'easeInOut',
      from: { color: '#ff0000'},
      to: { color: getColour('00ff00','ff0000',pct1)},
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
      }

  });
  circle.animate(pct1);

  var pct2 = 0.9
  var circle = new ProgressBar.Circle('#bar2', {
      strokeWidth: 8,  // This means 4% of the container
      color: '#000',
      easing: 'easeInOut',
      from: { color: '#ff0000'},
      to: { color: getColour('00ff00','ff0000',pct2)},
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
      }

  });
  circle.animate(pct2);

  var pct3 = 0.7
  var circle = new ProgressBar.Circle('#bar3', {
      strokeWidth: 8,  // This means 4% of the container
      color: '#000',
      easing: 'easeInOut',
      from: { color: '#ff0000'},
      to: { color: getColour('00ff00','ff0000',pct3)},
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
      }

  });
  circle.animate(pct3);

  var pct4 = 0.5
  var circle = new ProgressBar.Circle('#bar4', {
      strokeWidth: 8,  // This means 4% of the container
      color: '#000',
      easing: 'easeInOut',
      from: { color: '#ff0000'},
      to: { color: getColour('00ff00','ff0000',pct4)},
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
      }

  });
  circle.animate(pct4);

  var pct5 = 0.8
  var circle = new ProgressBar.Circle('#bar5', {
      strokeWidth: 8,  // This means 4% of the container
      color: '#000',
      easing: 'easeInOut',
      from: { color: '#ff0000'},
      to: { color: getColour('00ff00','ff0000',pct5)},
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
      }

  });
  circle.animate(pct5);

};

function change1()
{
  var elem = document.getElementById("btn1");
  if (elem.value=="Read More") elem.value = "Read Less";
  else elem.value = "Read More";
}

function change2()
{
  var elem = document.getElementById("btn2");
  if (elem.value=="Read More") elem.value = "Read Less";
  else elem.value = "Read More";
}

function change3()
{
  var elem = document.getElementById("btn3");
  if (elem.value=="Read More") elem.value = "Read Less";
  else elem.value = "Read More";
}

function change4()
{
  var elem = document.getElementById("btn4");
  if (elem.value=="Read More") elem.value = "Read Less";
  else elem.value = "Read More";
}

function change5()
{
  var elem = document.getElementById("btn5");
  if (elem.value=="Read More") elem.value = "Read Less";
  else elem.value = "Read More";
}

function change6()
{
  var elem = document.getElementById("btn6");
  if (elem.value=="Read More") elem.value = "Read Less";
  else elem.value = "Read More";
}

function change7()
{
  var elem = document.getElementById("btn7");
  if (elem.value=="Read More") elem.value = "Read Less";
  else elem.value = "Read More";
}

function change8()
{
  var elem = document.getElementById("btn8");
  if (elem.value=="Read More") elem.value = "Read Less";
  else elem.value = "Read More";
}
