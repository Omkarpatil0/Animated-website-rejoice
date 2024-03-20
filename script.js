function rrr(){
gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
rrr()

let page = document.querySelector(".page1-content")
let cur = document.querySelector(".cursor")
function o(){

  page.addEventListener('mousemove' , function(dets){
    gsap.to(cur , {
      x:dets.x,
      y:dets.y
    })
  })

  page.addEventListener('mouseenter' , function(){
    gsap.to(cur , {
      scale: 1,
      opacity:1
    })
  })

  page.addEventListener('mouseleave' , function(){
    gsap.to(cur , {
      scale: 0,
      opacity:0
    })
  })
  
  
}
o()

   let lal = gsap.timeline()
   lal.from('.loader h3', {
     x:40,
     opacity:0,
     duration:1,
     stagger:0.1
   })
   lal.to(".loader h3",{
    x:-18,
    opacity:0,
    duration:1,
    stagger:0.1
   })
    lal.to('.loader',{
      opacity:0
    })
    lal.to('.loader',{
      display:"none"
    })
    lal.from(".page1-content h1 span" , {
      y:100,
      opacity:0,
      stagger:0.2
    })
 
    function swip(){

    }
    swip()

 let cl=  document.getElementById('brocode')
 function king(){
      
   let i = 0 ;
   setInterval(() => {
     i = i+1 ;
     console.log(i);
     cl.innerHTML = i;

    }, 600);
    
  }
king()

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


function animeevid(){
let but = document.querySelector(".bobby");
let vid = document.querySelector("#bgv");
but.addEventListener("mouseenter", function(){
  console.log("first")
   gsap.to(vid , {
    opacity:1,
    duration:2,
   }),
   gsap.to(but , {
    opacity:0,
    duration:1,
   })
  
})
but.addEventListener("mouseleave", function(){
  console.log("first")
   gsap.to(vid , {
    opacity:0,
    duration:2,
   }),
   gsap.to(but , {
    opacity:1,
    duration:1,
   })
  
})

}


animeevid();


