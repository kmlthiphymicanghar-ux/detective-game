function startGame() {
  const name = document.getElementById("username").value;
  if (!name) return alert("กรุณาใส่ชื่อ");

  localStorage.setItem("player", name);
  localStorage.setItem("score", 0);
  localStorage.setItem("evidence", JSON.stringify([]));
  localStorage.setItem("caseUnlocked", "1");

  window.location.href = "cases.html";
}
