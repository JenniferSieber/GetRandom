//GET https://api.weather.gov/alerts/active?area={state}


//API TEMPLATE
const img = document.querySelector('img')
const quoteContainer =  document.querySelector('.quote')
const quote =  document.querySelector('.quote-text')
img.src = ''
quote.textContent = ''

document.querySelector('h1').addEventListener('click', e => {
  e.preventDefault()
  quoteContainer.classList.add('hidden')
  img.classList.add('hidden')
  img.src = ''
  quote.textContent = ''
  getFetch()
})

function getImg() {
  let randomW = (Math.floor(Math.random() * 10)) 
  let randomH = (Math.floor(Math.random() * 10)) 
  if (randomW < 3) {
    randomW = 3
  } else if (randomW > 5) {
    randomW = 5
    } 
  randomH = (randomH + randomW) / 2
  if (randomH > 5) {
    randomH = 5
  }

  let imgURL = `https://placekeanu.com/${randomW * 100}/${randomH * 100}/g`
  return imgURL
}

function getFetch(){
  const url = `https://api.adviceslip.com/advice`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      let imgUrl = getImg()
      
      img.classList.remove('hidden')
      quoteContainer.classList.remove('hidden')
      img.src = imgUrl
      quote.textContent = `" ${data.slip.advice} "`
    })
    .catch(err => {
      console.log(`Error ${err}`)
    })
}
