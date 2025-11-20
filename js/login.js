const btnConfirmarUsuario = document.getElementById("btnconfirmar-usuario");
const etapaUsuario = document.getElementById("etapa-usuario");
const etapaSenha = document.getElementById("etapa-senha");
const inputUsuario = document.getElementById("usuariologin");

// Validar Usuário
btnConfirmarUsuario.addEventListener("click", function(e) {
    e.preventDefault();

    const usuario = inputUsuario.value.trim();

    if (usuario === "") {
        alert("Nome do usuário não detectado");
        return;
    }

    // Esconder etapa 1
    etapaUsuario.style.display = "none";
    btnConfirmarUsuario.style.display = "none";
    document.querySelector('.register').style.display = 'none';

    // Mostrar campo de senha
    etapaSenha.style.display = "block";
    etapaSenha.classList.add("show");
});

