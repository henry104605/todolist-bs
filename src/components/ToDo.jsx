import { Button, Card, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ToDo(props) {
  // navigiere zur /edit seite und uebergebe durch state die props mit
  // damit man die infomratioen auch auf der edit seite hat
  const navigationToEdit = useNavigate();
  const handleClick = () => {
    navigationToEdit("/edit", {
      state: {
        pId: props.id,
        pTitle: props.title,
        pDescription: props.description,
        pDeadline: props.deadline,
        pProgress: props.progress,
      },
    });
  };

  return (
    <Card className="text-center">
      <Card.Body className="pt-4">
        <Card.Header>DEADLINE: {props.deadline}</Card.Header>
        <Card.Title className="mt-3">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
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

        <Button onClick={handleClick} className="me-2" variant="primary">
          Edit
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        <ProgressBar now={props.progress} label={`${props.progress}%`} />
      </Card.Footer>
    </Card>
  );
}
