const api = "https://api.imgflip.com/get_memes";

const xmlhttp = new XMLHttpRequest();

function RandomMeme(noOfMeme) {
  var rnd = Math.floor(Math.random() * noOfMeme);
  return rnd;
}
xmlhttp.onload = function () {
  const myObj = JSON.parse(this.responseText);

  document.getElementById("memeGenerator").onclick = RandomMeme(44);

  const randMeme = RandomMeme(44);
  document.getElementById("memeName").innerHTML = myObj.data.memes[randMeme].name;
  document.getElementById("meme").src = myObj.data.memes[randMeme].url;
  document.getElementById("memeNo").innerHTML = randMeme;
};


xmlhttp.open("GET", api, true);
xmlhttp.send();