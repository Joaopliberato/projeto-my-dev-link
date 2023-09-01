// function toggleMode(){
//   const html = document.documentElement
//   html.classList.toggle("light")
//   const img = document.querySelector("#profile img")
//   if(html.classList.contains("light")){
// img.setAttribute("src", "/assets/avatar-light.png")
//   }else{
//   img.setAttribute("src", "/assets/avatar.png")
//   }
// }

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    document.getElementById("img-light").style.display = "block"
    document.getElementById("img-dark").style.display = "none"
    // img.setAttribute("src", "/assets/avatar-light.png")
  } else {
    document.getElementById("img-light").style.display = "none"
    document.getElementById("img-dark").style.display = "block"
    // img.setAttribute("src", "/assets/avatar.png")
  }
}
