import"./modulepreload-polyfill-9p4a8sJU.js";import"./header-WYkBU0ns.js";import"./ng-challenges-8BuCYb8P.js";import"./navbar-CEhq6ivy.js";const l=document.querySelector("form"),s=document.querySelector("#file-input"),c=document.querySelector("#selected-file-area");l.addEventListener("click",()=>{s.click()});s.onchange=({target:e})=>{const t=e.files[0];let n=t.name;if(t){const i=o(n);i.length>12&&(n=i.substring(0,12)+"... "+a(n))}r(n)};function o(e){const t=e.lastIndexOf(".");return e.substr(0,t)}function a(e){const t=e.lastIndexOf(".");return e.slice(t)}function r(e){const t=`<div class="row">
    <i class="fas fa-file-alt"></i>
    <div class="content">
      <div class="details">
        <span class="name">${e}</span>
      </div>
    </div>
  </div>`;c.innerHTML=t}
