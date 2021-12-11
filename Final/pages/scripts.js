var pop = 1;


function socialPop(div) {
  console.log(div);
  if (pop == 1) {
    document.getElementById(div).style.visibility = "inherit";
    document.getElementById(div).style.height = "300px";
    document.querySelectorAll("#friendly")[0].style.color = "white";
    document.querySelectorAll("#friendly")[1].style.color = "white";
    document.querySelectorAll("#friendly")[2].style.color = "white";
    pop = 0;
  }

  else {
    document.getElementById(div).style.visibility = "hidden";
    document.getElementById(div).style.height = "0";
    document.querySelectorAll("#friendly")[0].style.color = "black";
    document.querySelectorAll("#friendly")[1].style.color = "black";
    document.querySelectorAll("#friendly")[2].style.color = "black";
    pop = 1;

  }
}

function socialPop2(div) {
  console.log(div);
  if (pop == 1) {
    document.getElementById(div).style.visibility = "inherit";
    document.getElementById(div).style.height = "300px";
    document.querySelectorAll("#friendly")[3].style.color = "white";
    document.querySelectorAll("#friendly")[4].style.color = "white";
    document.querySelectorAll("#friendly")[5].style.color = "white";
    pop = 0;
  }

  else {
    document.getElementById(div).style.visibility = "hidden";
    document.getElementById(div).style.height = "0";
    document.querySelectorAll("#friendly")[3].style.color = "black";
    document.querySelectorAll("#friendly")[4].style.color = "black";
    document.querySelectorAll("#friendly")[5].style.color = "black";
    pop = 1;

  }
}


function socialPop3(div) {

  console.log(div);
  if (pop == 1) {
    document.getElementById(div).style.visibility = "inherit";
    document.getElementById(div).style.height = "300px";
    document.getElementById('eventsPic1').style.height = '70px';
    document.getElementById('eventsPic2').style.height = '70px';
    document.getElementById('eventsPic3').style.height = '70px';
    document.querySelectorAll('#eventname')[0].style.opacity = '1';
    document.querySelectorAll('#eventname')[1].style.opacity = '1';
    document.querySelectorAll('#eventname')[2].style.opacity = '1';
    pop = 0;
  }

  else {
    document.getElementById(div).style.visibility = "hidden";
    document.getElementById(div).style.height = "0";
    document.getElementById('eventsPic1').style.height = '0';
    document.getElementById('eventsPic2').style.height = '0';
    document.getElementById('eventsPic3').style.height = '0';
    document.querySelectorAll('#eventname')[0].style.opacity = '0';
    document.querySelectorAll('#eventname')[1].style.opacity = '0';
    document.querySelectorAll('#eventname')[2].style.opacity = '0';
    pop = 1;

  }
}

