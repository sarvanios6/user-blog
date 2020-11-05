import React, {useEffect} from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import { PATHS } from '../../App'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
const BlogsDetails = ({location: {state: {blog}}}) => {
    const history = useHistory()
    useEffect(() => {
        !blog && history.push(PATHS.BLOGS)
    })
    return(
        <Container>
            <Link to={PATHS.BLOGS}>Go Back</Link>
            {blog && <Jumbotron style={{marginTop: '20px'}}>
                <h1>{blog.title}</h1>
                <p>{blog.body}</p>
            </Jumbotron>}
        </Container>
    )
}
export default BlogsDetails