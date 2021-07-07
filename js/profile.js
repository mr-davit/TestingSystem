const subjectLi = document.getElementsByClassName("my_subject_li");
for (var i = 0; i < subjectLi.length; i++) {
  subjectLi[i].addEventListener("click", () => {
    const profileForm = document.querySelector(".profile_form_container");
    profileForm.classList.add("hidden");
    document.querySelector(".middle_section").classList.remove("hidden");
  });
}

const students = document.querySelector(".students");
const tests = document.querySelector(".tests");
const teachers = document.querySelector(".teachers");
const testsSection = document.querySelector(".tests_section");
const studentsSection = document.querySelector(".students_section");
const teachersSection = document.querySelector(".teachers_section");

const remove = (element) => {
  if (element.classList.contains("active")) {
    element.classList.remove("active");
  }
};

students.addEventListener("click", () => {
  remove(tests);
  remove(teachers);
  testsSection.classList.add("hidden");
  studentsSection.classList.remove("hidden");
  students.classList.add("active");
  teachersSection.classList.add("hidden");
});

tests.addEventListener("click", () => {
  studentsSection.classList.add("hidden");
  testsSection.classList.remove("hidden");
  tests.classList.add("active");
  teachersSection.classList.add("hidden");
  remove(students);
  remove(teachers);
});

teachers.addEventListener("click", () => {
  remove(tests);
  remove(students);
  studentsSection.classList.add("hidden");
  testsSection.classList.add("hidden");
  teachersSection.classList.remove("hidden");
  teachers.classList.add("active");
});

function checkRepeat() {
  if (
    document.getElementById("profile_password_input").value !==
    document.getElementById("repeat_password_input").value
  ) {
    document.querySelector(".warning_password").innerHTML =
      "პაროლები არ ემთხვევა!";
    document.querySelector(".reset_btn").disabled = true;
  } else {
    document.querySelector(".warning_password").innerHTML = null;
    document.querySelector(".reset_btn").disabled = false;
  }
}

// RESET VALIDATION
const resetForm = document.querySelector(".profile_section_form");
resetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const warnName = document.querySelector(".profile_name");
  const warnLastName = document.querySelector(".profile_lastName");
  const name = document.querySelector(".profile_firstname_input");
  const LastName = document.querySelector(".profile_lastname_input");
  const passwordInput = document.querySelector("#profile_password_input").value;
  const ResPasswordInput = document.querySelector(
    "#repeat_password_input"
  ).value;
  if (!passwordInput || !ResPasswordInput) {
    document.querySelector(".warning_password").innerHTML =
      "გთხოვთ შეიყვანოთ პაროლი";
  } else {
    document.querySelector(".warning_password").innerHTML = null;
  }
  if (name.value.length === 0) {

    warnName.innerHTML = "გთხოვთ შეიყვანოთ სახელი";
  }
  if (name.value.length > 0 && /\p{Letter}/u.test(name.value) === false) {
    warnName.innerHTML = "სახელი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
  } else if (name.value.length > 0 && /\p{Letter}/u.test(name.value) === true) {
    warnName.innerHTML = "";
  }
  if (LastName.value.length === 0) {
    warnLastName.innerHTML = "გთხოვთ შეიყვანოთ გვარი";
  }
  if (
    LastName.value.length > 0 &&
    /\p{Letter}/u.test(LastName.value) === false
  ) {
    warnLastName.innerHTML = "გვარი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
  } else if (
    LastName.value.length > 0 &&
    /\p{Letter}/u.test(LastName.value) === true
  ) {
    warnLastName.innerHTML = "";
  }
});

// TOGGLE CLASS
const titl2Bottom = document.querySelector(".title2_bottom");
const class2Top = document.querySelector(".class2_top ");
const class1Top = document.querySelector(".class1_top");
const class1Bottom = document.querySelector(".class1_bottom");
const class2Bottom = document.querySelector(".class2_bottom");
const class3Top = document.querySelector(".class3_top");
const class3Bottom = document.querySelector(".class3_bottom");
const title1Bottom = document.querySelector(".title1_bottom");
const title3Bottom = document.querySelector(".title3_bottom");

const hide = (...x) => {
  for (var i = 0; i < x.length; i++) {
    x[i].classList.add("hidden");
  }
};

const show = (...x) => {
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("hidden");
  }
};

titl2Bottom.addEventListener("click", () => {
  class2Top.classList.add("active_class");
  class1Top.classList.remove("active_class");
  class3Top.classList.remove("active_class");
  hide(class1Top, class2Bottom, class3Top);
  show(class1Bottom, class2Top, class3Bottom);
});
title1Bottom.addEventListener("click", () => {
  class1Top.classList.add("active_class");
  class3Top.classList.remove("active_class");
  class2Top.classList.remove("active_class");
  hide(class2Top, class1Bottom, class3Top);
  show(class1Top, class2Bottom, class3Bottom);
});

