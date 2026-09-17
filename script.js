const glow=document.querySelector('.cursor-glow');document.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const words=['Cybersecurity Enthusiast','Security Learner','Penetration Testing Student','Network Security Learner'];let wi=0,ci=0,del=false;const typed=document.getElementById('typed');function type(){const w=words[wi];typed.textContent=del?w.slice(0,ci--):w.slice(0,ci++);if(!del&&ci>w.length){del=true;setTimeout(type,1100);return}if(del&&ci<0){del=false;wi=(wi+1)%words.length;ci=0}setTimeout(type,del?45:75)}type();
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');if(e.target.matches('.stat')){const n=+e.target.querySelector('strong').dataset.count;let x=0;const t=setInterval(()=>{x++;e.target.querySelector('strong').textContent=x+'+';if(x>=n)clearInterval(t)},70)}}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));
const buttons=document.querySelectorAll('.filters button'),projects=document.querySelectorAll('.project');buttons.forEach(b=>b.onclick=()=>{buttons.forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;projects.forEach(p=>{p.style.display=f==='all'||p.dataset.cat.includes(f)?'flex':'none'})});
const canvas=document.getElementById('matrix'),ctx=canvas.getContext('2d');let W,H,cols,drops;function resize(){W=canvas.width=innerWidth;H=canvas.height=innerHeight;cols=Math.floor(W/15);drops=Array(cols).fill(1)}resize();addEventListener('resize',resize);setInterval(()=>{ctx.fillStyle='rgba(5,7,6,.08)';ctx.fillRect(0,0,W,H);ctx.fillStyle='#62ff91';ctx.font='12px monospace';drops.forEach((y,i)=>{const ch='01#$%&@'[Math.floor(Math.random()*8)];ctx.fillText(ch,i*15,y*15);if(y*15>H&&Math.random()>.975)drops[i]=0;drops[i]++})},55);
const menu=document.querySelector('.menu');menu.onclick=()=>{const n=document.querySelector('nav');n.style.display=n.style.display==='flex'?'none':'flex';n.style.position='absolute';n.style.top='72px';n.style.left='0';n.style.right='0';n.style.padding='20px';n.style.background='#050706';n.style.flexDirection='column';n.style.borderBottom='1px solid #1b241f'};

document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const status = document.getElementById('formStatus');
  const button = form.querySelector('button[type="submit"]');
  const emailInput = form.querySelector('input[name="email"]');
  const email = emailInput.value.trim();

  // Basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!emailPattern.test(email)) {
    status.textContent = 'Please enter a valid email address.';
    emailInput.focus();
    return;
  }

  button.disabled = true;
  status.textContent = 'Sending message…';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json'
      }
    });

    if (response.ok) {
      status.textContent = 'Message sent successfully!';
      form.reset();
    } else {
      status.textContent = 'Something went wrong. Please try again.';
    }
  } catch (error) {
    status.textContent = 'Unable to send message. Please try again.';
  }

  button.disabled = false;
});