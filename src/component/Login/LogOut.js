import React from 'react'
import {Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { PATHS } from '../../App'

const Login = () => {
    const history = useHistory()
    const handleLogOut = () => {
        localStorage.removeItem('formData')
        history.push(PATHS.LOGIN)
    }
    return (
        <div style={{float: 'right', marginRight: '20px'}}>
            {history.location.pathname !== PATHS.HOME && <Button onClick={() => history.push(PATHS.HOME)} variant="outline" >Home</Button>}
            <Button onClick={handleLogOut} variant="outline-danger" >LogOut</Button>
        </div>
    )
}
export default Login