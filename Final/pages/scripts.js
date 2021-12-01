var pop = 1;


function socialPop(div) {
  console.log(div);
  if (pop == 1) {
    document.getElementById(div).style.visibility = "inherit";
    document.getElementById(div).style.height = "300px";
    pop = 0;
  }

  else {
    document.getElementById(div).style.visibility = "hidden";
    document.getElementById(div).style.height = "0";
    pop = 1;

  }
}
