import"./header-sR9rfrPM.js";import"./navbar-ByK1SJ-l.js";const h=document.getElementById("input-floor"),E=document.getElementById("input-lift"),D=document.getElementById("btn-submit"),I=document.getElementById("form1"),y=document.getElementById("btn-reset"),b=document.getElementById("content");let c=0,m=[{id:1,floor:1},{id:2,floor:1},{id:3,floor:1},{id:4,floor:1}];const L=function(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};function g(e,t){let o,a=1/0;for(let s=0;s<t.length;s++){const r=t[s],f=Math.abs(r.floor-e);f<a&&!r.busy&&(a=f,o=r.id)}if(o===void 0)for(let s=0;s<t.length;s++){const r=t[s],f=Math.abs(r.floor-e);f<a&&(a=f,o=r.id)}return o}const $=function(e){const t=document.getElementById(`lift${e}-door-left`),o=document.getElementById(`lift${e}-door-right`);t.style.width="0",o.style.width="0",o.style.transition="all 2s",t.style.transition="all 2s"},v=function(e){const t=document.getElementById(`lift${e}-door-left`),o=document.getElementById(`lift${e}-door-right`);t.style.width="50%",o.style.width="50%",o.style.transition="all 2s",t.style.transition="all 2s"};y.addEventListener("click",()=>{location.reload(!0),h.value="",E.value="",I.style.display="flex",y.style.display="none",b.style.display="none",c=0});D.addEventListener("click",e=>{e.preventDefault();let t=h.value,o=E.value;if(t>99||t<1||o<1||o>4)alert("floor should be betwween 1- 99 and lift value should be between 1 - 4");else{I.style.display="none",y.style.display="block",b.style.display="flex";const a=Array(Number(t)).fill(0);for(let n=0;n<t;n++){const d=document.createElement("section");d.setAttribute("id",`floor-${n+1}`),d.classList.add("section"),d.innerHTML+=`
    <div class="btn__group">
      <button name="${n+1}-up" id="floor-${n+1}_up" class="btn">Up</button>
      <button name="${n+1}-down" id="floor-${n+1}_down" class="btn">Down</button>
    </div>
    <div id="lift-content-${n+1}" class="lift-content">
    </div>
    <div class="floor"></div>
    <p>${n+1}${L(n+1)} floor</p>
      `,b.appendChild(d)}const s=document.getElementById(`floor-${t}_up`),r=document.getElementById(`floor-${t}_down`),f=document.getElementById("floor-1_down");r.style.backgroundColor="#ffa600",s.remove(),f.remove();const w=document.getElementById("lift-content-1");for(let n=0;n<o;n++){c++;const d=document.createElement("div");d.innerHTML+=`
      <div id="lift-${c}" flag="1" busy="false" class="lift lift__${c}">
        <div
          id="lift${c}-door-left"
          class="lift__door lift${c}-door-left"
        ></div>
        <div
          id="lift${c}-door-right"
          class="lift__door lift${c}-door-right"
        ></div>
      </div>
 `,w.appendChild(d)}a.map((n,d)=>{document.addEventListener("click",function(p){const l=d+1,B=p.target.closest(`#floor-${l}_up`),_=p.target.closest(`#floor-${l}_down`);if(B){const i=g(l,m),u=document.getElementById(`lift-${i}`);u.style.top=(l-1)*-100+"%",u.setAttribute("flag",l),u.style.transition=`all ${l*2}s`,m[i-1].busy=!0,setTimeout(()=>{$(i)},l*2*1e3),setTimeout(()=>{v(i),m[i-1].busy=!1},l*2*1e3+2500)}if(_){const i=g(l,m),u=document.getElementById(`lift-${i}`);u.style.top=(l-1)*-100+"%",u.setAttribute("flag",l),u.style.transition=`all ${l*2}s`,m[i-1].busy=!0,setTimeout(()=>{$(i)},l*2*1e3),setTimeout(()=>{v(i),m[i-1].busy=!1},l*2*1e3+2500)}})})}});
