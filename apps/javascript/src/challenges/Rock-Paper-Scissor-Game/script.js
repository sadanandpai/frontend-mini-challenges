// step 1 initialize variables
const computer = document.querySelector('#computer')
const user = document.querySelector('#user')
const options = document.querySelectorAll('#option')
const Answer = document.querySelector('#Answer')
const computerScoreCount = document.querySelector('#cm-score-count')
const userScoreCount = document.querySelector('#user-score-count')
const resetBtn = document.querySelector('#reset-btn')

// step 2 crate array for computer images
const optionsArray = ['rock', 'paper', 'scissor']

function computerAnswer() {
  const random = Math.floor(Math.random() * 3)
  return optionsArray[random]
}

// step 3 main logic of game
options.forEach((option) => {
  option.addEventListener('click', (e) => {
    computer.classList.add('animate-right')
    user.classList.add('animate-left')

    const computerChoose = computerAnswer()
    const userChoose = e.target.className

    setTimeout(() => {
      computer.src = `./images/${computerChoose}.png`
      user.src = `./images/${userChoose}.png`
      computer.classList.remove('animate-right')
      user.classList.remove('animate-left')

      if (userChoose === computerChoose) {
        Answer.innerText = 'draw'
        UserScore()
        cmScore()
      } else if (userChoose === 'rock') {
        if (computerChoose === 'paper') {
          Answer.innerText = 'Computer Win'
          cmScore()
        } else {
          Answer.innerText = 'User Win'
          UserScore()
        }
      } else if (userChoose === 'paper') {
        if (computerChoose === 'scissor') {
          Answer.innerText = 'Computer Win'
          cmScore()
        } else {
          Answer.innerText = 'User Win'
          UserScore()
        }
      } else if (userChoose === 'scissor') {
        if (computerChoose === 'rock') {
          Answer.innerText = 'Computer Win'
          cmScore()
        } else {
          Answer.innerText = 'User Win'
          UserScore()
        }
      }
    }, 1000)

    computer.src = `./images/rock.png`
    user.src = `./images/rock.png`
  })
})

//step 4 increase score functions
const cmScore = () => {
  const cmScoreValue = parseInt(computerScoreCount.innerText)
  computerScoreCount.innerText = cmScoreValue + 1
}
const UserScore = () => {
  const userScoreValue = parseInt(userScoreCount.innerText)
  userScoreCount.innerText = userScoreValue + 1
}

// step 5 reset game
resetBtn.addEventListener('click', () => {
  computerScoreCount.innerText = 0
  userScoreCount.innerText = 0
  computer.src = `./images/rock.png`
  user.src = `./images/rock.png`
})
