function show(id){
document.querySelectorAll("section").forEach(s=>s.style.display="none");
document.getElementById(id).style.display="block";
}

function getData(key){
return JSON.parse(localStorage.getItem(key)) || [];
}

function saveData(key,data){
localStorage.setItem(key,JSON.stringify(data));
}

// Players
function addPlayer(){
let name=document.getElementById("playerName").value;
let role=document.getElementById("playerRole").value;

let players=getData("players");
players.push({name,role});
saveData("players",players);
loadPlayers();
}

function loadPlayers(){
let players=getData("players");
let div=document.getElementById("playerList");
div.innerHTML="";
players.forEach(p=>{
let box=document.createElement("div");
box.className="card";
box.innerHTML=`<h3>${p.name}</h3><p>${p.role}</p>`;
div.appendChild(box);
});
}

// Tournament
function addTournament(){
let name=document.getElementById("tourName").value;
let tours=getData("tournaments");
tours.push({name});
saveData("tournaments",tours);
loadTournaments();
}

function loadTournaments(){
let tours=getData("tournaments");
let div=document.getElementById("tourList");
div.innerHTML="";
tours.forEach(t=>{
let box=document.createElement("div");
box.className="card";
box.innerHTML=`<h3>${t.name}</h3>`;
div.appendChild(box);
});
}

// Score
function addMatch(){
let t1=document.getElementById("team1").value;
let t2=document.getElementById("team2").value;
let s1=document.getElementById("score1").value;
let s2=document.getElementById("score2").value;

let matches=getData("matches");
matches.push({t1,t2,s1,s2});
saveData("matches",matches);
loadScores();
}

function loadScores(){
let matches=getData("matches");
let div=document.getElementById("scoreList");
div.innerHTML="";
matches.forEach(m=>{
let box=document.createElement("div");
box.className="card";
box.innerHTML=`<h3>${m.t1} vs ${m.t2}</h3><p>${m.s1} - ${m.s2}</p>`;
div.appendChild(box);
});
}

// Admin
function login(){
let pass=document.getElementById("adminPass").value;
if(pass==="1234"){
document.getElementById("adminPanel").style.display="block";
alert("Admin Giriş Başarılı");
}
}

loadPlayers();
loadTournaments();
loadScores();
