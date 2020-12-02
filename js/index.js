// Your code goes here
// Select Elements
const busLogo = document.querySelector("h1"); // turn blue and gray
const nav = document.querySelectorAll(".nav-link"); //make bigger when hover
const introImg = document.querySelector(".intro img"); // zoom in
const busH = document.querySelector(".intro h2"); // add an animation 
const el = document.querySelector(".content-destination img"); 
const introP = document.querySelector(".intro p");
const destination = document.querySelector(".btn");
const textContent = document.querySelector(".text-content p");
const funSun = document.querySelector(".destination h4");

// Nav
const navArray = Array.from(nav);
navArray[0].addEventListener("click", function (event){
    navArray[0].style.color = "green";
    navArray[1].style.color = "pink";
    navArray[2].style.color = "blue";
    navArray[3].style.color = "aqua";
})

// Logo
busLogo.addEventListener("mouseover", function (event){
busLogo.style.color = "teal";
setTimeout(function(){
    busLogo.style.color = "";
},500);
},false);

// First Picture
introImg.addEventListener("dblclick", function (e){
    introImg.classList.toggle("large");
});

//h2 -Welcome Only-
busH.addEventListener("mouseleave", function (event){
    busH.style.color = "purple";
    setTimeout(function(){
        busH.style.color="";
    }, 1000);
},false);

//Zoom in Picture
function zoom(event){
    event.preventDefault();
    scale =+ event.deltaY * -0.01;
    scale = Math.min(Math.max(.125,scale),4);
    el.style.transform = `scale(${scale})`;
}
let scale = 1;
el.onwheel = zoom;

// Intro P
function logSelection(event){
    const log = document.getElementById("log");
    const selection = event.target.value.substring(event.target.selcetionStart,event.target.selectionEnd);
    log.textContent = `Selected: ${selection}`;
};
introP.addEventListener("select", logSelection);

// Button at the Bottom
destination.addEventListener("click", function(event){
    destination.innerHTML = `You are Signed Up!`;
});

// text-content P
textContent.addEventListener("mouseleave", function (event){
    textContent.style.color = "aqua";
});

// Key down
funSun.addEventListener("keydown", event =>{
    if(event.key === "7"){
        funSun.style.color = "red";
    };
});

//Propagation
Array.from(document.all).forEach((elem) => {
    elem.addEventListener("click", (event) => {
        console.log("target:     ", event.target);
        console.log("current target:", event.currentTarget);
        console.log("\n");
        event.stopPropagation();
    });
});

Array.from(document.links).forEach((link) => {
    link.addEventListener("click", (event) =>{
        event.preventDefault();
    });
});