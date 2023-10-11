const bugFenderKey = '4qTOiIjXmvLeD09teClfkoVZx5daMNyM';
const bugFenderSrc = 'https://js.bugfender.com/bugfender-v2.js';

export function addBugFender() {
  const bugFenderScript = document.createElement('script');
  bugFenderScript.defer = 1;
  bugFenderScript.src = bugFenderSrc;
  const scriptTag = document.getElementsByTagName('script')[0];

  bugFenderScript.addEventListener('load', () => {
    window.Bugfender.init({
      appKey: bugFenderKey,
    });
  });
  document.head.insertBefore(bugFenderScript, scriptTag);
}
