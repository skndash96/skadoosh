document.getElementById("notif").firstElementChild.onclick = e => {
  const el = e.target.parentElement
  el.classList.remove("scale-100")
  setTimeout(() => el.classList.add("hidden"), 250)
}
function setNotif(i) {
  const el = document.getElementById("notif")
  el.lastElementChild.textContent = i
  el.classList.remove("hidden")
  el.classList.add("scale-100")
}

const nav = document.getElementById("nav")
const navBtn = document.getElementById("navtoggle")
if (navBtn) {
  navBtn.innerHTML = "<i class=\"fa-solid fa-bars\"></i>"
  navBtn.onclick = e => {
    e.stopPropagation()
    nav.classList.toggle("translate-x-0")
    if (nav.classList.contains("translate-x-0")) navBtn.innerHTML = "x"
    else navBtn.innerHTML = "<i class=\"fa-solid fa-bars\"></i>"
  }
  
  nav.onclick = e => e.stopPropagation()
  document.onclick = () => {
    if (nav.classList.contains("translate-x-0")) {
      navBtn.innerHTML = "<i class=\"fa-solid fa-bars\"></i>"
      nav.classList.remove("translate-x-0")
    }
  }
} else { nav.remove() }