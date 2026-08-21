const progress=document.querySelector(".progress");
function scrollProgress(){const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/Math.max(h,1)*100)+"%"}addEventListener("scroll",scrollProgress,{passive:true});scrollProgress();
const menu=document.querySelector(".menu"),nav=document.querySelector(".topbar nav");
menu.addEventListener("click",()=>nav.classList.toggle("show"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("show")));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.1});
document.querySelectorAll(".prose,.detail-grid div,.education-cards article,.career-card,.timeline article,.family-grid article,.personality-list article,.photo-grid .placeholder,.partner-qualities article,.together-grid div,.final-prose,.contact").forEach(x=>io.observe(x));
document.querySelectorAll(".placeholder").forEach(el=>{el.addEventListener("mousemove",e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(900px) rotateY(${x*2.5}deg) rotateX(${-y*2.5}deg) scale(1.01)`});el.addEventListener("mouseleave",()=>el.style.transform="")});
