// Lesson (44) v (46) Explain: Create programming Project Editor HTML CSS and JS.
// مشروع html css javascript + انشاء محرر الاكواد البرمجية
// How to create a programming project editor?
// .....................................................


let codes = document.getElementById("codes");
let play = document.getElementById("play");
let remove = document.getElementById("remove");
let result = document.getElementById("result");



play.onclick = () => {
    result.innerHTML = codes.value;
    localStorage.setItem("RESULT", codes.value)
};

remove.onclick = () => {
    result.innerHTML = "";
    // codes.value = "";
};

onload = () => {
    codes.value = localStorage.getItem("RESULT");
    localStorage.setItem("RESULT", codes.value)
}