function save() {
  const date = document.getElementById("date").value;
  const tasks = document.getElementById("tasks").value;
  const food = document.getElementById("food").value;
  const water = document.getElementById("water").value;
  const notes = document.getElementById("notes").value;

  const data = { tasks, food, water, notes };

  localStorage.setItem(date, JSON.stringify(data));
  loadHistory();
}

function loadHistory() {
  const history = document.getElementById("history");
  history.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const date = localStorage.key(i);
    const data = JSON.parse(localStorage.getItem(date));

    const div = document.createElement("div");
    div.className = "day";
    div.innerHTML = `
      <strong>${date}</strong><br>
      📝 ${data.tasks}<br>
      🍽 ${data.food}<br>
      💧 ${data.water}<br>
      📌 ${data.notes}
    `;
    history.appendChild(div);
  }
}

loadHistory();
