import { Button, Card, ProgressBar } from "react-bootstrap";

export default function ToDo(props) {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Header>DEADLINE: {props.deadline}</Card.Header>
        <Card.Title>{props.topic}</Card.Title>
        <Card.Text>{props.info}</Card.Text>
        <Button variant="primary">Done</Button>
        <Button variant="primary">Delete</Button>
        <Button variant="primary">Edit</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        <ProgressBar now={props.progress} label={`${props.progress}%`} />
      </Card.Footer>
    </Card>
  );
}
