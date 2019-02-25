let img = document.getElementById('img')
let ul = document.getElementById('ul')
const tl = new TimelineMax()

const imgArray = [
  'Gin-resize.png',
  'Ko-resize.png',
  'Ma-resize.png',
  'Shi-resize.png',
  'Trump-resize.png',
  'Tsai-resize.png',
  'Tseng-resize.png',
  'Han-resize.png'
]
let i = 2
let distance = 47
let newElement = img.cloneNode(true)
newElement.src = `./src/${imgArray[i]}`
let select = ul.children[5]
let prevSelect = ul.children[4]
select.style.color = 'red'

setInterval(() => {
  select.style = null
  prevSelect.style.color = 'red'
  let all = [...document.getElementsByClassName('list__element')]
  tl.to(all, 1, {top: 0})
  img.classList.add('article__img--active')
  img.parentNode.insertBefore(newElement, img)
  setTimeout(() => {
    img.parentNode.removeChild(img)
    img = newElement
    newElement = img.cloneNode(true)
    i = i === 7 ? 0 : i + 1
    newElement.src = `./src/${imgArray[i]}`
  }, 1500)
  setTimeout(() => {
    let temp = ul.lastElementChild.cloneNode(true)
    temp.style = null
    ul.insertBefore(temp, ul.firstElementChild)
    ul.lastElementChild.remove()
    all.map(element => {
      element.style = null
    })
    select = ul.children[5]
    prevSelect = ul.children[4]
    select.style.color = 'red'
  }, 2000)
},4000)
