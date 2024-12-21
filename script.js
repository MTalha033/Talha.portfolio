

let list=document.getElementsByClassName("navbar");
list[0].style="height:0px";

function togglemenu(){
    if(list[0].style.height=="0px" && window.innerWidth<851){
        list[0].style="height:300px";
    }
    else{
        list[0].style="height:0px";
    }
}

window.addEventListener('resize',()=>{
    if(window.innerWidth>850){
        list[0].style="height:0px";
    }
})

let skill=document.getElementsByClassName("skill");
let a=0;
skill[a].style="display:block";
setInterval(()=>{
    skill[a].style="display:none";
    if(a===2){
        a=0;
    }
    else{
        a++
    }
    skill[a].style="display:block";
},8000)


if (window.innerWidth < 851) {
    let links = document.querySelectorAll(".navbar li a");
    Array.from(links).forEach((link)=> {
      link.addEventListener('click', () => {
        list[0].style="height:0px";
      });
    });
  };




//images in portfolio boxes
let boxes=document.querySelectorAll(".portfolio .portfolioboxes .box");
let index=0;
for(img in imagelist){
        let linkimg=imagelist[img];
        if(index<boxes.length){
        boxes[index].style=`background-image:url(${linkimg});background-position: center center;
                            background-blend-mode: darken;background-size: cover;background-repeat: no-repeat;`;
        index++;
        }
}
// hover effects in portfolio divs
boxes.forEach((box)=>{
    // hover effect for paragraph
    let para=box.querySelector("p")
    box.addEventListener("mouseover",()=>{
        para.style="opacity:1";
    })
    box.addEventListener("mouseout",()=>{
        let para=box.querySelector("p")
        para.style="opaciy:0";
    })
    // hover effect for msg with link
    let link=box.querySelector(".box a i");
    let msg=box.querySelector(".box a span");
    link.addEventListener("mouseover",()=>{
        msg.style="opacity:1";
    })
    link.addEventListener("mouseout",()=>{
        msg.style="opacity:0";
    })
})


// switch between darkmode and lightmode
let body=document.querySelector("body");
let home=document.querySelector(".home");
let about=document.querySelector(".about .aboutinfo");
let contact=document.querySelector(".contact");
let footer=document.querySelector("footer");
let footerpara=document.querySelector("footer p");
let moonicon=document.querySelector(".moon i");
moonicon.addEventListener("click",()=>{
    body.classList.toggle("blackbackground");
    home.classList.toggle("whitecolor");
    about.classList.toggle("whitecolor");
    contact.classList.toggle("whitecolor")
    footerpara.classList.toggle("blackcolor");
    footer.classList.toggle("whitebackground"); 
    if(moonicon.className=="bx bxs-moon"){
        moonicon.className="bx bx-sun";
        moonicon.style="color:#fff";
    }
    else{
        moonicon.className="bx bxs-moon";
        moonicon.style="color:grey";
    }

}
)