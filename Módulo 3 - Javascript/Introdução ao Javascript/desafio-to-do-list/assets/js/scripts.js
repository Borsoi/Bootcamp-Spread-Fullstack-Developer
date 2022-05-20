let adicionarAoClique = document.getElementById("botao-entrada");
adicionarAoClique.addEventListener("click", adicionarItem);

function adicionarItem() {
  const texto = document.getElementById("entrada").value;
  const lista = document.getElementById("lista-to-do");

  const label = document.createElement("label");
  label.innerText = texto;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = texto;

  const li = document.createElement("li");
  li.appendChild(checkbox);
  li.appendChild(label);

  lista.append(li);
}
