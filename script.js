function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  const img_alt = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      'alt="uma figura feminina com metade do rosto branco e preto"'
    )
  } else {
    img.setAttribute(
      "alt",
      'alt="uma figura humana com laser apontando seu corpo"'
    )
  }
}
