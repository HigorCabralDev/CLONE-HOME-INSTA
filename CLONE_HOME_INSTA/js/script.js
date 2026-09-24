const root = document.documentElement;
const btn = document.getElementById ("btnTema");

// Recuperar o tema salvo

const temaSalvo = localStorage.getItem("tema");

if(temaSalvo === "escuro"){
    root.setAttribute("data-tema", "escuro");
    btn.textContent = "☀️ Tema claro";
}

// Alternar o tema
btn.addEventListener("click",() =>{
 const escuro = root.getAttribute("data-tema") === "escuro";

 if (escuro){
    root.removeAttribute("data-tema");
    localStorage.setItem("tema", "claro")
    btn.textContent = "🌙 Tema escuro";
 } else {
    root.setAttribute("data-tema", "escuro");
    localStorage.setItem("tema", "escuro");
    btn.textContent = "☀️ Tema claro";
 }
});
