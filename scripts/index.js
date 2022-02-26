import footer from "../components/footer.js";
import { catagory,spotlight,launches,essentials,bekitcombo,kitcombo,afkitcombo,videoupperdata } from "../components/index.deta.js";
import {appendimage,appenddata,showdata,appendvideodata} from "./main.js";
import {data} from "../deta/products.data.js";
//Code for adding catagory sections rounded-images
    let boxdiv=document.getElementById("productbox-catagory")
    appendimage(catagory,boxdiv)
    
  let location=document.getElementById("spotligth")
  appenddata(spotlight,location)

//   append launches

let location2=document.getElementById("launches")
appenddata(launches,location2)

// append essentials
let location3=document.getElementById("essentials")
appenddata(essentials,location3)

let location4=document.getElementById("kit")
appendimage(bekitcombo,location4)

let location5=document.getElementById("kitscombos")
appenddata(kitcombo,location5)

let location6=document.getElementById("combos")
appendimage(afkitcombo,location6)

// let location7=document.getElementById("videotext")
// appendvideodata(videoupperdata,location7)

// console.log(data)
// let location8=document.getElementById("product-parent")
// showdata(data,location8)

// 

let bestseller = document.getElementById("product-parent");
let bestsellerStart = 0;
let bestsellerEnd = 3;
function heading(str) {
  let str2 = "";
  for (let i = 0; i <= 12; i++) {
    str2 = str2 + str[i];
  }
  str2 = str2 + "...";
  return str2;
}
function addBestseller(start, end) {
  bestseller.innerHTML = null;
  for (let i = start; i <= end; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    
    let img = document.createElement("img");
    img.src = data[i].displayimg;
    card.appendChild(img);
    let h2 = document.createElement("h3");
    let title = "";
    if (data[i].title.length >= 12) {
      title = heading(data[i].title);
    } else {
      title = data[i].title;
    }
    h2.textContent = title;
    card.appendChild(h2);
    let p = document.createElement("p");
    p.textContent = data[i].subtitle;
    card.appendChild(p);
    let price = document.createElement("p");
    price.setAttribute("id", "price");
    price.textContent = "₹ " + data[i].price;
    card.appendChild(price);
    card.addEventListener("click", () => {
      localStorage.setItem("pdetails", JSON.stringify([data[i]]));
      // window.location.href = "productdetails.html";
      // console.log("ok");
    });
    bestseller.appendChild(card);
  }
}
addBestseller(bestsellerStart, bestsellerEnd);
setInterval(() => {
  bestsellerStart++;
  bestsellerEnd++;
  if (bestsellerEnd == data.length) {
    bestsellerStart = 0;
    bestsellerEnd = 3;
  }
  addBestseller(bestsellerStart, bestsellerEnd);
}, 3000);

let foot=document.getElementById("footer")
foot.innerHTML=footer()
