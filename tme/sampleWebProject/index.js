document.querySelector('form').
  addEventListener('submit', (event) => {
    event.preventDefault()

    const { value } = document.querySelector('input')
    const message = document.querySelector('h1')

    if (value.includes('@')) {
      message.innerHTML = "Looks alright!"
    } else {
      message.innerHTML = "Invalid email!"
    }
  })