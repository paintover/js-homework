
# 1. 클릭 이벤트 활성화
``` javascript
nav.addEventListener('click', handleClick)
```
<br>
<br>

# 2. 클릭 이벤트 함수 만들기 : handleClick
## ※ handleClick 내부 함수 ※
### 1) 배경색 변경 함수 : ```setBgColor(node, colorA, colorB = #000)```
- node가 문자열인 경우 =>  ```node = document.querySelector(node)```로 node 재할당
- colorB의 디폴트 값은 #000으로 지정했다. 
``` javascript
function setBgColor (node, colorA, colorB = '#000'){
  if(typeof node === 'string') node = document.querySelector(node)

  node.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;
}
```

<br>

### 2) 이미지 변경 함수 : ```setImage (node, data, index)```
- node가 문자열인 경우 =>  ```node = document.querySelector(node)```로 node 재할당

* 매개변수 data 내의 정보가 여러 쌍이 있을 수 있기 때문에, index의 값이 들어가는 경우와 들어가지 않는 경우를 나누었다.
  * 매개변수 index의 값이 undefiend가 아닌 경우 => ```data[index].name``` & ```data[index].alt```   
  * 매개변수 index의 값이 없는 경우 (undefiend) => ```data.name``` & ```data.alt```  
  cf. ```if(index)``` => 이렇게 조건을 만들 경우에는, index가 0일 때 else 구문을 실행하기 때문에 ```if(index !== undefined)```로 조건을 설정해야함. (0은 falsy)
``` javascript
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
```

<br>

### 3) 비주얼 이름 변경 함수 : ```setNameText(node, data, index)```
- node가 문자열인 경우 =>  ```node = document.querySelector(node)```로 node 재할당
- ```setImage``` 함수와 동일하게, index 인수 유무에 따라  ```data[index].name```과 ```data.name```으로 값을 할당할 수 있게 만들었다.
``` javascript
function setNameText(node, data, index){
if(typeof node === 'string') node = document.querySelector(node)

if(index !== undefined) {
  node.textContent = data[index].name;
} else node.textContent = data.name 
}

```

<br>

### cf. 반복문을 사용한 'is-active' 클래스 추가
- ```<ul>```의 자식요소인 ```<li>```를 childern을 통해 선택하고, ```Array.from```으로 liList의 타입을 노드리스트에서 배열로 바꾸었다. => forEach로 클릭 이벤트가 발생할 때마다 모든 li 태그의 classList에서 'is-active'를 제거하고 현재 선택된 li 태그의 classList에만 'is-active'를 추가했다. 
``` javascript
const liList = Array.from(document.querySelector('ul').children)

 liList.forEach(li => li.classList.remove('is-active'))
 li.classList.add('is-active')
```









