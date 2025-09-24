// Array para armazenar os amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);
  input.value = "";

  atualizarLista();
}

// Função para atualizar a lista de amigos
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpa a lista antes de atualizar

  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Função para sortear um amigo
function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpa resultados anteriores

  if (amigos.length === 0) {
    alert("Não há amigos para sortear.");
    return;
  }

  // Gera índice aleatório
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Cria um li para o resultado
  const li = document.createElement("li");
  li.textContent = `Amigo sorteado: ${amigos[indiceAleatorio]}`;
  resultado.appendChild(li);
}