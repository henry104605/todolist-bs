import ToDo from "./ToDo";
import { ListGroup, Container } from "react-bootstrap";

export default function ToDoList() {
  const items = [
    <ToDo
      topic="Thema1"
      deadline="18/02/2024"
      info="informationen raussuchen"
      progress={40}
    />,
    <ToDo
      topic="Thema2"
      deadline="20/06/2024"
      info="informationen loeschen"
      progress={60}
    />,
    <ToDo
      topic="Thema4"
      deadline="22/08/2024"
      info="testen sfjsdjkjsadfjslkfjlkd asdjklfjsadfjksa jakdsfl;ksa"
      progress={60}
    />,
  ];

  return (
    <Container>
      <ListGroup>
        {items.map((item, index) => (
          <ListGroup.Item key={index} className="mb-3 border-0">
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
