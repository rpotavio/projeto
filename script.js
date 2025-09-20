// Função para alternar o modo
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Salva se a classe "light" existe
  localStorage.setItem("isLight", html.classList.contains("light"))
}

// Quando a página carrega, verifica o que foi salvo
window.addEventListener("DOMContentLoaded", () => {
  const isLight = localStorage.getItem("isLight") === "true"
  if (isLight) {
    document.documentElement.classList.add("light")
  } else {
    document.documentElement.classList.remove("light")
  }
})
