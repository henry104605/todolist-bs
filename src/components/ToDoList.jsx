import React, { useState, useEffect } from "react";
import ToDo from "./ToDo";
import { ListGroup, Container } from "react-bootstrap";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch-Anfrage an den Server, um die Todos abzurufen
    fetch("http://localhost:5000/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Fehler beim Laden der Todos:", error));
  }, []); // Leeres Array als Abhängigkeit, damit der Effekt nur einmal beim ersten Rendern ausgeführt wird

  function deleteToDo(id) {
    // Das zu löschende Todo an den Server senden
    fetch("http://localhost:5000/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }), // id des zu löschenden Todos als JSON senden
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        // aktualisierte Liste der Todos empfangen
        return response.json();
      })
      .then((updatedTodos) => {
        // Zustand der Anwendung mit den aktualisierten Todos aktualisieren
        setTodos(updatedTodos);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }

  return (
    <Container>
      <ListGroup className="mt-5">
        {todos.map((todo, index) => (
          <ListGroup.Item key={index} className="mb-3 border-0">
            <ToDo
              delete={deleteToDo}
              id={todo.id}
              title={todo.title}
              deadline={todo.deadline}
              description={todo.description}
              progress={todo.progress}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
