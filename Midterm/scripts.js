
const colors = ['FF0000','F62222','F04C4C','F28888','F2B3B3','C91515','A41919','780F0F','560C0C','390505','FF5900','F77732','F59663','F6BD9E','E14F00','B43F00','903C0E','955938','A07C67','665348','743B19','582608',
'FF8300','FA952A','F9AE60','C3701A','FFD500','FFDF3E','FFEB89','DEBE24','CEAB00','AC9212','806A03','FFFF00','FFFF43','FFFF87','FFFFC8','BDBD40','ABAB14','CFCF0F','6C6C07','BDFF00','B4E81F','D6FF61','E6FF9F','F1FFC9','A3DC00',
'9DC628','81AE00','A7E002','506C00','36440D','64FF00','7CF92B','A4FF6A','A6E87C','6EC836','4EB80C','47871F','00FF0C','0CC515','4BF353','94F799','09B912','389F3D','098A0F','48994C','6ADF70','1E6922','085A0C','003E03',
'426D44','00FF5D','56FA92','9BF8BD','009C39','05682A','408C5C','6EC88F','B5E0C5','00FA8C','75E7B4','59FAB2','A2F3CF','89C2A9','2FBD7F','08C673','1C8C5B','2A684D','57957A','054B2C','0BF2CC','53F1D7','A7F4E7','7DC6BA',
'3EC0AA','0CC8A8','07A388','397066','0E6152','07DFF5','45E4F5','83ECF7','B8E5EA','87B9BF','47A1AC','2DBCCD','08ADC1','0E717E','0581F5','489AE7','8FBFEB','3F76A9','1E79CD','164E83',
'06325D','4C6B8A','0D52F0','4D80F3','8CACF2','94A6CD','5575BA','2A59BC','113787','30487A','0C2862','333B4B','0F1DF1','4651ED','7A82EB','8A8EBD','474EA7','1D269D','181E6D','3C3F6B','05072A','3F11EC','795BEC','AB9AED','8C82B3','644FB6'
,'4627BF','2C1197','28166C','160654','433C5F','796DA8','0F033E','6C08F2','8F49EE','B68BEF','8F7AAB','7247AB','5512AF','625278','432A65','2F0963','572A94','A009F0','B351E7','CCA4E1','8B7099','8948AA','861BBD','531075','542D68','514358','2E0940',
'D412EF','CB5DDA','DDA8E4','9B78A0','8D4597','731080','A024B0','F10FD6','E855D6','E492DA','A4719D','AF48A1','BD1AA7','7E106F','833C7A','996D94','722E6A','F10E94','E24EA6','DC96BF','9A6082','A9427E','7D1B54','BD1878','420B2B',
'ED0F59','EA4F82','EC93B0','B06A81','C0456D','C20845','7E1839','89435A'];

//declare list of image sources of palettes


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

lock1 = false;
lock2 = false;
lock3 = false;
lock4 = false;

function firstlock() {
  if (lock1) {
    lock1 = false;
    document.getElementById('lockone').innerHTML = "LOCK";
  }
  else {
    lock1 = true;
    document.getElementById('lockone').innerHTML = "LOCKED";
  }
}

function seclock() {
  if (lock2) {
    lock2 = false;
    document.getElementById('locktwo').innerHTML = "LOCK";
  }
  else {
    lock2 = true;
    document.getElementById('locktwo').innerHTML = "LOCKED";
  }
}

function threelock() {
  if (lock3) {
    lock3 = false;
    document.getElementById('lockthree').innerHTML = "LOCK";
  }
  else {
    lock3 = true;
    document.getElementById('lockthree').innerHTML = "LOCKED";
  }
}

function fourlock() {
  if (lock4) {
    lock4 = false;
    document.getElementById('lockfour').innerHTML = "LOCK";
  }
  else {
    lock4 = true;
    document.getElementById('lockfour').innerHTML = "LOCKED";
  }
}

function  randomizer() {

    var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

    num1 = getRandomInt(199);
    num2 = getRandomInt(199);
    num3 = getRandomInt(199);
    num4 = getRandomInt(199);

    console.log(num1);

    if (lock1 == false) {
        document.getElementById('uno').style.backgroundColor = "#"+colors[num1];
        document.getElementById('uno').innerHTML = "#"+colors[num1];
    }

    if (lock2 == false) {
        document.getElementById('dos').style.backgroundColor = "#"+colors[num2];
        document.getElementById('dos').innerHTML = "#"+colors[num1];
    }


    if (lock3 == false) {
        document.getElementById('tres').style.backgroundColor = "#"+colors[num3];
        document.getElementById('tres').innerHTML = "#"+colors[num1];
    }


    if (lock4 == false) {
        document.getElementById('quatro').style.backgroundColor = "#"+colors[num4];
        document.getElementById('quatro').innerHTML = "#"+colors[num1];
    }

}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";

}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


function carni() {
    document.getElementById('uno').style.backgroundColor = "#2E0940";
    document.getElementById('uno').innerHTML = "#2E0940";
    document.getElementById('dos').style.backgroundColor = "#C20945";
    document.getElementById('dos').innerHTML = "#C20945";
    document.getElementById('tres').style.backgroundColor = "#FFD500";
    document.getElementById('tres').innerHTML = "#FFD500";
    document.getElementById('quatro').style.backgroundColor = "#572A94";
    document.getElementById('quatro').innerHTML = "#572A94";
}

function sea() {
    document.getElementById('uno').style.backgroundColor = "#93A6CD";
    document.getElementById('uno').innerHTML = "#93A6CD";
    document.getElementById('dos').style.backgroundColor = "#524259";
    document.getElementById('dos').innerHTML = "#524259";
    document.getElementById('tres').style.backgroundColor = "#B8E5EA";
    document.getElementById('tres').innerHTML = "#B8E5EA";
    document.getElementById('quatro').style.backgroundColor = "#30477A";
    document.getElementById('quatro').innerHTML = "#30477A";
}

function gp() {
    document.getElementById('uno').style.backgroundColor = "#A4FF69";
    document.getElementById('uno').innerHTML = "#A4FF69";
    document.getElementById('dos').style.backgroundColor = "#B4E71F";
    document.getElementById('dos').innerHTML = "#B4E71F";
    document.getElementById('tres').style.backgroundColor = "#04FF5D";
    document.getElementById('tres').innerHTML = "#04FF5D";
    document.getElementById('quatro').style.backgroundColor = "#7A6DA8";
    document.getElementById('quatro').innerHTML = "#7A6DA8";
}

function trop() {
    document.getElementById('uno').style.backgroundColor = "#52F2D7";
    document.getElementById('uno').innerHTML = "#52F2D7";
    document.getElementById('dos').style.backgroundColor = "#2A59BC";
    document.getElementById('dos').innerHTML = "#2A59BC";
    document.getElementById('tres').style.backgroundColor = "#101DF1";
    document.getElementById('tres').innerHTML = "#101DF1";
    document.getElementById('quatro').style.backgroundColor = "#A8DF03";
    document.getElementById('quatro').innerHTML = "#A8DF03";
}

function aspen() {
    document.getElementById('uno').style.backgroundColor = "#F77732";
    document.getElementById('uno').innerHTML = "#F77732";
    document.getElementById('dos').style.backgroundColor = "#CEAA00";
    document.getElementById('dos').innerHTML = "#CEAA00";
    document.getElementById('tres').style.backgroundColor = "#ED1058";
    document.getElementById('tres').innerHTML = "#ED1058";
    document.getElementById('quatro').style.backgroundColor = "#F9AE60";
    document.getElementById('quatro').innerHTML = "#F9AE60";
}
