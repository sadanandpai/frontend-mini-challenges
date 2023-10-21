// display logic
let boxes = document.getElementsByClassName("box");
let div = document.querySelector("div");
let turn = document.querySelector('turn');
// to detect number of click on table
let u = 1;
// where x - row of table, y - column/cell
var x,y ;
// length of p tag initially i.e, before win
const plength = document.querySelector('p').innerText.length;
const p = document.querySelector('p').innerText;
// players
const p1 ='Player First';
const p2 = 'Second Player';
// win
let win = false;
// button to new game 
let newGame = document.querySelector("button");
// score of p1 & p2
let sc1 = document.querySelector("sc1");
let sc2 = document.querySelector("sc2");
// initial scores
sc1.innerText = 0 ;
sc2.innerText =0 ;


for(let i = 0; i <boxes.length;i++) {
    boxes[i].addEventListener("click", function(){
        if(plength>=document.querySelector('p').innerText.length){
        switch(i){
            case 0:
                x=0;
                y=0;
                break;
            case 1:
                x=0;
                y=1;
                break;
            case 2:
                x=0;
                y=2;
                break;
            case 3:
                x=1;
                y=0;
                break;
            case 4:
                x=1;
                y=1;
                break;
            case 5:
                x=1;
                y=2;
                break;
            case 6:
                x=2;
                y=0;
                break;
            case 7:
                x=2;
                y=1;
                break;
            case 8:
                x=2;
                y=2;
                break;
            default:
                alert("loop or switch error");
                break;                                            
        }

    if(document.querySelector('table').rows[x].cells[y].innerText==""){
            if(u%2==0){
                boxes[i].innerHTML="X";
                console.log("X");
                document.querySelector('turn').innerText='First: players\' turn';
            }
            else{
                boxes[i].innerHTML="O";
                console.log("Y");
                document.querySelector('turn').innerText='Second: players\' turn';
            }
            ++u;
        }
    };
    });
};

// winning logic
let items =[
    [document.querySelector('table').rows[0].cells[0],document.querySelector('table').rows[0].cells[1],document.querySelector('table').rows[0].cells[2]],
    [document.querySelector('table').rows[1].cells[0],document.querySelector('table').rows[1].cells[1],document.querySelector('table').rows[1].cells[2]],
    [document.querySelector('table').rows[2].cells[0],document.querySelector('table').rows[2].cells[1],document.querySelector('table').rows[2].cells[2]],
];

