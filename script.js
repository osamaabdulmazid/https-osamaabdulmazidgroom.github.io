const progress=document.querySelector(".progress");
function update(){const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/Math.max(h,1)*100)+"%"}addEventListener("scroll",update,{passive:true});update();

const menu=document.querySelector(".menu"),nav=document.querySelector(".topbar nav");
menu.addEventListener("click",()=>{nav.classList.toggle("show")});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("show")));

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.1});
document.querySelectorAll(".story-grid,.snapshot-grid,.journey-list article,.feature-card,.family-cards article,.value-list article,.photo-card,.future-points,.partner-points p,.together-grid div,.final-copy,.contact-box").forEach(el=>io.observe(el));

document.querySelectorAll(".portrait-inner").forEach(el=>{
  el.addEventListener("mousemove",e=>{const r=el.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;el.style.transform=`perspective(900px) rotateY(${x/r.width*3}deg) rotateX(${-y/r.height*3}deg) scale(1.01)`});
  el.addEventListener("mouseleave",()=>el.style.transform="");
});
