function checkRepeat () {
  console.log("mushaobs")
    if (document.getElementById('reg-password-input').value == 
        document.getElementById('repeat_password').value) {
              document.getElementById('repeat_label').style.color = 'green';
              document.getElementById('repeat_label').innerHTML = 'matching';
  } else {
    document.getElementById('repeat_label').style.color = 'red';
    document.getElementById('repeat_label').innerHTML = 'not matching';
  }

}



 let regBtn = document.querySelector('.reg-btn')
  regBtn.addEventListener('click', (event)=>{
    event.preventDefault()
  })

let regSliderBtn = document.querySelector('.reg-slider-btn')
    regSliderBtn.addEventListener('click', slideRegistraion)

    function slideRegistraion (){
      let background = document.querySelector('.blue-background')
      background.classList.toggle('test')
      setTimeout (function(){
        let registration = document.querySelector('.reg-form')
        registration.classList.toggle('hidden')
        let regSlider = document.querySelector('.reg-slider')
        regSlider.classList.toggle('hidden')
        let authForm = document.querySelector('.auth-form')
        authForm.classList.toggle('hidden')
        let authSlider = document.querySelector('.auth-slider')
        authSlider.classList.toggle('hidden')
       
      }, 800)
   
    }

   let authSliderBtn = document.querySelector('.auth-slider-btn')
      authSliderBtn.addEventListener('click', slideRegistraion)