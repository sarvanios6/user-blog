import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import login from './component/Login/Login'
import home from './component/Home/Home'
import blogs from './component/Blogs/Blogs'
import blogsDetails from './component/Blogs/BlogsDetails'
import users from './component/Users/Users'

export const PATHS = {
    DASHBOARD: '/',
    HOME: '/home',
    LOGIN: '/Login',
    USERS: '/users',
    BLOGS: '/blogs',
    BLOGS_ID: '/blogs/:id'
};
const App = () => (
    <Router>
        <Switch>
            <Route exact path={PATHS.DASHBOARD} component={login}/>
            <Route path={PATHS.LOGIN} component={login}/>
            <Route exact path={PATHS.HOME} component={home}/>
            <Route exact path={PATHS.USERS} component={users}/>
            <Route exact path={PATHS.BLOGS} component={blogs}/>
            <Route exact path={PATHS.BLOGS_ID} component={blogsDetails}/>
        </Switch>
    </Router>
)
export default App
