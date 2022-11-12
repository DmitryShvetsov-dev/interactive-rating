let rate = 0;

function rate1() {
  rate = 1;
}
function rate2() {
  rate = 2;
}

function rate3() {
  rate = 3;
}

function rate4() {
  rate = 4;
}

function rate5() {
  rate = 5;
}
function submitbtn() {
  document.getElementById("id1").remove();
  document.getElementById("id2").remove();
  document.getElementById("id3").remove();
  document.getElementById("id4").remove();
  document.getElementById("id5").remove();
  document.getElementById("thankuimg").style.display = "block";
  document.getElementById("selectedrate").style.display = "block";
  document.getElementById("thx").style.display = "block";
  document.getElementById("thxletter").style.display = "block";
  let element = document.getElementById("selectedrate2");
  if (rate == 1) {
    element.innerHTML = "You selected 1 out of 5";
  }
  if (rate == 2) {
    element.innerHTML = "You selected 2 out of 5";
  }
  if (rate == 3) {
    element.innerHTML = "You selected 3 out of 5";
  }
  if (rate == 4) {
    element.innerHTML = "You selected 4 out of 5";
  }
  if (rate == 5) {
    element.innerHTML = "You selected 5 out of 5";
  }
}
