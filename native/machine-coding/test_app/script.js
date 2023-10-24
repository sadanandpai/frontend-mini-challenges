let qchart = document.querySelector('.qchart');
let ans1 = document.getElementById('ans1')
let ans2 = document.getElementById('ans2')
let ans3 = document.getElementById('ans3')
let ans4 = document.getElementById('ans4')
let _true = document.querySelector('#true')
let _false = document.querySelector('#false')

let qarray = ['1. What is the best country?',
            '2. Where is the statue of liberty?',
            '3. What is the name of Afg capital?',
            '4. What is the result of 2 - 1 ?',
            '5. Find the right answer 1 * 1?',
            'Your Final Score: '] 

let aarray = [['United State ','England  ','Germany  ','China  '],
['Finland  ','Iran  ','United State ','China  '],
['Kabul ','Kandahar  ','Badakhshan  ','Bamian  '],
['Ten  ','Ninty  ','Four  ','One '],
['Two  ','One ','Eight  ','Zero  '],
['End of the test','End of the test','End of the test','End of the test']]


var index = 0;
var trueScore = 0;
var falseScore = 0;
function update(){
    
    qchart.textContent = qarray[index]
    ans1.textContent = aarray[index][0]
    ans2.textContent = aarray[index][1]
    ans3.textContent = aarray[index][2]
    ans4.textContent = aarray[index][3]
    index++
    if(index > qarray.length){
        qchart = `Total Score: ${trueScore}`
    }
}


ans1.addEventListener('click',handler)
ans2.addEventListener('click',handler)
ans3.addEventListener('click',handler)
ans4.addEventListener('click',handler)

function handler(event){
    if(event.target.innerHTML.endsWith(' ')){
        trueScore++;
        if(event.target.innerHTML.endsWith('  ')){
            falseScore++;
            trueScore--;
        }
    }
    update()
    _true.innerHTML = trueScore
    _false.innerHTML = falseScore

    if (index > 5){
        qchart.innerHTML += trueScore
    }
    
}

