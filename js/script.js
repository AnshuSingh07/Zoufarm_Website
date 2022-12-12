var noCard_1 = document.getElementById("num-card-1");
var noCard_2 = document.getElementById("num-card-2");
var noCard_3 = document.getElementById("num-card-3");
var noCard_4 = document.getElementById("num-card-4");

var no_2 = document.getElementById("num-2");
var no_3 = document.getElementById("num-3");
var no_4 = document.getElementById("num-4");
var no_1 = document.getElementById("num-1");

//--------------------------------------------------------------------------------




function switchCard(event) {
  if (event.id == "num-2") {
    no_1.classList.remove("num-change");
    no_2.classList.add("num-change");
    no_3.classList.remove("num-change");
    no_4.classList.remove("num-change");
    noCard_1.style.display = "none";
    noCard_2.style.display = "flex";
    noCard_3.style.display = "none";
    noCard_4.style.display = "none";
  } else if (event.id == "num-1") {
    no_1.classList.add("num-change");
    no_2.classList.remove("num-change");
    no_3.classList.remove("num-change");
    no_4.classList.remove("num-change");
    noCard_1.style.display = "flex";
    noCard_2.style.display = "none";
    noCard_3.style.display = "none";
    noCard_4.style.display = "none";
  } else if (event.id == "num-3") {
    no_1.classList.remove("num-change");
    no_2.classList.remove("num-change");
    no_3.classList.add("num-change");
    no_4.classList.remove("num-change");
    noCard_1.style.display = "none";
    noCard_2.style.display = "none";
    noCard_3.style.display = "flex";
    noCard_4.style.display = "none";
  } else if (event.id == "num-4") {
    no_1.classList.remove("num-change");
    no_2.classList.remove("num-change");
    no_3.classList.remove("num-change");
    no_4.classList.add("num-change");
    noCard_1.style.display = "none";
    noCard_2.style.display = "none";
    noCard_3.style.display = "none";
    noCard_4.style.display = "flex";
  }
}
