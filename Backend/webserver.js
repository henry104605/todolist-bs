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
    title: "ToDo 1",
    deadline: "2024-05-15",
    description: "Beschreibung des Todos 1",
    progress: 20,
  },
  {
    id: "2",
    title: "ToDo 2",
    deadline: "2024-05-16",
    description: "Beschreibung des Todos 2",
    progress: 50,
  },
];

// Endpunkt Todosliste
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Endpunkt delete ToDo
app.post("/updateTodos", (req, res) => {
  const updatedTodos = req.body;
  todos = updatedTodos; // Die aktualisierte Liste der Todos im Server aktualisieren
  res.sendStatus(200); // Erfolgsstatus (OK) als Antwort senden
});

// Endpunkt neues Todo hinzufuegen
app.post("/addTodo", (req, res) => {
  const newTodo = req.body;
  newTodo.id = crypto.randomUUID(); // Generiere eine eindeutige ID
  todos.push(newTodo);
  res.status(200);

  console.log("New Todo:", newTodo);
});

// Endpunkt zum Bearbeiten eines vorhandenen Todos
app.put("/editTodo", (req, res) => {
  const updatedTodo = req.body; // Das aktualisierte Todo aus dem Anfragekörper
  const todoId = updatedTodo.id;

  // Suche das Todo in der Liste und aktualisiere es, falls es gefunden wird
  const index = todos.findIndex((todo) => todo.id == todoId);
  if (index !== -1) {
    todos[index] = updatedTodo;
    res.sendStatus(200); // Erfolgsstatus (OK) als Antwort senden
  } else {
    res.status(404).send("Todo nicht gefunden"); // Fehlermeldung, falls das Todo nicht gefunden wurde
  }
});

// Starte den Server
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
