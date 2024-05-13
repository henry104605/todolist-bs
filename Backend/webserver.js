import express from "express";
import bodyParser from "body-parser";
import crypto from "crypto";
import cors from "cors";
import sqlite3 from "sqlite3";

const app = express();
const PORT = 5000;

// SQLite-Datenbankverbindung herstellen
const db = new sqlite3.Database("todos.db");

// Middleware für das Parsen von JSON-Anfragen
app.use(bodyParser.json());
app.use(cors()); // Aktiviere CORS für alle Anfragen

// Tabelle für Todos erstellen
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS todos (
      id TEXT PRIMARY KEY,
      title TEXT,
      deadline TEXT,
      description TEXT,
      progress INTEGER
    )
  `);
});

// Endpunkt Todosliste
app.get("/todos", (req, res) => {
  // datenbankabfrage um Todos abzurufen
  db.all("SELECT * FROM todos", (err, rows) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(rows);
    }
  });
});

// Endpunkt um ein todo aus der datenbank zu loeschen
app.post("/delete", (req, res) => {
  const idToDelete = req.body.id;

  // datenbankanfrange fuers loeschen des todos durch die id
  db.run(`DELETE FROM todos WHERE id = ?`, [idToDelete], (err) => {
    if (err) {
      console.error("Fehler beim Löschen des Todos:", err);
      res.sendStatus(500);
    } else {
      console.log("Todo gelöscht");

      // aktualisierte Liste der todos an client zurueck senden
      db.all("SELECT * FROM todos", (err, rows) => {
        if (err) {
          console.error("Fehler beim Abrufen der Todos:", err);
          res.sendStatus(500);
        } else {
          res.json(rows); // Die aktualisierte Liste der Todos als JSON zurücksenden
        }
      });
    }
  });
});

// Endpunkt neues Todo hinzufuegen
app.post("/addTodo", (req, res) => {
  const newTodo = req.body;
  newTodo.id = crypto.randomUUID(); // generiere eine eindeutige ID

  // datenbankanfrange um ein neues todo der tabelle hinzuzufuegen
  db.run(
    "INSERT INTO todos (id, title, deadline, description, progress) VALUES (?, ?, ?, ?, ?)",
    [
      newTodo.id,
      newTodo.title,
      newTodo.deadline,
      newTodo.description,
      newTodo.progress,
    ],
    (err) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        console.log("New Todo:", newTodo);
        res.status(200).send(newTodo);
      }
    }
  );
});

// Endpunkt zum Bearbeiten eines vorhandenen Todos
app.put("/editTodo", (req, res) => {
  const updatedTodo = req.body; // Das aktualisierte Todo aus dem Anfragekörper
  const todoId = updatedTodo.id;

  // datenbankabfrage um das Todo zu aktualisieren
  db.run(
    "UPDATE todos SET title = ?, deadline = ?, description = ?, progress = ? WHERE id = ?",
    [
      updatedTodo.title,
      updatedTodo.deadline,
      updatedTodo.description,
      updatedTodo.progress,
      todoId,
    ],
    (err) => {
      if (err) {
        console.error(err);
        res.status(404).send("Todo nicht gefunden");
      } else {
        res.sendStatus(200); // Erfolgsstatus OK
      }
    }
  );
});

// Starte den Server
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
