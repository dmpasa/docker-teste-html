function updateTimestamp() {
  const now = new Date();
  const formatted = now.toLocaleString("pt-BR");
  document.getElementById("current-timestamp").textContent = formatted;
}

fetch("https://api.ipify.org?format=json")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("public-ip").textContent = data.ip;
    updateTimestamp();
  })
  .catch(() => {
    document.getElementById("public-ip").textContent = "Não disponível";
    updateTimestamp();
  });
