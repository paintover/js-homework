
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/


// 함수

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function getNode(node, context = document) {
  // if (isString(context)) {
  //   context = document.querySelector(context);
  // }

  // context가 document가 아니라면 querySelector를 돌아줘.
  if (context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelector(node);
}

getNode('.list'); // ul

function getNodes(node, context = document) {
  if (context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelectorAll(node);
}


/* 진행과정 */

// 1. email을 정규 표현식에 맞게 입력하였는지 확인
  const validationId = (node) => {
    if(typeof node == 'string') node = getNode(node)

    if (emailReg(node.value)) node.classList.remove('is--invalid');
    else node.classList.add('is--invalid');
  }

  const validationPw = (node) => {
    if(typeof node == 'string') node = getNode(node)

    if (pwReg(node.value)) node.classList.remove('is--invalid');
    else node.classList.add('is--invalid');
  }
  
const userId = getNode('#userEmail')

userId.addEventListener('input',() => validationId(userId))


// 2. password를 정규 표현식에 맞게 입력하였는지 확인

const userPw = getNode('#userPassword')

userPw.addEventListener('input',() => validationPw(userPw))


// 3 & 4. 로그인 버튼 클릭 시, user.id & user.pw 값이 input 값과 일치하는지 확인
const LoginButton = getNode('.btn-login')

const handleClickLogin = (e) => {
  e.preventDefault() 

  if(userId.value === user.id && userPw.value === user.pw) 
  location.href = "./welcome.html"
}

// 5. 일치 확인 후, welcome.html 페이지로 이동

LoginButton.addEventListener('click', handleClickLogin)





