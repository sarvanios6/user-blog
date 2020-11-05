import React, {useState, useEffect} from 'react'
import {Container, Card, Row, Col, FormControl, InputGroup} from 'react-bootstrap'
import { cardStyle } from '../Blogs/Blogs'
import LogOut from '../Login/LogOut'

const Users = () => {
    const [userList, setUserList] = useState([])
    const [filterValue, setFilterValue] = useState([])
    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res?.json())
            .then((result) =>
                {setUserList(result)},
                (error) => {console.log({error})})
    }, [])
    return(
        <Container>
            <LogOut />
            <label htmlFor="basic-url">Search</label>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search by name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={({target: {value}}) => setFilterValue(value)}
                />
            </InputGroup>
            <Row >
                {userList?.filter(({name}) => (!filterValue || name.includes(filterValue))).map(({name, username, email, address: {city}, company : {name: companyName}, website}, i) =>
                    <Col key={i}>
                        <Card style={cardStyle}>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{username}</Card.Subtitle>
                                <Card.Text>{email}</Card.Text>
                                <Card.Text>{city}</Card.Text>
                                <Card.Text>{companyName}</Card.Text>
                                <Card.Link target="_blank" href={`http://www.${website}`} b>{website}</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
                {userList?.length === 0 && <div>No Data</div>}
            </Row>
        </Container>
    )
}
export default Users