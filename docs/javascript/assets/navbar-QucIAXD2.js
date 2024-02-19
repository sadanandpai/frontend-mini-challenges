import{d as n,j as a}from"./ng-challenges-t-CmjP73.js";var l={VITE_REACT_APP_URL:"http://localhost:6012/",VITE_NG_APP_URL:"http://localhost:6014/",VITE_PATH:"frontend-mini-challenges",VITE_HOST_URL:"http://localhost:6010/",VITE_JS_APP_URL:"http://localhost:6011/",VITE_VUE_APP_URL:"http://localhost:6013/",BASE_URL:"/frontend-mini-challenges/javascript/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};n();const{VITE_PATH:e,VITE_HOST_URL:s,DEV:c}=l,i=c?`${s}${e}/#/javascript/`:`/${e}/#/javascript/`,r=window.location.pathname.split("/challenges/")[1].slice(0,-1),t=a.get(r),_=`
  <a slot="left" href=${i} class="back">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  </a>
`,h=t!=null&&t.youtube?`<a slot="icon" href=${t.youtube} target="blank" class="youtube">
    <img src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" alt="youtube solution" />
  </a>`:"",o=document.createElement("navigation-bar");o.challengeTitle=t.title;o.innerHTML+=_;o.innerHTML+=h;document.body.prepend(o);
