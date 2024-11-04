const input = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-btn')
const word_searched = document.querySelector('.word')
const partOfSpeech = document.querySelector('.part-of-speech')
const phonetic = document.querySelector('.phonetic')
const meaning = document.querySelector('.meaning')
const sentence = document.querySelector('.sentence')
const soundBtn = document.querySelector('.sound-btn')
const wordBody = document.querySelector('.content-body')
const notFound = document.querySelector('.not-found')
const audio = document.querySelector('audio')

// fetch data from api and set in our project
showData = async (word) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const response = await fetch(url)
    const word_data = await response.json()
    console.log(word_data)

    if (!word_data[0]) {
        notFound.style.display = 'flex'
        wordBody.style.display = 'none'
        return
    }

    notFound.style.display = 'none'
    wordBody.style.display = 'flex'


    word_searched.innerText = word_data[0].word
    partOfSpeech.innerText = word_data[0].meanings[0].partOfSpeech
    phonetic.innerText = word_data[0].phonetic ? word_data[0].phonetic : ''
    meaning.innerText = word_data[0].meanings[0].definitions[0].definition
    sentence.innerText = word_data[0].meanings[0].definitions[0]?.example ? word_data[0].meanings[0].definitions[0]?.example : '';
    audio.src = word_data[0].phonetics[0].audio || word_data[0].phonetics[1].audio || word_data[0].phonetics[2].audio
}

// add event on our button
searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    showData(input.value.trim())
    input.value = ''
})

// soundBtn event for audio
soundBtn.addEventListener('click', () => {
    audio.play()
})