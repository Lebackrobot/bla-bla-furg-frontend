import { Button, Form, InputGroup } from "react-bootstrap"
import { useForm } from "react-hook-form"
import signController from "../../controllers/signinController"

const SigninForm = () => {
    const signupForm = useForm()

    const handleSubmit = (ev) => {
        ev.preventDefault()
        console.log(signupForm.getValues())

        signController.signin(signupForm.getValues()).then(response => {
            if (response.success === false) {
                //...
                return
            }
        })
    }

    return (
        <Form className='my-5 mx-1' onSubmit={handleSubmit}>
            <InputGroup className='mb-3'>
                <Form.Control type='email' placeholder='Email' {...signupForm.register('email')}></Form.Control>
            </InputGroup>

            <InputGroup className='mb-3'>
                <Form.Control type='password' placeholder='Password' {...signupForm.register('password')}></Form.Control>
            </InputGroup>

            <Button variant='primary' type='submit' style={{minWidth: '100%'}} className='mb-3'> Signin </Button>

            <div className='d-flex justify-content-end'>
                <a href='#'>Registre-se</a>
            </div>        
        </Form>
    )

}

export default SigninForm