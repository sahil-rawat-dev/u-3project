let total = JSON.parse(localStorage.getItem("myglamm-payabletotal"));

function display (total){


    console.log(total);
    let display = document.getElementById("Payable_amount");
    display.innerText = "₹ "+total;

}

display(total);



fun =()=>{

alert("Order Successfull");

window.location.href = "index.html";

}