title3Bottom.addEventListener("click", () => {
  class3Top.classList.add("active_class");
  class2Top.classList.remove("active_class");
  class1Top.classList.remove("active_class");
  hide(class2Top, class1Top, class3Bottom);
  show(class3Top, class1Bottom, class2Bottom);
});

// ADD STUDENTS
const StudentName = document.querySelector(".students_name_input");
const StudentLastName = document.querySelector(".students_lastname_input");
const NameError = document.querySelector(".name_error");
const LastNameError = document.querySelector(".lastName_error");

const AddStudentBtn = document.querySelector(".add_student");
AddStudentBtn.addEventListener("click", () => {
  let validateName = false;
  let validateLastName = false;

  if (StudentName.value.length === 0) {
    NameError.innerHTML = "გთხოვთ შეიყვანოთ სახელი";
  } else if (
    StudentName.value.length > 0 &&
    /\p{Letter}/u.test(StudentName.value) === false
  ) {
    NameError.innerHTML = "სახელი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
  } else if (
    StudentName.value.length > 0 &&
    /\p{Letter}/u.test(StudentName.value) === true
  ) {
    NameError.innerHTML = "";
    validateName = true;
  }

  if (StudentLastName.value.length === 0) {
    LastNameError.innerHTML = "გთხოვთ შეიყვანოთ გვარი";
  } else if (
    StudentLastName.value.length > 0 &&
    /\p{Letter}/u.test(StudentLastName.value) === false
  ) {
    LastNameError.innerHTML = "გვარი არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";
  } else if (
    StudentLastName.value.length > 0 &&
    /\p{Letter}/u.test(LastNameError.value) === true
  ) {
    LastNameError.innerHTML = "";
    validateLastName = true;
  }
  if (validateLastName && validateName) {
    const activeClass = document.querySelector(".active_class");
    const ActiveUl = activeClass.querySelector(".students_ul");
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(StudentName.value + " " + StudentLastName.value)
    );
    ActiveUl.appendChild(li);

  }
  StudentName.value = "";
  StudentLastName.value = "";
});

console.log(sessionStorage);

let profileName = sessionStorage.getItem('name');
let profileSurname = sessionStorage.getItem('surname');
let profileEmail = sessionStorage.getItem('email');

document.getElementById("profileName").innerHTML = profileName + " " + profileSurname;
document.getElementById("profileEmail").value = profileEmail;

document.getElementById("profile_firstname_input").value = profileName;
document.getElementById("profile_lastname_input").value = profileSurname;





document.getElementById("profile_section_form").addEventListener("submit", (e) => {
  e.preventDefault(); 

  updname = document.getElementById("profile_firstname_input");
  updsurname = document.getElementById("profile_lastname_input");
  updpassword = document.getElementById("repeat_password_input");

   if (updname.value === "" || updname.value === null) {
    const warnName = document.querySelector(".warning_name");
    warnName.innerHTML = "გთხოვთ შეიყვანოთ სახელი";
    
  } else if (updname.value > 0 && /\p{Letter}/u.test(updname.value) === false) {
    document.querySelector(".warning_name").innerHTML =
      "სახელი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";


  } else if (updsurname.value === "" || updsurname.value === null) {
    const warnSurname = document.querySelector(".warning_surname");

    warnSurname.innerHTML = "გთხოვთ შეიყვანოთ გვარი";


  } else if (
    updsurname.value.length > 0 &&
    /\p{Letter}/u.test(updsurname.value) === false
  ) {

    document.querySelector(".warning_surname").innerHTML =
      "გვარი, არ უნდა შეიცივადეს რიცხვებს და სიმბოლოებს";

  } else  if (/\p{Letter}/u.test(updsurname.value) === false) {
    document.querySelector(".warning_surname").innerHTML =
      "გვარი, არ უნდა შეიცავდეს რიცხვებს და სიმბოლოებს";

  }  else if (updpassword.value === "" || updpassword.value === null) {
    document.querySelector(".warning_password").innerHTML =
      "გთხოვთ შეიყვანოთ პაროლი";
 
  } 
  // else if ( !updpassword.value === "" && !updsurname.value === "" && updname.value === "" && r === true   ) {
  //   warnEmail.innerHTML= "";
  //   warnSurname.innerHTML = "";
  //   warnName.innerHTML = "";
  //   document.querySelector(".warning_password").innerHTML =
  //     "";
  // }
  
  else {
 
    sessionStorage.setItem('name',updname.value);
    sessionStorage.setItem('surname',updsurname.value);
    sessionStorage.setItem('password',updpassword.value);
    
  }


});