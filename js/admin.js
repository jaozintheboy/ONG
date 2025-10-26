// js/admin.js
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const usuario = document.getElementById("usuario");
  const senha = document.getElementById("senha");
  const msg = document.getElementById("loginMsg");
  const tabela = document.querySelector("#tabelaCadastros tbody");
  const cadastrosSection = document.getElementById("cadastros-section");

  // Simula um usuário admin
  const ADMIN_USER = "admin";
  const ADMIN_PASS = "1234";

  // Simulação de leitura de cadastros armazenados localmente
  const cadastroLocal = localStorage.getItem("ultimoCadastro");
  const cadastros = cadastroLocal ? [JSON.parse(cadastroLocal)] : [];

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (usuario.value === ADMIN_USER && senha.value === ADMIN_PASS) {
      msg.textContent = "✅ Login realizado com sucesso!";
      msg.style.color = "green";

      document.getElementById("login-section").style.display = "none";
      cadastrosSection.style.display = "block";

      tabela.innerHTML = "";

      if (cadastros.length === 0) {
        tabela.innerHTML = "<tr><td colspan='3'>Nenhum cadastro encontrado.</td></tr>";
      } else {
        cadastros.forEach(c => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${c.nome}</td>
            <td>${c.email}</td>
            <td>${c.interesse}</td>
          `;
          tabela.appendChild(tr);
        });
      }
    } else {
      msg.textContent = "❌ Usuário ou senha incorretos!";
      msg.style.color = "red";
    }
  });
});
