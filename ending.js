const end = localStorage.getItem("ending");

if (end === "good") {
  endEl("🏆 GOOD ENDING\nจับคนร้ายได้");
} else if (end === "secret") {
  endEl("🕶️ SECRET ENDING\nคุณรู้ความจริงที่ซ่อนอยู่");
} else {
  endEl("💀 BAD ENDING\nคนร้ายหลุดรอด");
}

function endEl(text) {
  document.getElementById("end").innerText = text;
}

function restart() {
  window.location.href = "cases.html";
}
