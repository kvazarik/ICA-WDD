const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const links = document.querySelectorAll("ul li")

links.forEach(link => {
  link.addEventListener('click',() => {
    navbarLinks.classList.remove('active')
  })
})
  

