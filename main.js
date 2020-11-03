const Btn = document.querySelector(".switch");

Btn.addEventListener("click" , function(){
    document.body.classList.toggle("dark");
    Btn.classList.toggle("active");
})