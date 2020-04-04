function pickRandomFlower() {
  var flowers = ["🌸", '🌵', '🌼', '🌺', '🌻', '🌱', '🐿', '🌳', '🐇', '🦋'];
  var randomNumber = Math.floor(Math.random() * flowers.length);
  return flowers[randomNumber];
}

function makeGarden(numRows, numColumns) {
  var text = '';
  for (var rows = 0; rows < numRows; rows++) {
    for (var columns = 0; columns < numColumns; columns++) {
      text += pickRandomFlower();
    }
    text += "<br>";
  }
  return text;
}

document.getElementById("app").innerHTML = makeGarden(23, 27);

