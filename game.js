let score = 0;
let trust = 50; 
let inventory = [];
let player = localStorage.getItem("player");

document.getElementById("playerName").innerText = player;

function updateUI(){
  document.getElementById("score").innerText = score;
  document.getElementById("inventory").innerText = inventory.join(", ");
}

function npcSpeak(){
  if(trust > 70){
    return "ผมไม่ได้ทำอะไรผิด!";
  }
  else if(trust > 40){
    return "ผมก็แค่ผ่านไปแถวนั้น...";
  }
  else{
    return "โอเค... ผมโกหก...";
  }
}

document.getElementById("npcText").innerText = npcSpeak();

function askQuestion(type){

  if(type === 0){
    trust -= 10;
    score += 5;
  }
  else{
    trust += 5;
    score -= 2;
  }

  document.getElementById("npcText").innerText = npcSpeak();

  if(trust < 30){
    inventory.push("ภาพจากกล้องวงจรปิด");
  }

  updateUI();
  checkEnding();
}

function presentEvidence(){
  if(inventory.includes("ภาพจากกล้องวงจรปิด")){
    score += 20;
    trust = 0;
    alert("คุณจับโกหกสำเร็จ!");
  }else{
    alert("คุณยังไม่มีหลักฐาน");
  }
  updateUI();
}

function checkEnding(){
  if(score >= 40 && trust <= 20){
    localStorage.setItem("ending", "good");
    window.location.href = "ending.html";
  }
  else if(score < 0){
    localStorage.setItem("ending", "bad");
    window.location.href = "ending.html";
  }
  else if(score >= 60 && inventory.length >= 1){
    localStorage.setItem("ending", "secret");
    window.location.href = "ending.html";
  }
}

updateUI();
