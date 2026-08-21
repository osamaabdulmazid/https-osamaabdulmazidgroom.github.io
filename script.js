const progress=document.querySelector('.progress span');
const updateProgress=()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(window.scrollY/h*100)+'%'};window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();

const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('section').forEach((s,i)=>{s.style.setProperty('--section-index',i)});

const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{nav.classList.toggle('open');nav.style.display=nav.classList.contains('open')?'flex':''});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<851)nav.classList.remove('open')}));

document.querySelectorAll('.photo-frame,.gallery-card').forEach(el=>{
  el.addEventListener('mousemove',e=>{
    const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    el.style.transform=`perspective(700px) rotateY(${x*3}deg) rotateX(${-y*3}deg)`;
  });
  el.addEventListener('mouseleave',()=>el.style.transform='');
});
