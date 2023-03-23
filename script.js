var div = document.createElement("div");
div.style.textAlign = "center";
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "country");

var button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary");
button.innerHTML = "search";
button.style.marginLeft = "5px";
button.addEventListener("click", foo);

let active = document.createElement("div");
active.setAttribute("id", "active");
let deaths = document.createElement("div");
deaths.setAttribute("id", "deaths");
let recovery = document.createElement("div");
recovery.setAttribute("id", "recovery");

div.append(input, button, active, deaths, recovery);
document.body.append(div);

async function foo() {
  let res = document.getElementById("country").value;
  console.log(res);
  let url = `https://api.covid19api.com/dayone/country/${res}`;
  let res1 = await fetch(url);
  let res2 = await res1.json();
  let index = res2.length - 1;
  console.log(res2[index].Active);
  let index1 = res2.length - 3;
  console.log(res2[index1].Deaths);
  let index2 = res2.length - 2;
  console.log(res2[index2].Recovered);

  active.innerHTML = `Total Active Cases:${res2[index].Active}`;
  deaths.innerHTML = `Total Death Cases:${res2[index].Deaths}`;
  recovery.innerHTML = `Total Recovered Cases:${res2[index].Recovered}`;
}
