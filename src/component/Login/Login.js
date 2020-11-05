import React from 'react'
import {Col, Container, Row, Card} from 'react-bootstrap'
import LoginForm from './LoginForm'
import './Login.css'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory()
 return (
     <div className="fixed-background">
         <Container>
             <Row className="card-center ">
                 <Col md={7}>
                     <div className="card imageaside">
                         <div className="card-horizontal ">
                             <Card.Body>
                                 <LoginForm history={history} />
                             </Card.Body>
                         </div>
                     </div>
                 </Col>
             </Row>
         </Container>
     </div>
 )
}
export default Login