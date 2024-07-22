import { Button, Form, InputGroup } from "react-bootstrap"
import { useForm } from "react-hook-form"
import signController from "../../controllers/signinController"
import { ToastError, handleToastError } from "../toasts/ToastError"
import { useNavigate } from "react-router-dom"

const SigninForm = () => {
    const navigate = useNavigate()
    const signupForm = useForm()

    const handleSubmit = (ev) => {
        ev.preventDefault()
        signController.signin(signupForm.getValues()).then(response => {
            if (response.success === false) {
                handleToastError(response.message)
                return
            }

            window.localStorage.setItem('token', response.info.token)
            navigate('/home')
        })
    }

    return (
        <>
            <ToastError></ToastError>
            <Form className='my-5 mx-1' onSubmit={handleSubmit}>

                <InputGroup className='mb-3'>
                    <Form.Control type='email' placeholder='Email' {...signupForm.register('email')}></Form.Control>
                </InputGroup>

                <InputGroup className='mb-3'>
                    <Form.Control type='password' placeholder='Senha' {...signupForm.register('password')}></Form.Control>
                </InputGroup>

                <Button variant='primary' type='submit' style={{minWidth: '100%'}} className='mb-3'> Signin </Button>

                <div className='d-flex justify-content-end'>
                    <a href='#' onClick={() => navigate('/signup')}>Registre-se</a>
                </div>        
            </Form>
        </>
    )

}

export default SigninForm