import { Button, Card, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ToDo(props) {
  return (
    <Card className="text-center">
      <Card.Body className="pt-4">
        <Card.Header>DEADLINE: {props.deadline}</Card.Header>
        <Card.Title className="mt-3">{props.topic}</Card.Title>
        <Card.Text>{props.info}</Card.Text>
        <Button
          onClick={() => props.delete(props.id)}
          className="me-2"
          variant="primary"
        >
          Done
        </Button>
        <Button
          onClick={() => props.delete(props.id)}
          className="me-2"
          variant="primary"
        >
          Delete
        </Button>
        <Link to="/new">
          <Button className="me-2" variant="primary">
            Edit
          </Button>
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted">
        <ProgressBar now={props.progress} label={`${props.progress}%`} />
      </Card.Footer>

    </Card>

  );  
}
