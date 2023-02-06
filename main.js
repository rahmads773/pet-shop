

let header = document.querySelector("header")
let menu = document.querySelector("header ul")
let menuIcon = document.querySelector("header .down")

let loginBtn = document.querySelector("header .login .user")
let login =  document.querySelector("header .login .login-box")

// header drop
window.onscroll = (eo) => {
    header.style.transform = "translateY(0)"
    if(window.scrollY === document.querySelector(".landing-container").offsetTop){
    header.style.transform = "translateY(-74px)"
   if(menu.classList.contains("active")){
    document.querySelector("header ul.active").classList.remove("active")
   }
   if(menuIcon.classList.contains("active")){
    document.querySelector("header  .down.active").classList.remove("active")
   }
   if(login.classList.contains("active")){
    document.querySelector("header .login .login-box.active").classList.remove("active")
   }

    }
}

// login 

loginBtn.addEventListener("click",(eo) => {
    login.classList.toggle("active")
})



// menu drop

menuIcon.addEventListener("click",(eo) => {
    menuIcon.classList.toggle('active')
    menu.classList.toggle('active')
})