let habilidades = [];

function adicionarHabilidade() {
    const select = document.getElementById("habilidadeSelect");
    const habilidade = select.value;

    if (habilidade === "") {
        alert("Selecione uma habilidade antes de adicionar.");
        return;
    }

    habilidades.push(habilidade);
    atualizarLista();
}

function atualizarLista() {
    const listaDiv = document.getElementById("lista-habilidades");
    listaDiv.innerHTML = habilidades.join(", ");
}

function checarEmail(email) {
    email = email.toLowerCase().trim();

    if (!email.includes("@") || (!email.endsWith(".com") && !email.endsWith(".br"))) {
        return false;
    }
    return true;
}

function checarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11) {
        return false;
    }
    return true;
}

function exibirFeedback(vetorErros) {
    const box = document.getElementById("feedback");

    if (vetorErros.length > 0) {
        box.innerHTML = "<strong>Erros encontrados:</strong><br>" + vetorErros.join("<br>");
        box.style.color = "red";
    } else {
        box.style.color = "green";
        box.innerHTML = `
            <strong>Cadastro realizado com sucesso!</strong><br><br>
            Nome: ${document.getElementById("nomeCompleto").value}<br>
            CPF: ${document.getElementById("cpf").value}<br>
            E-mail: ${document.getElementById("email").value}<br>
            Interesse: ${document.getElementById("interesse").value}<br>
            Habilidades: ${habilidades.join(", ")}
        `;
    }
}

function validarFormulario() {
    let erros = [];

    const nome = document.getElementById("nomeCompleto").value.trim();
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value.trim();
    const interesse = document.getElementById("interesse").value;

    if (nome.length < 5) {
        erros.push("Nome inválido. Deve conter pelo menos 5 caracteres.");
    }

    if (!checarCPF(cpf)) {
        erros.push("CPF inválido. Formato esperado: 000.000.000-00");
    }

    if (!checarEmail(email)) {
        erros.push("E-mail inválido. Deve conter '@' e terminar com .com ou .br");
    }

    if (habilidades.length < 3) {
        erros.push("Adicione pelo menos 3 habilidades.");
    }

    if (interesse === "") {
        erros.push("Selecione um tipo de interesse.");
    }

    exibirFeedback(erros);
}