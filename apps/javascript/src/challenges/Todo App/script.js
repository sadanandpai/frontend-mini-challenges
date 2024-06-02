const addBtn = document.querySelector('.add-btn')
const TaskList = document.querySelector('.Task-List')
const inputTask = document.querySelector('.input-task')

addBtn.addEventListener('click', () => {
  if (inputTask.value === '') return
  const newTask = document.createElement('li')
  const deleteBtn = document.createElement('button')
  newTask.innerText = inputTask.value
  deleteBtn.innerText = 'Delete'
  TaskList.append(newTask, deleteBtn)
  inputTask.value = ''

  deleteBtn.addEventListener('click', () => {
    newTask.remove()
    deleteBtn.remove()
  })
})
