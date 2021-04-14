function checkRepeat() {
  if (
    document.getElementById("regist_password").value ==
    document.getElementById("repeat_regist_password").value
  ) {
    console.log("test");
    document.getElementById("repeat_label").style.color = "green";
    document.getElementById("repeat_label").innerHTML = "matching";
  } else {
    document.getElementById("repeat_regist_password").style.outlineColor =
      "red";
    document.getElementById("repeat_label").innerHTML = "not matching";
  }
}

//  let regBtn = document.querySelector('.reg-btn')
//   regBtn.addEventListener('click', (event)=>{
//     event.preventDefault()
//   })

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
