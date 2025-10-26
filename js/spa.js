document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const links = document.querySelectorAll("nav a");
  async function navigate() {
    const hash = window.location.hash.replace("#", "") || "home";
    const filePath = `templates/${hash}.html`;
    try {
      const response = await fetch(filePath);
      if (!response.ok) throw new Error("Página não encontrada");
      const html = await response.text();
      app.innerHTML = html;
      links.forEach(link => link.classList.remove("active"));
      const activeLink = document.querySelector(`a[href="#${hash}"]`);
      if (activeLink) activeLink.classList.add("active");
      if (hash === "cadastro" && typeof applyMasks === "function") {
        applyMasks();
      }
    } catch (err) {
      app.innerHTML = `<div class="alert error">Erro ao carregar conteúdo: ${err.message}</div>`;
    }
  }
  window.addEventListener("hashchange", navigate);
  navigate();
});