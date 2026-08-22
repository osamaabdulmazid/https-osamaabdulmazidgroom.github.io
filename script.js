const p=document.querySelector('.progress');
addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;p.style.width=(scrollY/Math.max(h,1)*100)+'%'});
const m=document.querySelector('.menu'),n=document.querySelector('nav');
m.onclick=()=>n.classList.toggle('show');
n.querySelectorAll('a').forEach(a=>a.onclick=()=>n.classList.remove('show'));
const revealItems=document.querySelectorAll('.section > *, .visual-break > div, .gallery figure, .facts div, .cards article, .personality article, .qualities article, .together-grid article');
revealItems.forEach(el=>el.classList.add('reveal'));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.08});
revealItems.forEach(el=>observer.observe(el));
