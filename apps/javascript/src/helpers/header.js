import { challenges } from './challenges.js';
import './navbar.js';
import './core.css';

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
favIcon.setAttribute(
  'href',
  'https://github.com/sadanandpai/frontend-mini-challenges/raw/main/shared/assets/logo.png'
);

// Add all tagsto the head
const headTags = [metaUTF, metaName, metaHTTP, favIcon];
headTags.forEach((tag) => document.head.prepend(tag));

// Add title
const challengeLink = window.location.pathname.split('/challenges/')[1].slice(0, -1);
const challenge = challenges.find((challenge) => challenge.link === challengeLink);
document.title = challenge.title;
