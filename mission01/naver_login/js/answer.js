/* 네이버 로그인 과제 : 진혁 매니저님 코드 */


const $emailInput = document.querySelector('#userEmail');
const $passwordInput = document.querySelector('#userPassword');
const $loginBtn = document.querySelector('.btn-login');

let emailCheckPass = false;
let pwCheckPass = false;

function handleEmailCheck() {
  const value = this.value;

  if (emailReg(value)) {
    this.classList.remove('is--invalid');
    emailCheckPass = true;
  } else {
    this.classList.add('is--invalid');
    emailCheckPass = false;
  }
}

function handlePasswordCheck() {
  const value = this.value;

  if (pwReg(value)) {
    this.classList.remove('is--invalid');
    pwCheckPass = true;
  } else {
    this.classList.add('is--invalid');
    pwCheckPass = false;
  }
}

function handleLogin(e) {
  e.preventDefault();

  if (emailCheckPass && pwCheckPass) {
    try {
      const id = $emailInput.value;
      const pw = $passwordInput.value;

      const getUserId = user.id;
      const getUserPw = user.pw;

      if (id === getUserId && pw === getUserPw) {
        location.href = 'welcome.html';
      }

    } catch {

    }
  }
}

$emailInput.addEventListener('input', handleEmailCheck);
$passwordInput.addEventListener('input', handlePasswordCheck);
$loginBtn.addEventListener('click', handleLogin);
