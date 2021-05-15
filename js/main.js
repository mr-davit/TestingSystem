function checkRepeat() {
  if (
    document.getElementById("password").value !==
    document.getElementById("repeat_password").value
  ) {
document.querySelector(".warning").innerHTML = "პაროლები არ ემთხვევა!";
  } else {
    document.querySelector(".warning").innerHTML = null;
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
  
  const rgx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const r =  rgx.test(email.value);
  console.log(r);
  console.log(email.value);

  if (loginPassword.value === "" || loginPassword.value === null || email.value === "" || email.value === null ) {
    document.querySelector(".warning_email").classList.add("error_style");
    document.querySelector(".warning_email").innerHTML = "შეავსეთ ყველა ველი";
  }
  
  else   if ( r === false  ) {
    
    document.querySelector(".warning_email").classList.add("error_style");
    document.querySelector(".warning_email").innerHTML = "მეილის ფორმატი არასწორია";

  } 
  
  else {
    location.href = "profile.html";

  }
}

);
