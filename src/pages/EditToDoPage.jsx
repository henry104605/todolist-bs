import { Button, Form, Container } from "react-bootstrap";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function EditToDoPage() {
  const location = useLocation(); // Props durch state mithilfe von location uebermittelt

  const { pId, pTitle, pDescription, pDeadline, pProgress } = location.state; // state daten auslesen

  // infos ins formula einlesen
  const [formData, setFormData] = useState({
    title: pTitle,
    description: pDescription,
    deadline: pDeadline,
    progress: pProgress,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedTodo = {
      id: pId,
      title: formData.title,
      description: formData.description,
      deadline: formData.deadline,
      progress: formData.progress,
    };

    console.log(updatedTodo);
    // updatedTodo an Server Endpunkt senden, damit er die Todos aktualisiert
    fetch("http://localhost:5000/editTodo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
      })
      .catch((error) => {
        console.error("Fehler beim Bearbeiten des Todos:", error);
      });

    // Formular leeren
    setFormData({
      title: "",
      description: "",
      deadline: "",
      progress: 0,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container>
      <Form className="mt-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="deadline">
          <Form.Label>Deadline</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter Deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="progress">
          <Form.Label>Progress</Form.Label>
          <Form.Range
            name="progress"
            value={formData.progress}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          EDIT
        </Button>
      </Form>
    </Container>
  );
}
