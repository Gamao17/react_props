import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../App.css'

const Player = ({name='Mounir',team='Coelacanthe',notionality='comoros',age='28',picture=''}) =>{ 
    return(
      <div style={{padding : '10px'}}>
    <Card className='playerCard' style={{ width: '18rem', border : " 1px solid grey", boxShadow: "10px 5px 20px rgba(0, 0, 0, 0.2)"}}>
    <Card.Img variant="top" src={picture} />
    <Card.Body style={{background : "#F8F8FF"}}>
      <Card.Title className='x'>{name}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroup.Item style={{background : "rgb(29, 26, 26)", color:'bisque', }}>Team : {team}</ListGroup.Item>
      <ListGroup.Item style={{background : "rgb(29, 26, 26)", color:'bisque', }}>Nationality : {notionality}</ListGroup.Item>
      <ListGroup.Item style={{background : "rgb(29, 26, 26)", color:'bisque', }}>AGE : {age}</ListGroup.Item>
    </ListGroup>
  </Card>
  </div>
)};

export default Player;