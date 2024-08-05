const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");
const idade = document.querySelector("#idade");
const telefone = document.querySelector("#telefone");

button.addEventListener("click", (event) => {
    event.preventDefault();

    const inputNameValue = nome.value;
    const inputIdadeValue = idade.value;
    const inputTelefoneValue = telefone.value;

    

    if (inputNameValue === "") {
        alert("Digite seu nome");
        return false;
    }

    if (inputIdadeValue === "") {
        alert("Digite sua idade");
        return false;
    }

    if (inputTelefoneValue === "") {
        alert("Digite seu telefone");
        return false;
    }

    
    const li = document.createElement("li");
    li.textContent = `${inputNameValue} / ${inputIdadeValue} / ${inputTelefoneValue}`;

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.style.marginLeft = "100px"; 
    deleteButton.classList.add("botao");

    
    deleteButton.addEventListener("click", () => {
        lista.removeChild(li);
    });

    
    li.appendChild(deleteButton);

    
    lista.appendChild(li);

    
    nome.value = "";
    idade.value = "";
    telefone.value = "";
});
