import { Button, Form, InputGroup } from "react-bootstrap"

const SigninForm = () => {
    const handleSubmit = (ev) => {
        ev.preventDefault()
    }


    return (
        <Form className='my-5 mx-1' onSubmit={handleSubmit}>
            <InputGroup className='mb-3'>
                <Form.Control type='email' placeholder='Email'></Form.Control>
            </InputGroup>

            <InputGroup className='mb-3'>
                <Form.Control type='password' placeholder='Password'></Form.Control>
            </InputGroup>

            <Button variant='primary' type='submit' style={{minWidth: '100%'}}> Signin </Button>
        </Form>
    )

}

export default SigninForm

