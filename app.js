let amigos = []

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim()
    if (nome === "") return
    amigos.push(nome)
    document.getElementById("amigo").value = ""
    atualizarLista()
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""
    amigos.forEach(a => {
        let li = document.createElement("li")
        li.textContent = a
        lista.appendChild(li)
    })
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione mais amigos para sortear.")
        return
    }
    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)]
    
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = ""
    let li = document.createElement("li")
    li.textContent = "O amigo secreto é: " + amigoSecreto
    resultado.appendChild(li)
}

document.getElementById("button-add").addEventListener("click", adicionarAmigo)
document.getElementById("button-draw").addEventListener("click", sortearAmigo)