const clarityKey = 'i80mpp28ya';
const claritySrc = 'https://www.clarity.ms/tag/';

export function addClarity(c = window, l = document, a = 'clarity', r = 'script', i = clarityKey, t, y) {
  c[a] =
    c[a] ||
    function () {
      (c[a].q = c[a].q || []).push(arguments);
    };
  t = l.createElement(r);
  t.async = 1;
  t.src = claritySrc + i;
  y = l.getElementsByTagName(r)[0];
  y.parentNode.insertBefore(t, y);
}
