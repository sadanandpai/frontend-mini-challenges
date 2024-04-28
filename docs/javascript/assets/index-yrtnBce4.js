import"./header-sR9rfrPM.js";import"./navbar-ByK1SJ-l.js";const s=document.getElementById("balance-amount"),l=document.getElementById("transaction-list"),o=document.getElementById("description"),c=document.getElementById("amount"),u=document.getElementById("transaction-type"),m=document.getElementById("add-button");let d=0;function i(){s.textContent=`$${d.toFixed(2)}`}function r(n,t,e){const a=document.createElement("li");a.classList.add(e),a.innerHTML=`
        <span>${n}</span>
        <span>$${t.toFixed(2)}</span>
    `,l.appendChild(a),d+=e==="income"?t:-t,i()}m.addEventListener("click",()=>{const n=o.value,t=parseFloat(c.value),e=u.value;if(n.trim()===""||isNaN(t)||t<=0){alert("Please enter a valid description and amount.");return}r(n,t,e),o.value="",c.value=""});i();
