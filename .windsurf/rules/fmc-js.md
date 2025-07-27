---
trigger: manual
---

index.html will always have the below tags

<script src="../../helpers/header.js" type="module"></script>
<script src="./index.js" type="module"></script>
<link rel="stylesheet" href="./style.css" />

header.js is responsible for importing the standard head tags and default styles. Hence no need to
add tags like title, meta etc. Only these 3 imports are enough.

The js files are imported as module. So please dont wait for domcontent load event in the js.

The default styles are present in
/Users/spai3/Documents/sadanand/projects/frontend-mini-challenges/shared/styles that include sr-only

As the styles reset are already present in the cores styles, no need to add styles of box-sizing
etc. There is no need to handle light and dark mode for any challenges.

No need to add header with title for the index.html as it is taken care in the default tags in the
header.js that has a navbar.

Scope of the changes should be only within apps/javascript/src
