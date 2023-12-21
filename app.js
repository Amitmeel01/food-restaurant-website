let bar=document.querySelector("#menu-bar");
let sections=document.querySelectorAll("section");
let close=document.querySelector("#close");
let form=document.querySelector("#search-form");
let search=document.querySelector("#search-icon");
let input=document.querySelector("placeholder");
let label=document.querySelector("#label");
let slides=document.querySelectorAll(".slide");
let navlink=document.querySelectorAll("header .section a");
let dots=document.querySelectorAll(".dot");
let loader=document.querySelector(".loader-container");
let currentSlide=0;


window.onscroll=()=>{
    sections.forEach(e => {

        let top=window.scrollY;
        let offset=e.offsetTop;
        let height=e.offsetHeight;
        let id=e.getAttribute('id');

        if(top>=offset && top<offset+height){
            navlink.forEach(links=>{
                
                links.classList.remove('active1');
                document.querySelector('header .section a[href*='+ id +']').classList.add('active1');
            });
        };

    });
}


flag=0;
bar.addEventListener("click",function(){
    if(flag==0){
        section.style.display="block";
        flag=1;
        
    }else{
        section.style.display="none";
        flag=0;
    }
    
})

close.addEventListener("click",function(){
     form.style.display="none";
     
})

search.addEventListener("click",function(){
    form.style.display="block";

})

label.addEventListener("click",function(){
    input.value='';
})

function changeSlide(moveTo){
    if(moveTo>=slides.length){
        moveTo=0;
    }
    else if(moveTo<0){
        moveTo=slides.length-1;
    }
    slides[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    dots[currentSlide].classList.toggle("activedot");
    dots[moveTo].classList.toggle("activedot");
    
    currentSlide=moveTo;
}

window.onload=setInterval(function(){
    changeSlide(currentSlide+1);
},5000);

setTimeout(()=>{
    loader.style.display="none";
},4000)