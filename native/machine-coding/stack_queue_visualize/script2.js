var tp=-1
var a=[]
var msg=document.getElementById("message")

var box=document.getElementById("box")

var push=document.getElementById("push")
 push.addEventListener("click",function () {
    var text=document.getElementById("text").value
    if(text=="")
        msg.innerText="Please enter something"
    else
    {
        msg.innerText=""
        create(text)
    }
    document.getElementById("text").value=''
})
function create(text) {
    if(tp==5)
    {
        msg.innerText="Queue is Full"
    }
    else
    {
        msg.innerText=`${text} pushed into Queue`
        tp=tp+1
        a[tp]=text
        var bt=document.createElement("button")
        bt.textContent=text
        bt.classList="btn btn-secondary elements flashit"
        box.appendChild(bt)
        setTimeout(() => {
            bt.classList.remove("flashit")
        }, 1500);
    }
    text=""
    console.log(tp)
}

var pop=document.getElementById("pop")
pop.addEventListener("click",function(){
    if(tp==-1)
        msg.innerText="Queue is Empty"
    else
    {
        msg.innerText=`${a[0]} removed from Queue`
        for(i=0;i<6;i++)
            a[i]=a[i+1]
        tp=tp-1
        box.children[0].classList.add("flashit")
        setTimeout(() => {
            box.children[0].classList.remove("flashit")
            box.removeChild(box.children[0])
        }, 1000);
    }
})
var peek=document.getElementById("peek")
peek.addEventListener("click",function () {
    if(tp==-1)
        msg.innerText="Queue is Empty"
    else
    {
        msg.innerText=`${a[0]} is topmost element`
    }
})
