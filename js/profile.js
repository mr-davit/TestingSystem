const subjectLi = document.getElementsByClassName("my_subject_li");
for (var i = 0; i < subjectLi.length; i++) {
  subjectLi[i].addEventListener("click", () => {
    const profileForm = document.querySelector(".profile_form_container");
    profileForm.classList.add("hidden");
    document.querySelector(".middle_section").classList.remove("hidden");
    console.log(profileForm);
  });
}

const students = document.querySelector(".students");
const tests = document.querySelector(".tests");
const teachers = document.querySelector(".teachers");
const testsContent = document.querySelector(".tests_content");
const studentsContent = document.querySelector(".students_content");
const teachersContent = document.querySelector(".teachers_content");

const remove = (element) => {
  if (element.classList.contains("active")) {
    element.classList.remove("active");
  }
};

students.addEventListener("click", () => {
  remove(tests);
  remove(teachers);
  testsContent.classList.add("hidden");
  studentsContent.classList.remove("hidden");
  students.classList.add("active");
  teachersContent.classList.add("hidden");
});

tests.addEventListener("click", () => {
  studentsContent.classList.add("hidden");
  testsContent.classList.remove("hidden");
  tests.classList.add("active");
  teachersContent.classList.add("hidden");
  remove(students);
  remove(teachers);
});

teachers.addEventListener("click", () => {
  remove(tests);
  remove(students);
  studentsContent.classList.add("hidden");
  testsContent.classList.add("hidden");
  teachersContent.classList.remove("hidden");
  teachers.classList.add("active");
});
