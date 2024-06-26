
// event toggle menu mobile
const navbar = document.querySelector(".container-nav")
const hamburgerMenu = document.querySelector(".container-nav .navbar .nav-hamburger img")
const hiddenScroll = document.body
const circleLogo = document.querySelector(".container-nav .navbar .nav-logo .circle")
hamburgerMenu.addEventListener("click",()=>{
    if (navbar.className === "container-nav") {
        navbar.className = "container-nav open"
        hiddenScroll.style.overflowY = "hidden"
        hamburgerMenu.src = "src/img/mobile/ph_x.png"

        circleLogo.style.background = ""

    } else {
        navbar.className = "container-nav"
        hamburgerMenu.src = "src/img/mobile/hamburger_black.png"
        hiddenScroll.style.overflowY = "auto"
        if (document.documentElement.scrollTop >= 70) {
            hamburgerMenu.src = "src/img/mobile/hamburger-white.png"

            circleLogo.style.background = "#FFFFFF"
        }
    }
})

const mbLogo = document.querySelector(".container-nav .navbar .nav-logo .logo-mobile .open")
mbLogo.addEventListener("click",()=>{
    navbar.className = "container-nav"
    hamburgerMenu.src = "src/img/mobile/hamburger_black.png"
    hiddenScroll.style.overflowY = "auto"
    if (document.documentElement.scrollTop >= 70) {
        hamburgerMenu.src = "src/img/mobile/hamburger-white.png"
        circleLogo.style.background = "#FFFFFF"
    }
})

const mbLink = document.querySelectorAll(".container-nav .nav-menu .menu-mobile")
for (const iterator of mbLink) {
    iterator.addEventListener("click",()=>{
        navbar.className = "container-nav"
        hamburgerMenu.src = "src/img/mobile/hamburger_black.png"
        hiddenScroll.style.overflowY = "auto"
        if (document.documentElement.scrollTop >= 70) {
            hamburgerMenu.src = "src/img/mobile/hamburger-white.png"

            circleLogo.style.background = "#FFFFFF"
        }
    })
}

// event scroll navbar
window.onscroll = function() {
    const scroll = document.documentElement.scrollTop
    const mbLogo = document.querySelector(".container-nav .navbar .nav-logo .logo-mobile .close")
    const Logo = document.querySelector(".container-nav .navbar .nav-logo .logo a")
    const Link = document.querySelectorAll(".container-nav .nav-menu .menu")

    if (scroll >=70) {
        navbar.style.background = "#285E67"
        hamburgerMenu.src = "src/img/mobile/hamburger-white.png"

        // circlelogo
        circleLogo.style.background = "#FFFFFF"
        circleLogo.addEventListener("mouseover",()=>{
            circleLogo.style.background = "#EBBFAE"
        })
        circleLogo.addEventListener("mouseout",()=>{
            circleLogo.style.background = "#FFFFFF"
        })

        // menu desktop
        for (const iterator of Link) {
            iterator.style.color = "#FFFFFF"
            iterator.addEventListener('mouseover',()=>{
                iterator.style.color = "#EBBFAE"
            })
            iterator.addEventListener('mouseout',()=>{
                iterator.style.color = "#FFFFFF"
            })
        }

        // logo mobile
        mbLogo.style.color = "#FFFFFF"
        mbLogo.addEventListener("mouseover",()=>{
            mbLogo.style.color = "#EBBFAE"
            mbLogo.style.transition = "1s"
        })
        mbLogo.addEventListener("mouseout",()=>{
            mbLogo.style.color = "#FFFFFF"
        })

        // logo desktop
        Logo.style.color = "#FFFFFF"
        Logo.addEventListener('mouseover',()=>{
            Logo.style.color = "#EBBFAE"
        })
        Logo.addEventListener('mouseout',()=>{
            Logo.style.color = "#FFFFFF"
        })
    }else{
        navbar.style.background = ""
        hamburgerMenu.src = "src/img/mobile/hamburger_black.png"

        // menudesktop
        for (const iterator of Link) {
            iterator.style.color = ""
            iterator.addEventListener('mouseover',()=>{
                iterator.style.color = "#EBBFAE"
            })
            iterator.addEventListener('mouseout',()=>{
                iterator.style.color = ""
            })
        }

        // circlelogo
        circleLogo.style.background = ""
        circleLogo.addEventListener("mouseover",()=>{
            circleLogo.style.background = "#EBBFAE"
        })
        circleLogo.addEventListener("mouseout",()=>{
            circleLogo.style.background = ""
        })

        // logo mobile
        mbLogo.style.color = ""
        mbLogo.addEventListener("mouseover",()=>{
            mbLogo.style.color = "#EBBFAE"
            mbLogo.style.transition = "1s"
        })
        mbLogo.addEventListener("mouseout",()=>{
            mbLogo.style.color = ""
        })

        // logo desktop
        Logo.style.color = ""
        Logo.addEventListener('mouseover',()=>{
            Logo.style.color = "#EBBFAE"
        })
        Logo.addEventListener('mouseout',()=>{
            Logo.style.color = ""
        })
    }
}
