### Challenge 1: Star Rating

Create star rating utility using HTML, CSS and JavaScript

**Playground:** [JSFiddle](https://jsfiddle.net/devkode/wxoykdgm/)

## Template

> HTML

```
<body>
    <div id="star"></div>
    <div id="display-star"></div>


    <script src="script.js"></script>
    <script>
        function getStar(value){
            document.getElementById("display-star").innerHTML = value;
        }
        new Star("#star", 5, getStar);
    </script>
</body>
```

> External CSS

```
<link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
```

> Star Icons

```
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
```

> CSS

```
.fa-star-o:before {
    content: "\f006";
    color: #5f6368;
}

.fa-star:before {
    content: "\f005";
    color: #d56e0c;
}
```

> JS

```
/*
 * Creates star rating functionality
 * @param el DOM Element
 * @param count Number of stars
 * @param callback Returns selected star count to callback
 */
function Star(el, count, callback) {
    // write logic to create star rating utility.
}

```

### Demo

> Default state

![](./images/1.png)

> On Hover

![](./images/2.png)

> On Click

![](./images/3.png)

<br />

[Telegram](http://t.me/teamdevkode) | [Instagram](https://www.instagram.com/devkode.io/) | [Website](https://learn.devkode.io/)
