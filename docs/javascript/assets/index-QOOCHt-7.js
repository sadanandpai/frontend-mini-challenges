import"./modulepreload-polyfill-9p4a8sJU.js";import{p as c,H as h,h as n,d as o,j as u}from"./js-challenges-EKxRxy_u.js";const l=`:host {
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
`,m=c(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.challenge=void 0}render(){return n("a",{class:`challenge-card ${this.challenge.link?"":"disabled"} ${this.challenge.difficulty}`,href:this.challenge.link},this.challenge.isNew&&n("span",{class:"new"},"New"),n("div",null,n("h3",null,this.challenge.title),n("div",{class:"avatar-container"},this.challenge.developer&&n("div",{class:"developer"},n("img",{src:this.challenge.developer.pic,alt:""}),n("span",{class:"name"},this.challenge.developer.name)))))}static get style(){return l}},[1,"challenge-card",{challenge:[16]}]);function p(){if(typeof customElements>"u")return;["challenge-card"].forEach(t=>{switch(t){case"challenge-card":customElements.get(t)||customElements.define(t,m);break}})}const d=p,g=":host{display:block}.challenge-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));grid-gap:1.5rem;margin:2rem 0}",b=c(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow()}render(){return n("div",{class:"challenge-grid"},n("slot",null))}static get style(){return g}},[1,"challenge-grid"]);function v(){if(typeof customElements>"u")return;["challenge-grid"].forEach(t=>{switch(t){case"challenge-grid":customElements.get(t)||customElements.define(t,b);break}})}const f=v,i=new Map([["sadanandpai",{name:"Sadanand Pai",pic:"https://avatars.githubusercontent.com/u/12962887"}],["arpansaha13",{name:"Arpan Saha",pic:"https://avatars.githubusercontent.com/u/82361490"}],["noorulaink00",{name:"Noor Ul Ain Khan",pic:"https://avatars.githubusercontent.com/u/65324193"}],["sahankatta",{name:"Sahan Katta",pic:"https://avatars.githubusercontent.com/u/65811236"}],["rashidtvmr",{name:"Rashid",pic:"https://avatars.githubusercontent.com/u/58169715"}],["gauravsinhaweb",{name:"Gaurav Sinha",pic:"https://avatars.githubusercontent.com/u/75125943"}],["Kei-K23",{name:"Kei-K",pic:"https://avatars.githubusercontent.com/u/134714087"}],["caesar003",{name:"Khaisar Muksid",pic:"https://avatars.githubusercontent.com/u/37962465"}],["christian-lee1398",{name:"Christian Lee",pic:"https://avatars.githubusercontent.com/u/83561483"}],["Sukomal07",{name:"Sukomal Dutta",pic:"https://avatars.githubusercontent.com/u/100500478"}],["5h0ov",{name:"Shuvadipta Das",pic:"https://avatars.githubusercontent.com/u/83227649"}],["shruti-sen2004",{name:"Shruti Sen",pic:"https://avatars.githubusercontent.com/u/115914670"}],["Kushal347",{name:"Kushal Agrawal",pic:"https://avatars.githubusercontent.com/u/115914670"}],["AbhineshJha",{name:"ABHINESH KUMAR JHA",pic:"https://avatars.githubusercontent.com/u/142514166"}],["hritik",{name:"Hritik Bhattacharya",pic:"https://avatars.githubusercontent.com/u/44370586"}],["viditagrawal56",{name:"Vidit Agrawal",pic:"https://avatars.githubusercontent.com/u/52532308"}],["VishakhaSainani",{name:"Vishakha Sainani",pic:"https://avatars.githubusercontent.com/u/113436770"}],["shivam200446",{name:"Shivam",pic:"https://avatars.githubusercontent.com/u/127589548?s=96&v=4"}],["Vivek-GuptaXCode",{name:"Vivek Kumar Gupta",pic:"https://avatars.githubusercontent.com/u/145761266"}],["CrypticRevenger",{name:"Spandan Tripathy",pic:"https://avatars.githubusercontent.com/u/128175097"}],["AckermanLevi1",{name:"Aryan Bhargava",pic:"https://avatars.githubusercontent.com/u/114604529"}],["sujitmahapatra",{name:"Sujit Mahapatra",pic:"https://avatars.githubusercontent.com/u/127632703"}],["avtech",{name:"Ayush Varshney",pic:"https://avatars.githubusercontent.com/u/97428742"}],["pranav514",{name:"Pranav",pic:"https://avatars.githubusercontent.com/u/76992202"}],["Bratajit-03",{name:"Bratajit Das",pic:"https://avatars.githubusercontent.com/u/106532791"}],["DhanushNehru",{name:"Dhanush Nehru",pic:"https://avatars.githubusercontent.com/u/22955675"}],["itsayopapi",{name:"Ayomide Hassan",pic:"https://avatars.githubusercontent.com/u/111683116"}],["srijanB7",{name:"Srijan B7",pic:"https://avatars.githubusercontent.com/u/115921421"}],["AdityaSuryawanshi",{name:"Aditya Suryawanshi",pic:"https://avatars.githubusercontent.com/u/124609794"}],["NikhilJHA01",{name:"Nikhil Jha",pic:"https://avatars.githubusercontent.com/u/63518046"}],["deepu0",{name:"Deepak Kumar",pic:"https://avatars.githubusercontent.com/u/22304384"}],["deepakRikhav",{name:"Deepak Rikhav",pic:"https://avatars.githubusercontent.com/u/97227284"}],["deepakrajkranti",{name:"Deepak Raj",pic:"https://avatars.githubusercontent.com/u/88797436"}],["insharahAyyubi",{name:"Insharah Ayyubi",pic:"https://avatars.githubusercontent.com/u/103804673"}],["ayush-dutt-sharma",{name:"Ayush Dutt Sharma",pic:"https://avatars.githubusercontent.com/u/73738613"}],["dhanu084",{name:"Dhanush Kiran",pic:"https://avatars.githubusercontent.com/u/54932658"}],["kumaratul60",{name:"Atul Kumar Awasthi",pic:"https://avatars.githubusercontent.com/u/53579888"}],["ravi02205",{name:"Ravi Kumar Panchal",pic:"https://avatars.githubusercontent.com/u/81222901"}],["harsh472000",{name:"Harsh Meghani",pic:"https://avatars.githubusercontent.com/u/55913938"}],["Pancratzia",{name:"Laura Ortega",pic:"https://avatars.githubusercontent.com/u/54899954"}],["ashikjhonson",{name:"Ashik Jhonson",pic:"https://avatars.githubusercontent.com/u/97791612"}],["Krishnakalani111",{name:"Krishna Kalani",pic:"https://avatars.githubusercontent.com/u/88764668"}],["Bhushan1019",{name:"Bhushan Patil",pic:"https://avatars.githubusercontent.com/u/121352274"}],["Sumitwarrior7",{name:"Cool Dude 69",pic:"https://avatars.githubusercontent.com/u/108853577"}],["rishabhm05",{name:"Rishabh Mehta",pic:"https://avatars.githubusercontent.com/u/67910259"}],["jeevaramanathan",{name:"Jeeva Ramanathan",pic:"https://avatars.githubusercontent.com/u/64531160"}],["AbhilashMadi",{name:"Abhilash",pic:"https://avatars.githubusercontent.com/u/109837171"}],["AnkitKTrivedi",{name:"Ankit Kumar Trivedi",pic:"https://avatars.githubusercontent.com/u/38967951"}],["jaydadhaniya",{name:"Jay Dadhaniya",pic:"https://avatars.githubusercontent.com/u/24772528"}],["pankajparkar",{name:"Pankaj Parkar",pic:"https://avatars.githubusercontent.com/u/5320044"}]]);d();f();o();const k=a=>{const t=document.createElement("challenge-card"),e={title:a.title,link:`./src/challenges/${a.link}/`,difficulty:a.difficulty,youtube:a.youtube,tags:a.tags,isNew:a.isNew};if(a.developer){const s=i.get(a.developer);e.developer=s}if(a.contributors){e.contributors=[];for(const s of a.contributors){const r=i.get(s);r&&e.contributors.push(r)}}return t.challenge=e,t},y=document.getElementById("challengeGrid");u.map(k).forEach(a=>y.appendChild(a));
