function validarCpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g, "");

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

function cadastrar() {
    const cpfInput = document.getElementById("cpf").value;
    const messageDiv = document.getElementById("message");

    if (validarCpf(cpfInput)) {
        messageDiv.textContent = "CPF válido";
        messageDiv.className = "message success";
    } else {
        messageDiv.textContent = "CPF inválido";
        messageDiv.className = "message error";
    }

    messageDiv.style.display = "block";
}

'user strict'; // é usado para mostrar o problema caso tenha 

// verifica se o cep é valido
const eNumero = (numero) => /^[0-9]+$/.teste(numero);    //expressão para ver se está entre 0 á 9

const cepValido = (cep) => cep.length == 8 && eNumero(cep); // testa para ver se so tem numero e se é de 0 á 9
