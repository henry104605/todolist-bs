import express from "express";
import bodyParser from "body-parser";
import crypto from "crypto";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware für das Parsen von JSON-Anfragen
app.use(bodyParser.json());
app.use(cors()); // Aktiviere CORS für alle Anfragen

// Dummy-Daten für ToDos (zum Testen)
let todos = [
  {
    id: "1",
    topic: "ToDo 1",
    deadline: "2024-05-15",
    info: "Beschreibung des Todos 1",
    progress: 20,
  },
  {
    id: "2",
    topic: "ToDo 2",
    deadline: "2024-05-16",
    info: "Beschreibung des Todos 2",
    progress: 50,
  },
];

app.post("/updateTodos", (req, res) => {
  const updatedTodos = req.body;
  todos = updatedTodos; // Die aktualisierte Liste der Todos im Server aktualisieren
  res.sendStatus(200); // Erfolgsstatus (OK) als Antwort senden
});

// Route zum Abrufen aller ToDos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Route zum Hinzufügen eines neuen ToDos
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  newTodo.id = crypto.randomUUID(); // Generiere eine eindeutige ID für das neue ToDo
  todos.push(newTodo);
  res.status(201);
});

// Starte den Server
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
