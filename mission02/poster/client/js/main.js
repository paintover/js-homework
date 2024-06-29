
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = document.querySelector('.nav')
const visualImage = document.querySelector('.visual img')
const liList = document.querySelector('ul').children
const nickName = document.querySelector('.nickName')

// 배경색 변경 (colorB의 기본값은 #000)
function setBgColor (node, colorA, colorB = '#000'){
  if(typeof node === 'string') node = document.querySelector(node)

  if(typeof colorA === 'string') colorA = colorA
  if(typeof colorB === 'string') colorB = colorB

  node.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;
}

// // 이미지 변경
function setImage (node, data, index){
  if(typeof node === 'string') node = document.querySelector(node)
  
  if(index !== undefined) {
    node.src = `./assets/${data[index].name}.jpeg`;
    node.alt = data[index].alt
  } else {
    node.src = `./assets/${data.name}.jpeg`
    node.alt = data.alt
  }
  }


// 비주얼 이름 변경
function setNameText(node, data, index){
if(typeof node === 'string') node = document.querySelector(node)

if(index !== undefined) {
  node.textContent = data[index].name;
} else node.textContent = data.name 
}


// 클릭 이벤트 함수
function handleClick(e) {
  const li = e.target.closest('li')  
  if(!li) return

  const index = li.dataset.index-1
  const colorA = data[index].color[0]
  const colorB = data[index].color[1]


  setBgColor('body',colorA, colorB)
  setImage(visualImage, data, index)
  setNameText(nickName, data, index)

  for(const list of liList) {
    list.classList.remove('is-active')
  }

  li.classList.add('is-active')
}

// 클릭 이벤트 활성화
nav.addEventListener('click', handleClick)









