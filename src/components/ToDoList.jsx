import ToDo from "./ToDo";
import { ListGroup, Container } from "react-bootstrap";

export default function ToDoList() {
  const items = [
    <ToDo
      topic="Thema1"
      deadline="18/06/2024"
      info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      progress={20}
    />,
    <ToDo
      topic="Thema2"
      deadline="20/06/2024"
      info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      progress={0}
    />,
    <ToDo
      topic="Thema3"
      deadline="22/08/2024"
      info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      progress={60}
    />,
    <ToDo
      topic="Thema4"
      deadline="22/08/2024"
      info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      progress={80}
    />,
  ];

  return (
    <Container>
      <ListGroup className="mt-5">
        {items.map((item, index) => (
          <ListGroup.Item key={index} className="mb-3 border-0">
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
