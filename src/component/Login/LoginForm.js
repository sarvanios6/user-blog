import React, {Component} from 'react'
import {TextInput, ValidationForm} from 'react-bootstrap4-form-validation'
import {Button, Form, FormGroup, Spinner} from 'react-bootstrap'
const patterEmail = '[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$'
class LoginForm extends Component {
    constructor(props){
        super(props)
        this.formRef = React.createRef()
        this.state = {
            email: '',
            password: '',
            fetching: false,
            error: null,
            result: []
        }
    }
    resetForm = () => {
        let formRef = this.formRef.current;
        formRef.resetValidationState(false)
    }
    handleChange = ({target:{value, name}}) => {
        this.setState({
            [name]: value,
            password: name === 'email' && null,
        })
        if (value.match(patterEmail)) {
            this.setState({
                fetching: true
            })
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then((result) => {

                        const userData = result.find(({email}) => email.toLowerCase() === value.toLowerCase())
                        userData && this.resetForm()
                        this.setState({
                            fetching: false,
                            result,
                            password: userData ? userData.username : null
                        })
                    },
                    (error) => {
                        this.setState({
                            fetching: false,
                            password: null,
                            error
                        })
                    }
                )
        }
    }

    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        localStorage.setItem('formData', formData)
        this.props.history.push({pathname: '/home',
            state: { result: this.state.result }
        })
    }

    handleErrorSubmit = (e, formData, errorInputs) => {
        console.error(errorInputs)
    }

    render() {
        const {email, password, fetching} = this.state
        return (
            <ValidationForm ref={this.formRef} onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                <FormGroup>
                    <Form.Label>Email</Form.Label>
                    <TextInput name="email" id="email" required
                               value={email}
                               pattern={patterEmail}
                               validator={() => (password !== null)}
                               errorMessage={{
                                    required: "Email id is required",
                                    pattern: "Please enter a valid email",
                                    validator: "Entered email id not in the list"
                                }}
                               onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>

                </FormGroup>
                <FormGroup>
                    <Form.Label>Password</Form.Label>
                    <TextInput name="password" id="password" required
                               readOnly
                               value={password}
                               onChange={this.handleChange}
                    />
                </FormGroup>
                <Form.Row>
                    {fetching && <Spinner animation="border" variant="primary" />}
                    {!fetching && <Button type='submit' className="login-button">Login</Button>}
                </Form.Row>
            </ValidationForm>
        )
    }
}

export default LoginForm;
