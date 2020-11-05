import React, {useState, useEffect} from 'react'
import { Container, Card, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { PATHS } from '../../App'
import { useHistory } from 'react-router-dom'
import LogOut from '../Login/LogOut'

export const cardStyle = {
    cursor: 'pointer',
    height: '16rem',
    width: '20rem',
    overflow: 'hidden',
    textOverflow: 'ellipse',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,.15), 0 1px 3px 1px rgba(0,0,0,.15)'
}

const Blogs = () => {
    const history = useHistory()
    const [blogsList, setBlogsList] = useState([])
    const [userList, setUserList] = useState([])
    const [filterValue, setFilterValue] = useState([])
    useEffect (() => {
        const fetchData = async() => {
            await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res?.json())
                .then((result) =>
                    {setBlogsList(result)},
                    (error) => {console.log({error})})
            await fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res?.json())
                .then((result) =>
                    {setUserList(result)},
                    (error) => {console.log({error})})
            return true
        }
        fetchData()
    }, [])
    return(
        <Container>
            <LogOut />
            <div style={{marginTop: '20px'}}>
                <label htmlFor="basic-url">Search</label>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search by author name and blog title"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                        onChange={({target: {value}}) => setFilterValue(value)}
                    />
                </InputGroup>
            </div>
            <Row>
                {blogsList?.filter(({title, userId}) => (!filterValue || title.includes(filterValue ) || userList?.find(({name}) => (!filterValue || name.includes(filterValue)))?.id === userId))
                    .map((item, i) =>
                    <Col key={i} onClick={() => history.push({pathname:`${PATHS.BLOGS}/${item.id}`, state: { blog: item }})}>
                        <Card style={cardStyle}>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.body}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)}
                {blogsList?.length === 0 && <div>No Data</div>}
            </Row>
        </Container>
    )
}
export default Blogs