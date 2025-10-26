function applyMasks() {
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  if (cpf) cpf.addEventListener("input", () => {
    let v = cpf.value.replace(/\D/g, "").slice(0, 11);
    if (v.length > 9) v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
    else if (v.length > 6) v = v.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
    else if (v.length > 3) v = v.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    cpf.value = v;
  });
  if (telefone) telefone.addEventListener("input", () => {
    let v = telefone.value.replace(/\D/g, "").slice(0, 11);
    if (v.length > 6) v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    else if (v.length > 2) v = v.replace(/(\d{2})(\d{1,4})/, "($1) $2");
    telefone.value = v.trim();
  });
}