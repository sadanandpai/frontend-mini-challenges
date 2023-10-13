const randomnum1 = Math.floor(Math.random() * 6) + 1;
const randomimg = "dice" + randomnum1 + ".png";
const imgsource1 = "images/" + randomimg;
const image1 = document.querySelectorAll("img")[0].setAttribute("src", imgsource1);
const randomnum2 = Math.floor(Math.random() * 6) + 1;
const imgsource2 = "images/" +"dice" + randomnum2 + ".png";
const image2 = document.querySelectorAll("img")[1].setAttribute("src", imgsource2);

if(randomnum1>randomnum2){
document.querySelector("h1").innerHTML ="Player1 Wins!";
}
else if(randomnum1<randomnum2){
    document.querySelector("h1").innerHTML="Player2 Wins!";
} 
else{
    document.querySelector("h1").innerHTML= "DRAW!";
}