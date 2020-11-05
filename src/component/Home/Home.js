import React from 'react'
import {Link} from 'react-router-dom'
import LogOut from '../Login/LogOut'

const Home = () => (
    <div style={{marginTop: '3%', textAlign: 'center'}}>
        <LogOut />
        <Link style={{margin: '0 2% '}} to="/users">Users</Link>
        <Link to="/blogs">Blogs</Link>
    </div>
)
export default Home