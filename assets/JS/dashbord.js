const navbarDashbord = document.querySelectorAll('.toggle-nav')
navbarDashbord.forEach( nav => nav.addEventListener('click', event => {
   document.querySelector('.nav-dashbord ul').classList.toggle('close-nav')
}))
