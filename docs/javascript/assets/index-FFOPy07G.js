import"./modulepreload-polyfill-9p4a8sJU.js";import{p as i,H as o,h as t,d as h,c as l}from"./challenges-I52fgG21.js";const u=`:host {
  display: block;

  --bg-challenge-card: #f9fafb;
  --bg-challenge-card-new: rgb(84, 84, 84);
  --text-challenge-card-new: white;
  --border-challenge-card: rgba(0, 0, 0, 0.15);
  --shadow-challenge-card: rgba(0 0 0 / 0.1);
  --shadow-challenge-card-scaled: rgba(0 0 0 / 0.25);
}

.challenge-card {
  display: block;
  position: relative;
  padding: 10px;
  overflow: hidden;
  background-color: var(--bg-challenge-card);
  border: 1px solid var(--border-challenge-card);
  border-radius: 0.25rem;
  box-shadow: 0 10px 15px -3px var(--shadow-challenge-card), 0 4px 6px -4px var(--shadow-challenge-card);
  transition: all 150ms ease-in-out;
  text-decoration: none;

  &:hover {
    box-shadow: 0 6px 8px 0 var(--shadow-challenge-card-scaled);
    transform: scale(1.05);
  }

  & .avatar-container > *:not(:first-child) {
    margin-top: 0.5rem;
  }

  & h3 {
    font-size: 1.25rem;
    font-weight: 500;
    color: green;
  }

  &.disabled h3 {
    color: grey;
  }

  &.disabled {
    cursor: not-allowed;
    box-shadow: 0 3px 4px 0 rgb(0 0 0 / 10%);
  }

  &.disabled:hover {
    transform: scale(1);
  }

  & .new {
    display: inline-block;
    padding: 0.2rem;
    position: absolute;
    top: 0;
    right: 0;
    width: 4rem;
    color: var(--text-challenge-card-new);
    font-size: small;
    font-weight: 500;
    text-align: center;
    background-color: var(--bg-challenge-card-new);
  }

  & .developer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: var(--text-body);

    & > img {
      width: 25px;
      height: 25px;
      margin-right: 0.5rem;
      border-radius: 50%;
    }
  }

  & .name {
    color: black;
  }

  &.medium h3 {
    color: rgb(75 75 255);
  }

  &.hard h3 {
    color: orangered;
  }
}
`,d=i(class extends o{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.challenge=void 0}render(){return t("a",{class:`challenge-card ${this.challenge.link?"":"disabled"} ${this.challenge.difficulty}`,href:this.challenge.link},this.challenge.isNew&&t("span",{class:"new"},"New"),t("div",null,t("h3",null,this.challenge.title),t("div",{class:"avatar-container"},this.challenge.developer&&t("div",{class:"developer"},t("img",{src:this.challenge.developer.pic,alt:""}),t("span",{class:"name"},this.challenge.developer.name)))))}static get style(){return u}},[1,"challenge-card",{challenge:[16]}]);function p(){if(typeof customElements>"u")return;["challenge-card"].forEach(n=>{switch(n){case"challenge-card":customElements.get(n)||customElements.define(n,d);break}})}const m=p,g=":host{display:block}.challenge-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));grid-gap:1.5rem;margin:2rem 0}",v=i(class extends o{constructor(){super(),this.__registerHost(),this.__attachShadow()}render(){return t("div",{class:"challenge-grid"},t("slot",null))}static get style(){return g}},[1,"challenge-grid"]);function b(){if(typeof customElements>"u")return;["challenge-grid"].forEach(n=>{switch(n){case"challenge-grid":customElements.get(n)||customElements.define(n,v);break}})}const f=b,c=new Map([["sadanandpai",{name:"Sadanand Pai",pic:"https://avatars.githubusercontent.com/u/12962887"}],["noorulaink00",{name:"Noor Ul Ain Khan",pic:"https://avatars.githubusercontent.com/u/65324193"}],["sahankatta",{name:"Sahan Katta",pic:"https://avatars.githubusercontent.com/u/65811236"}],["rashidtvmr",{name:"Rashid",pic:"https://avatars.githubusercontent.com/u/58169715"}],["gauravsinhaweb",{name:"Gaurav Sinha",pic:"https://avatars.githubusercontent.com/u/75125943"}],["Kei-K23",{name:"Kei-K",pic:"https://avatars.githubusercontent.com/u/134714087"}],["caesar003",{name:"Khaisar Muksid",pic:"https://avatars.githubusercontent.com/u/37962465"}],["christian-lee1398",{name:"Christian Lee",pic:"https://avatars.githubusercontent.com/u/83561483"}],["Sukomal07",{name:"Sukomal Dutta",pic:"https://avatars.githubusercontent.com/u/100500478"}],["5h0ov",{name:"Shuvadipta Das",pic:"https://avatars.githubusercontent.com/u/83227649"}],["shruti-sen2004",{name:"Shruti Sen",pic:"https://avatars.githubusercontent.com/u/115914670"}],["Kushal347",{name:"Kushal Agrawal",pic:"https://avatars.githubusercontent.com/u/115914670"}],["AbhineshJha",{name:"ABHINESH KUMAR JHA",pic:"https://avatars.githubusercontent.com/u/142514166"}],["hritik",{name:"Hritik Bhattacharya",pic:"https://avatars.githubusercontent.com/u/44370586"}],["viditagrawal56",{name:"Vidit Agrawal",pic:"https://avatars.githubusercontent.com/u/52532308"}],["VishakhaSainani",{name:"Vishakha Sainani",pic:"https://avatars.githubusercontent.com/u/113436770"}],["shivam200446",{name:"Shivam",pic:"https://avatars.githubusercontent.com/u/127589548?s=96&v=4"}],["Vivek-GuptaXCode",{name:"Vivek Kumar Gupta",pic:"https://avatars.githubusercontent.com/u/145761266"}],["CrypticRevenger",{name:"Spandan Tripathy",pic:"https://avatars.githubusercontent.com/u/128175097?v=4"}],["AckermanLevi1",{name:"Aryan Bhargava",pic:"https://avatars.githubusercontent.com/u/114604529?v=4"}],["sujitmahapatra",{name:"Sujit Mahapatra",pic:"https://avatars.githubusercontent.com/u/127632703?v=4"}],["avtech",{name:"Ayush Varshney",pic:"https://avatars.githubusercontent.com/u/97428742?v=4"}],["pranav514",{name:"Pranav",pic:"https://avatars.githubusercontent.com/u/76992202?v=4"}],["Bratajit-03",{name:"Bratajit Das",pic:"https://avatars.githubusercontent.com/u/106532791?v=4"}],["DhanushNehru",{name:"Dhanush Nehru",pic:"https://avatars.githubusercontent.com/u/22955675?v=4"}],["itsayopapi",{name:"Ayomide Hassan",pic:"https://avatars.githubusercontent.com/u/111683116?s=400&u=221fa8f0cdc1c0101bc5950a73e6e888dfb17b0a&v=4"}],["srijanB7",{name:"Srijan B7",pic:"https://avatars.githubusercontent.com/u/115921421?v=4"}]]);m();f();h();const w=e=>{const n=document.createElement("challenge-card"),a={title:e.title,link:e.link?`./src/challenges/${e.link}/`:null,difficulty:e.difficulty,youtube:e.youtube,tags:e.tags,isNew:e.isNew};if(e.developer){const r=c.get(e.developer);a.developer=r}if(e.contributors){a.contributors=[];for(const r of e.contributors){const s=c.get(r);s&&a.contributors.push(s)}}return n.challenge=a,n},x=document.getElementById("challengeGrid");l.map(w).forEach(e=>x.appendChild(e));
