function checkRepeat() {
  if (
    document.getElementById("password").value !==
    document.getElementById("repeat_password").value
  ) {
    document.querySelector(".warning_password").innerHTML =
      "პაროლები არ ემთხვევა!";
    document.querySelector(".reset_btn").disabled = true;
  } else {
    document.querySelector(".warning_password").innerHTML = null;
    document.querySelector(".regist_btn").disabled = false;
  }
}

function slideRegistration() {
  let registration = document.querySelector(".regist");
  registration.classList.toggle("hidden");
  let authForm = document.querySelector(".login");
  authForm.classList.toggle("hidden");

  setTimeout(function () {
    let regSlider = document.querySelector(".regist_slider");
    regSlider.classList.toggle("hidden");

    let authSlider = document.querySelector(".login_slider");
    authSlider.classList.toggle("hidden");

    let background = document.querySelector(".blue_bg");
    background.classList.toggle("transform");
  }, 1);
}

let regSliderBtn = document.querySelector(".regist_slider_btn");
regSliderBtn.addEventListener("click", slideRegistration);

let authSliderBtn = document.querySelector(".login_slider_btn");
authSliderBtn.addEventListener("click", slideRegistration);

const email = document.getElementById("login_email");
const loginPassword = document.getElementById("login_password");
const loginForm = document.getElementById("login_form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();


  const rgx =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const r = rgx.test(email.value);
  console.log(r);
  console.log(email.value);

  if (
    loginPassword.value === "" ||
    loginPassword.value === null ||
    email.value === "" ||
    email.value === null
  ) {
    document.querySelector(".warning_email").classList.add("error_style");
    document.querySelector(".warning_email").innerHTML = "შეავსეთ ყველა ველი";
  } else if (r === false) {
    document.querySelector(".warning_email").classList.add("error_style");
    document.querySelector(".warning_email").innerHTML =
      "მეილის ფორმატი არასწორია";
  } else {

    if ( email.value == sessionStorage.getItem('email')  && loginPassword.value == sessionStorage.getItem('password'))
    {location.href = "profile.html";
  } else {
    document.querySelector(".warning_email").classList.add("error_style");
    document.querySelector(".warning_email").innerHTML = "მომხმარებლის სახელი ან პაროლი არასწორია";
  }
  }
});

// registration validation

const regForm = document.getElementById("regist_form");

const regEmail = document.getElementById("regist_email");
const regName = document.getElementById("reg_name");


const regSurname = document.getElementById("surname");
const regPassword = document.getElementById("password");

regForm.addEventListener("submit", (e) => {
  e.preventDefault();


  const rgx =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const r = rgx.test(regEmail.value);
  console.log(r);

  if (r === false) {
    const warnEmail = document.querySelector(".reg_warning_email");
    warnEmail.classList.add("error_style");
    warnEmail.innerHTML = "მეილის ფორმატი არასწორია";

    // console.log(warnEmail);
  }  else if (regName.value === "" || regName.value === null) {
    const warnName = document.querySelector(".warning_name");
    warnName.innerHTML = "გთხოვთ შეიყვანოთ სახელი";
    
  } else if (regName.value > 0 && /\p{Letter}/u.test(regName.value) === false) {
    document.querySelector(".warning_name").innerHTML =
      "სახელი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";


  } else if (regSurname.value === "" || regSurname.value === null) {
    const warnSurname = document.querySelector(".warning_surname");

    warnSurname.innerHTML = "გთხოვთ შეიყვანოთ გვარი";


  } else if (
    regSurname.value.length > 0 &&
    /\p{Letter}/u.test(regSurname.value) === false
  ) {

    document.querySelector(".warning_surname").innerHTML =
      "გვარი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";

  } else  if (/\p{Letter}/u.test(regSurname.value) === false) {
    document.querySelector(".warning_surname").innerHTML =
      "გვარი, არ უნდა შეიცავდეს რიცხვებს და სიმბოლოებს";

  }  else if (regPassword.value === "" || regPassword.value === null) {
    document.querySelector(".warning_password").innerHTML =
      "გთხოვთ შეიყვანოთ პაროლი";
 
  } 
  // else if ( !regPassword.value === "" && !regSurname.value === "" && regName.value === "" && r === true   ) {
  //   warnEmail.innerHTML= "";
  //   warnSurname.innerHTML = "";
  //   warnName.innerHTML = "";
  //   document.querySelector(".warning_password").innerHTML =
  //     "";
  // }
  
  else {
    location.href = "profile.html";
    sessionStorage.setItem('name',regName.value);
    sessionStorage.setItem('surname',regSurname.value);
    sessionStorage.setItem('email',regEmail.value);
    sessionStorage.setItem('password',regPassword.value);
    
  }

});

console.log(sessionStorage.getItem('password'))