import { catagory,spotlight,launches,essentials } from "../components/index.deta.js";
import {appenddata} from "./main.js";
//Code for adding catagory sections rounded-images
catagory.forEach((el) => {
    let boxdiv=document.getElementById("productbox-catagory")
    let div=document.createElement("div")
    let img = document.createElement("img");
    img.src = el;
    div.append(img)
    boxdiv.append(div)
    
  });
  let location=document.getElementById("spotligth")
  appenddata(spotlight,location)

//   append launches

let location2=document.getElementById("launches")
appenddata(launches,location2)

// append essentials
let location3=document.getElementById("essentials")
appenddata(essentials,location3)
