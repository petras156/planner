body {
  margin: 0;
  font-family: -apple-system, sans-serif;
  background: linear-gradient(180deg, #1e1e2f, #2b2b45);
  color: white;
}

.container {
  max-width: 420px;
  margin: auto;
  padding: 20px;
}

h1 {
  font-weight: 600;
}

.card {
  background: rgba(255,255,255,0.05);
  padding: 15px;
  border-radius: 16px;
  margin-top: 15px;
  backdrop-filter: blur(10px);
}

input, textarea {
  width: 100%;
  margin-top: 10px;
  padding: 12px;
  border-radius: 12px;
  border: none;
  background: rgba(255,255,255,0.08);
  color: white;
}

button {
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 12px;
  background: linear-gradient(90deg, #7b6cff, #5f9cff);
  color: white;
}

.save {
  margin-top: 20px;
  padding: 14px;
}

.task {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.task input {
  margin-right: 10px;
}

.water-btn {
  font-size: 22px;
  margin: 5px;
  cursor: pointer;
  opacity: 0.3;
}

.water-btn.active {
  opacity: 1;
}

.day {
  background: rgba(255,255,255,0.05);
  padding: 10px;
  border-radius: 12px;
  margin-top: 10px;
}