playing = 0;
songNum = 0;



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function player(div) {

  console.log(div);

  if (playing == 1) {
    console.log('pasuing');
    if (songNum == 1) {
      var audio = document.getElementById('audio1');
      audio.pause();
    }
    if (songNum == 2) {
      var audio = document.getElementById('audio2');
      audio.pause();
    }
    if (songNum == 3) {
      var audio = document.getElementById('audio3');
      audio.pause();
    }

    if (songNum == 4) {
      var audio = document.getElementById('audio4');
      audio.pause();
    }

    if (songNum == 5) {
      var audio = document.getElementById('audio5');
      audio.pause();
    }

    if (songNum == 6) {
      var audio = document.getElementById('audio6');
      audio.pause();
    }

    if (songNum == 7) {
      var audio = document.getElementById('audio7');
      audio.pause();
    }

    if (songNum == 8) {
      var audio = document.getElementById('audio8');
      audio.pause();
    }

    playing = 0;
    document.getElementById('musicPlayer').style.background = "url(https://i.ytimg.com/vi/kLb5okKE4XI/maxresdefault.jpg)";
    document.getElementById('musicPlayer').style.backgroundSize = "cover";
    document.getElementById('musicPlayer').style.backgroundPosition = "right";
    document.getElementById('playBut').src = "https://lh3.googleusercontent.com/proxy/L9r3rQhu-uQVK58J52JsEeykpsQ9cYfje4sh5uLxmDyKxePIZIooHhNhSMp9X5rbAl01DOeZg92Rnhm-MGTBl7xMXROwZbA"

  }

  else if (div == '') {

    num = getRandomInt(1,4);
    word = 'audio' + num.toString();
    console.log(word);
    var audio = document.getElementById(word);
    audio.play();
    playing = 1;
    songNum = num;
    document.getElementById('playBut').src = "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/pause-icon-18-256.png"

  }

  else if (div == 'alb1') {

    var audio = document.getElementById("audio1");
    audio.play();
    playing = 1;
    songNum = 1;
    document.getElementById('musicPlayer').style.backgroundImage = "url(https://m.media-amazon.com/images/I/81Dwd6--R2L._SL1200_.jpg)";
    document.getElementById('musicPlayer').style.backgroundSize = "cover";
    document.getElementById('playBut').src = "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/pause-icon-18-256.png"
  }

  else if (div == 'alb2') {

    var audio = document.getElementById("audio2");
    audio.play();
    playing = 1;
    songNum = 2;
    document.getElementById('musicPlayer').style.backgroundImage = "url(https://m.media-amazon.com/images/I/715ByyULmYL._SL1200_.jpg)";
    document.getElementById('musicPlayer').style.backgroundSize = "cover";
    document.getElementById('playBut').src = "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/pause-icon-18-256.png"
  }

  else if (div == 'alb3') {

    var audio = document.getElementById("audio3");
    audio.play();
    playing = 1;
    songNum = 3;
    document.getElementById('musicPlayer').style.backgroundImage = "url(https://payload.cargocollective.com/1/16/534178/13207340/GVF_FTF_Final_1600_c.jpg)";
    document.getElementById('musicPlayer').style.backgroundSize = "cover";
    document.getElementById('playBut').src = "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/pause-icon-18-256.png"
  }

  else if (div == 'alb4') {

    var audio = document.getElementById("audio4");
    audio.play();
    playing = 1;
    songNum = 4;
    document.getElementById('musicPlayer').style.backgroundImage = "url(https://payload.cargocollective.com/1/16/534178/13207340/GVF_FTF_Final_1600_c.jpg)";
    document.getElementById('musicPlayer').style.backgroundSize = "cover";
    document.getElementById('playBut').src = "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/pause-icon-18-256.png"
  }

  else if (div == 'alb5') {

    var audio = document.getElementById("audio5");
    audio.play();
    playing = 1;
    songNum = 5;
    document.getElementById('musicPlayer').style.backgroundImage = "url(https://payload.cargocollective.com/1/16/534178/13207340/GVF_FTF_Final_1600_c.jpg)";
    document.getElementById('musicPlayer').style.backgroundSize = "cover";
    document.getElementById('playBut').src = "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/pause-icon-18-256.png"
  }

  else if (div == 'alb6') {

    var audio = document.getElementById("audio6");
    audio.play();
    playing = 1;
    songNum = 6;
    document.getElementById('musicPlayer').style.backgroundImage = "url(https://payload.cargocollective.com/1/16/534178/13207340/GVF_FTF_Final_1600_c.jpg)";
    document.getElementById('musicPlayer').style.backgroundSize = "cover";
    document.getElementById('playBut').src = "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/pause-icon-18-256.png"
  }

  else if (div == 'alb7') {

    var audio = document.getElementById("audio7");
    audio.play();
    playing = 1;
    songNum = 7;
    document.getElementById('musicPlayer').style.backgroundImage = "url(https://payload.cargocollective.com/1/16/534178/13207340/GVF_FTF_Final_1600_c.jpg)";
    document.getElementById('musicPlayer').style.backgroundSize = "cover";
    document.getElementById('playBut').src = "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/pause-icon-18-256.png"
  }

  else if (div == 'alb8') {

    var audio = document.getElementById("audio8");
    audio.play();
    playing = 1;
    songNum = 8;
    document.getElementById('musicPlayer').style.backgroundImage = "url(https://payload.cargocollective.com/1/16/534178/13207340/GVF_FTF_Final_1600_c.jpg)";
    document.getElementById('musicPlayer').style.backgroundSize = "cover";
    document.getElementById('playBut').src = "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/pause-icon-18-256.png"
  }

}
