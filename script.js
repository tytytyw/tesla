const arrow = document.querySelector('.arrow')
const sec2 = document.querySelector('.section2')
  arrow.addEventListener('click', function (e) {
    e.preventDefault()
    sec2.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
