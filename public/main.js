let login_page_btn = document.getElementById('login_page_btn');


login_page_btn.onclick = function() {
    window.location.href = '/login'
}






// login validator
login = document.getElementById('login');

login.addEventListener('submit', e => {
  let userName = document.getElementById('userName').value;
  let unRegex = /\s/ig
  let pass = document.getElementById('pass').value;
  let passRegex2 = /\W/ig; // true
  let passRegex3 = /[A-Z]/g //true
  let passRegex4 = /[0-9]/ig //true
  let email = document.getElementById('email').value;
  let validUN = false;
  let validPass = false;

  if (unRegex.test(userName) === true) {
    document.querySelector(".invalid-username").style.display = 'block';
    validUN = false;
    e.preventDefault();
  }else {
    validUN = true;
  }
  if (passRegex4.test(pass) === false|| passRegex3.test(pass) === false || passRegex2.test(pass) === false) {
    e.preventDefault();
    document.querySelector(".invalid-pass").style.display = 'block';
    validPass = false;
  }else {
    validPass = true;
  }
  if (userName == pass) {
    e.preventDefault();
    document.querySelector(".un-pass-valid").style.display = 'block';
    validPass = false;
    validUN = false;
  }else {
    validPass = true;
    validUN = true;
  }


  if (validPass == true && validUN == true) {
    e;
  }
})
// eval(`var value${i} = 1;`)



let instagram = document.getElementById('instagram');
let facebook = document.getElementById('facebook');

instagram.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/3bd_llah_/';
})

facebook.addEventListener('click', () => {
    window.location.href = 'https://www.facebook.com/abdallah.tarek.353';
})


