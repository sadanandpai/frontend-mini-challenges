import { challenges } from './challenges.js';

// Add navbar script
const navbarScript = document.createElement('script');
navbarScript.src = '../../helpers/navbar.js';
navbarScript.type = 'module';

// Add style tag
const coreStyles = document.createElement('link');
coreStyles.setAttribute('rel', 'stylesheet');
coreStyles.setAttribute('href', '../../helpers/core.css');

const metaUTF = document.createElement('meta');
metaUTF.setAttribute('charset', 'UTF-8');

const metaName = document.createElement('meta');
metaName.setAttribute('name', 'viewport');
metaName.setAttribute('content', 'width=device-width, initial-scale=1.0');

const metaHTTP = document.createElement('meta');
metaHTTP.setAttribute('http-equiv', 'X-UA-Compatible');
metaHTTP.setAttribute('content', 'IE=edge');

const favIcon = document.createElement('link');
favIcon.setAttribute('rel', 'icon');
favIcon.setAttribute('type', 'image/svg+xml');
favIcon.setAttribute('href', '../../logo.svg');

// Add all tagsto the head
const headTags = [navbarScript, coreStyles, metaUTF, metaName, metaHTTP, favIcon];
headTags.forEach((tag) => document.head.prepend(tag));

// Add title
const challengeLink = window.location.pathname.split('machine-coding/')[1].slice(0, -1);
const challenge = challenges.find((challenge) => challenge.link === challengeLink);
document.title = challenge.title;
