// import data from "../../../my-glamm-clone-main/Data/products.data";

function appendimage(data,location){
    data.forEach(el=>{
        let div=document.createElement("div")
        let img = document.createElement("img");
        img.src = el;
        div.append(img)
        location.append(div)

    })
}
function appenddata(data,location){
   data.forEach(el => {
    let div=document.createElement("div")
    let div1=document.createElement("div")
    let image=document.createElement("img")
    image.src=el.image
    div1.append(image)
    div1.id="fixed"
    let div2=document.createElement("div")
    let h1=document.createElement("h1")
    h1.innerText=el.text1
    let p=document.createElement("p")
    p.innerText=el.text2
    div2.append(h1,p)
    div2.id="text"
    div.append(div1,div2)
    location.append(div)
   });
}

function showdata(data,product){
    data.forEach(function (el){
        let div=document.createElement("div");
        // div.setAttribute("id","innerchild");
        // div.addEventListener("click",()=>{
        //     var detail=[];
        //     detail.push(el);
        //     localStorage.setItem("prdc",JSON.stringify(detail));
        //     window.location.href="product.html";
        // })
        let image=document.createElement("img");
        image.src=el.displayimg;
        let price=document.createElement("p");
        price.textContent=`₹ ${el.price}`;
        let name=document.createElement("p");
        name.textContent=el.title;
        let desc=document.createElement("p");
        desc.textContent=el.subtitle;
        div.append(image,price,name,desc)
        product.append(div)
    })
}

function appendvideodata(data,location){
    data.forEach(e => {
      
      let h2=document.createElement("h2")
      h2.innerText=e.h2
  
      let p=document.createElement("p")
        p.innerText=e.p
      let p1=document.createElement("p")
      p1.innerText=e.p1
  
      let image=document.createElement("img")
        image.src=e.image
      location.append(h2,p,p1,image)

    });
  }


export {appendimage,appenddata,showdata,appendvideodata}