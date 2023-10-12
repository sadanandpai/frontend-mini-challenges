// This is an array of all the cards that we'll be using
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }

]

// We use a formula that I found somewhere to shuffle all cards
cardArray.sort(()=>0.5 - Math.random())

// We here declare the variables that we'll be using later on, all are self-explanatory
const gridDisplay = document.querySelector('#grid')
const resultDisplay  = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

// This function is to create our board that the user will see upon visiting the website
function createBoard() {
    for (let i = 0; i<cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()


// This function checks if the two cards chosen are the same ones or not, includes error handling
function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if (optionOneId == optionTwoId){
        alert('You have clicked the same image!')
        cards[optionOneId].setAttribute('src','images/blank.png')
    }
    else if(cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src','images/correct.png')
        cards[optionTwoId].setAttribute('src','images/correct.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen[0])
    }
    else{
        alert('Not a Match!')
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')

    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []
    // Case of finding all matches
    if (cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congrats you found them all!'
    }
}

// Animation of flipping the card, this is called when the user clicks on the image
function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)

    // Checks if 2 cards are chosen, and then call the checkMatch function
    if(cardsChosen.length == 2){
        setTimeout(checkMatch, 50)
    }
    
    
}
