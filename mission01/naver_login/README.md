# 네이버 로그인 페이지 구현

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

<br>
<br>

# 0. 진행 순서
1) email을 정규 표현식에 맞게 입력하였는지 확인
2) password을 정규 표현식에 맞게 입력하였는지 확인
3) 로그인 버튼 클릭 시, user.id 값과 input 값이 일치하는지 확인
4) 로그인 버튼 클릭 시, user.pwd 값과 input 값이 일치하는지 확인
5) 일치 확인 후, welcome.html로 페이지 이동

<br>
<br>
<br>

# 1. email을 정규 표현식에 맞게 입력하였는지 확인
※ 검증 목적 : 사용자가 아이디를 이메일 양식에 맞게 입력하였는가?  
- 검증 결과가 false면 해당 input에 is--invalid 추가
- 검증 결과가 true면 해당 input에 is--invalid 제거

<br>

### ◇ 진행 과정 
(1) emailReg 함수와 emailPw 함수를 활용해 이벤트 발생 시 실행할 함수로 ```validationId```와 ```validationPw```를 만든다.    
(2) ```const userId = getNode('#userEmail')``` => userId.value로 input 값을 받아온다.    
(3) ```userId.addEventListener('input',() => validationId(userId))```로 사용자가 아이디를 이메일 양식에 맞게 입력하였는지 검증하고, 검증결과가 false면 ```classList```에 ```is--invalid```를 추가하고, 검증결과가 true면 해당 ```classList```에 ```is--invalid```를 제거한다. 

<br>

### ◇ 의문점
- ``` ▶ 해결``` 처음부터 userEmail의 값을 어떻게 받아오는지 몰라서 막혔다.. 그러나 챗gpt를 통해 value 값으로 받아오면 된다는 걸 알아서 해결했다.  
- ``` ▶ 해결 못했음``` 아래의 코드처럼 validation 함수를 즉시실행함수로 만든 뒤, 매개변수 node로 userId를 인수로 받아오고 싶었는데, 계속해서 오류가 발생했다. validaton 매개변수를 비우고 내부 return 함수의 매개변수에만 node를 넣어보기도 하고, 그 반대로도 해봤는데 둘 다 되지 않았다. 그래서 결국 함수 클로저를 만들고, 즉시실행함수로 안쪽 함수를 실행하는 방법 대신, 이벤트 실행 함수에 넣었던 validaitonId 함수를 익명함수로 감싸서 넣었다.

``` ※ 오류 생긴 코드식 ```

```javascript
const validationId = ((node) => {

  return (node) => {
    if (emailReg(node.value)) node.classList.remove('is--invalid');
    else node.classList.add('is--invalid');
    }
  })()

  
userEmail.addEventListener('input',validationId(userId))
```

<br>
<br>
<br>

# 2. password를 정규 표현식에 맞게 입력하였는지 확인
※ 검증 목적 : 사용자가 비밀번호를 양식에 맞게 입력하였는가?  
- 검증 결과가 false면 해당 input에 is--invalid 추가
- 검증 결과가 true면 해당 input에 is--invalid 제거

<br>

### ◇ 진행 과정 
(1) ```const userPw= getNode('#userPassword)``` => userPw.value로 input 값을 받아온다.    
(2) ```userPw.addEventListener('input',() => validationPw(userPw))```로 사용자가 비밀번호를 비밀번호 양식에 맞게 입력하였는지 검증하고, 검증결과가 false면 ```classList```에 ```is--invalid```를 추가하고, 검증결과가 true면 해당 ```classList```에 ```is--invalid```를 제거한다. 


<br>
<br>
<br>

# 3 & 4. 로그인 버튼 클릭 시, user.id & user.pw 값이 input 값과 일치하는지 확인
※ 검증 목적 : 사용자의 이메일이 user.id 값과 일치하는가? / 사용자의 비밀번호가 user.pw 값과 일치하는가?

<br>

### ◇ 진행 과정 
(1) ```const LoginButton = getNode('.btn-login')``` => 로그인 버튼 객체를 LoginButton이라는 변수에 저장한다.  
(2) 로그인 버튼을 클릭하는 이벤트가 발생할 때, 실행할 ```handleClickLogin``` 함수를 만든다. 
- ```e.preventDefault()``` => 아이디와 비밀번호가 일치한다는 조건이 실행된 다음, ```welcome.html```로 페이지가 넘어갈 수 있도록, 원래 로그인 버튼이 지녔던 ```submit``` 기능을 없앤다. 
- 조건문을 통해 변수로 저장된 user.id, user.pw와 사용자가 입력한 아이디, 비밀번호의 값이 일치하는지 확인하고, 일치한다면 ```location.href```을 통해 현재 페이지에서 ```./welcome.html```페이지로 이동할 수 있도록 코드를 구성한다. 
```javascript
  if(userId.value === user.id && userPw.value === user.pw) 
  location.href = "./welcome.html"
```

<br>
<br>
<br>

# 5. 일치 확인 후, welcome.html로 페이지 이동

<br>

### ◇ 진행 과정 
(1) ```LoginButton.addEventListener('click', handleClickLogin)``` 을 통해, 로그인 버튼을 클릭하는 이벤트가 발생할 때, 앞서 만들었던 ```handleClickLogin``` 함수가 실행될 수 있도록 만든다. 
<br>
<br>









