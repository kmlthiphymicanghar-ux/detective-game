let trust = 50;
let lies = Math.random() > 0.5;

function ask(type) {
  if (type === "pressure") {
    trust -= 20;
    npc.innerText = lies
      ? "โอเค! ฉันโกหก!"
      : "ฉันบอกแล้วว่าฉันไม่รู้!";
  } else {
    trust += 10;
    npc.innerText = lies
      ? "ฉันขอเวลาคิด..."
      : "ฉันจะบอกความจริง";
  }

  document.getElementById("status").innerText =
    "ความน่าเชื่อถือ: " + trust;

  checkEnding();
}

function collect() {
  let ev = JSON.parse(localStorage.getItem("evidence"));
  ev.push("มีดเปื้อนเลือด");
  localStorage.setItem("evidence", JSON.stringify(ev));
  alert("📌 เก็บหลักฐานแล้ว");
}

function checkEnding() {
  if (trust <= 0) {
    localStorage.setItem("ending", "bad");
    window.location.href = "ending.html";
  }
  if (trust >= 80) {
    localStorage.setItem("ending", lies ? "secret" : "good");
    window.location.href = "ending.html";
  }
}
