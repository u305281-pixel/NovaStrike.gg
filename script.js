
let players = JSON.parse(localStorage.getItem("players")) || [];
let leagues = JSON.parse(localStorage.getItem("leagues")) || [];

function saveData() {
    localStorage.setItem("players", JSON.stringify(players));
    localStorage.setItem("leagues", JSON.stringify(leagues));
}

function fakeLogin() {
    alert("Demo Login Başarılı!");
}

function toggleDarkMode() {
    document.body.classList.toggle("light");
}

function addPlayer() {
    const name = document.getElementById("playerName").value;
    const score = parseInt(document.getElementById("playerScore").value);
    if(!name || !score) return alert("Bilgileri doldur!");
    players.push({name, score});
    players.sort((a,b)=>b.score-a.score);
    saveData();
    renderPlayers();
    renderLeaderboard();
}

function renderPlayers() {
    const list = document.getElementById("playerList");
    list.innerHTML = "";
    players.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p.name + " - " + p.score;
        list.appendChild(li);
    });
}

function renderLeaderboard() {
    const board = document.getElementById("leaderboard");
    board.innerHTML = "";
    players.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p.name + " (" + p.score + ")";
        board.appendChild(li);
    });
}

function addLeague() {
    const name = document.getElementById("leagueName").value;
    if(!name) return alert("Lig adı gir!");
    leagues.push(name);
    saveData();
    renderLeagues();
}

function renderLeagues() {
    const list = document.getElementById("leagueList");
    list.innerHTML = "";
    leagues.forEach(l => {
        const li = document.createElement("li");
        li.textContent = l + " - Active";
        list.appendChild(li);
    });
}

function generateChart() {
    const canvas = document.getElementById("chart");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,400,200);
    ctx.beginPath();
    ctx.moveTo(0, 200 - Math.random()*200);
    for(let i=50;i<=400;i+=50){
        ctx.lineTo(i, 200 - Math.random()*200);
    }
    ctx.strokeStyle = "#e10600";
    ctx.stroke();
}

renderPlayers();
renderLeagues();
renderLeaderboard();
