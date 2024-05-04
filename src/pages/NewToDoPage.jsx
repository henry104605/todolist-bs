import { Button, Form, Container } from "react-bootstrap";
import React, { useState } from "react";

export default function NewToDoPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
    progress: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Hier kannst du die Daten verarbeiten, z.B. an einen API-Endpunkt senden
    console.log("Formular wurde abgesendet:", formData);
    // Optional: Setze die Formulardaten zurück
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
          ADD
        </Button>
      </Form>
    </Container>
  );
}
