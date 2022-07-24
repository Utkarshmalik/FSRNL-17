import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './user.css';


function User(props){
    const {data}=props;

    return (
        <Card className="userCard">
      <Card.Img variant="top" src={data.picture} />
      <Card.Body>
        <Card.Title> {  `${data.title} ${data.firstName} ${data.lastName}`   } </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"> See Details </Button>
      </Card.Body>
    </Card>
    )
}

export default User;