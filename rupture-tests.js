Tinytest.add("rupture", function(test) {

  var div = document.createElement('div');
  div.style.display = 'block';
  div.className = 'test';
  document.body.appendChild(div);

  var color = getStyleProperty(div, 'color');
  var width = window.innerWidth;

  if (width <= 700) {
    test.equal(color, 'rgb(0, 0, 255)');
  } else {
    test.equal(color, 'rgb(255, 0, 0)');
  }

  document.body.removeChild(div);
});