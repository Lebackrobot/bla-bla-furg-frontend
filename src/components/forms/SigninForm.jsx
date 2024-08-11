import { Button, Form, InputGroup } from "react-bootstrap"
import { useForm } from "react-hook-form"
import signController from "../../controllers/signinController"
import { ToastError, handleToastError } from "../toasts/ToastError"
import { useNavigate } from "react-router-dom"
import { Load, handleLoad } from "../Load/Load"

const SigninForm = () => {
    const navigate = useNavigate()
    const signupForm = useForm()

    const handleSubmit = (ev) => {
        ev.preventDefault()
        handleLoad(true)

        signController.signin(signupForm.getValues()).then(response => {
            try {
                if (response.success === false) {
                    handleToastError(response.message)
                    handleLoad(false)
                    return
                }
    
                window.localStorage.setItem('token', response.info.token)
                window.localStorage.setItem('userId', response.info.userId)
                window.localStorage.setItem('nickname', signupForm.getValues('nickname'))
    
                window.location.href = '/home'

            }

            finally {
                handleLoad(false)
            }
        })
    }

    return (
        <>
            <Load></Load>
            <ToastError></ToastError>
            <Form className='my-5 mx-1' onSubmit={handleSubmit}>

                <InputGroup className='mb-3'>
                    <Form.Control type='text' placeholder='Nickname' {...signupForm.register('nickname')}></Form.Control>
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