div.addEventListener("click", function(){
if(plength>=document.querySelector('p').innerText.length){
// for digonals
if(items[0][0].innerText == "X" && items[1][1].innerText=="X" && items[2][2].innerText=="X"){
    document.querySelector('p').innerText +=p2;
    win= true;
    document.querySelector('turn').innerText=p2+' wins';
    sc2.innerText = Number(sc2.innerText) + 1 ;
}
else if(items[0][0].innerText == "O" && items[1][1].innerText=="O" && items[2][2].innerText=="O"){
    document.querySelector('p').innerText +=p1;
    win= true;
    document.querySelector('turn').innerText=p1+' wins';
    sc1.innerText = Number(sc1.innerText) + 1 ;
}

else if(items[0][2].innerText == "X" && items[1][1].innerText=="X" && items[2][0].innerText=="X"){
    document.querySelector('p').innerText +=p2;
    win= true;
    document.querySelector('turn').innerText=p2+' wins';
    sc2.innerText = Number(sc2.innerText) + 1 ;
}
else if(items[0][2].innerText == "O" && items[1][1].innerText=="O" && items[2][0].innerText=="O"){
    document.querySelector('p').innerText +=p1;
    document.querySelector('turn').innerText=p1+' wins';
    sc1.innerText = Number(sc1.innerText) + 1 ;
    win= true;
}

// dor rows
else if(items[0][0].innerText == "O" && items[0][1].innerText=="O" && items[0][2].innerText=="O"){
    document.querySelector('p').innerText +=p1;
    win= true;
    document.querySelector('turn').innerText=p1+' wins';
    sc1.innerText = Number(sc1.innerText) + 1 ;
}
else if(items[0][0].innerText == "X" && items[0][1].innerText=="X" && items[0][2].innerText=="X"){
    document.querySelector('p').innerText +=p2;
    win= true;
    document.querySelector('turn').innerText=p2+' wins';
    sc2.innerText = Number(sc2.innerText) + 1 ;
}

else if(items[1][0].innerText == "O" && items[1][1].innerText=="O" && items[1][2].innerText=="O"){
    document.querySelector('p').innerText +=p1;
    win= true;
    document.querySelector('turn').innerText=p1+' wins';
    sc1.innerText = Number(sc1.innerText) + 1 ;
}
else if(items[1][0].innerText == "X" && items[1][1].innerText=="X" && items[1][2].innerText=="X"){
    document.querySelector('p').innerText +=p2;
    win= true;
    document.querySelector('turn').innerText=p2+' wins';
    sc2.innerText = Number(sc2.innerText) + 1 ;
}

else if(items[2][0].innerText == "O" && items[2][1].innerText=="O" && items[2][2].innerText=="O"){
    document.querySelector('p').innerText +=p1;
    win= true;
    document.querySelector('turn').innerText=p1+' wins';
    sc1.innerText = Number(sc1.innerText) + 1 ;
}
else if(items[2][0].innerText == "X" && items[2][1].innerText=="X" && items[2][2].innerText=="X"){
    document.querySelector('p').innerText +=p2;
    win= true;
    document.querySelector('turn').innerText=p2+' wins';
    sc2.innerText = Number(sc2.innerText) + 1 ;
}

// for columns
else if(items[0][0].innerText == "O" && items[1][0].innerText=="O" && items[2][0].innerText=="O"){
    document.querySelector('p').innerText +=p1;
    win= true;
    document.querySelector('turn').innerText=p1+' wins';
    sc1.innerText = Number(sc1.innerText) + 1 ;
}
else if(items[0][0].innerText == "X" && items[1][0].innerText=="X" && items[2][0].innerText=="X"){
    document.querySelector('p').innerText +=p2;
    win= true;
    document.querySelector('turn').innerText=p2+' wins';
    sc2.innerText = Number(sc2.innerText) + 1 ;
}

else if(items[0][1].innerText == "O" && items[1][1].innerText=="O" && items[2][1].innerText=="O"){
    win= true;
    document.querySelector('p').innerText +=p1;
    document.querySelector('turn').innerText=p1+' wins';
    sc1.innerText = Number(sc1.innerText) + 1 ;
}
else if(items[0][1].innerText == "X" && items[1][1].innerText=="X" && items[2][1].innerText=="X"){
    win= true;
    document.querySelector('p').innerText +=p2;
    document.querySelector('turn').innerText=p2+' wins';
    sc2.innerText = Number(sc2.innerText) + 1 ;
}

else if(items[0][2].innerText == "O" && items[1][2].innerText=="O" && items[2][2].innerText=="O"){
    win= true;
    document.querySelector('p').innerText +=p1;
    document.querySelector('turn').innerText=p1+' wins';
    sc1.innerText = Number(sc1.innerText) + 1 ;
}
else if(items[0][2].innerText == "X" && items[1][2].innerText=="X" && items[2][2].innerText=="X"){
    win= true;
    document.querySelector('p').innerText +=p2;
    document.querySelector('turn').innerText=p2+' wins';
    sc2.innerText = Number(sc2.innerText) + 1 ;
}
else if(u>=10 && win == false){
    document.querySelector('p').innerText = " It's a tie";
    document.querySelector('turn').innerText= "Tie";
}
}

});

newGame.addEventListener("click",function(){
    u = 1;
    win = false ;
    document.querySelector('turn').innerText=" First: players' turn ";
    document.querySelector('p').innerText = p ;
    for(let i =0;i<3;i++){
        for(let j=0;j<3;j++){
            document.querySelector("table").rows[i].cells[j].innerText = "";
        }
    }
})