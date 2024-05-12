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
    // Lokal das Todo löschen
    setTodos((currentTodos) => {
      const updatedTodos = currentTodos.filter((toDo) => toDo.id !== id);

      // Aktualisierte Liste der Todos an den Server senden
      fetch("http://localhost:5000/updateTodos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodos), // Die aktualisierte Liste der Todos als JSON senden
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response not ok");
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });

      return updatedTodos; // Das aktualisierte Array zurückgeben
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
              topic={todo.topic}
              deadline={todo.deadline}
              info={todo.info}
              progress={todo.progress}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
