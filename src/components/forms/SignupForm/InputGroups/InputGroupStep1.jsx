import { useEffect, useState } from "react"
import { Button, Col, Container, Form, FormText, InputGroup, Row } from "react-bootstrap"
import signController from "../../../../controllers/signinController"
import { ToastError, handleToastError } from "../../../toasts/ToastError"
import userController from "../../../../controllers/userController"

const InputGroupStep1 = ({ next, previus, signupForm }) => {
    const [avatar, setAvatar] = useState()

    const handleMakeAvatar = () => {
        signController.makeAvatar().then(response => {
            if (response.success === true ) {
                const blob = new Blob([response.info.avatar], { type: 'image/svg+xml' })
                setAvatar(URL.createObjectURL(blob))
                signupForm.setValue('avatar', response.info.seed)
            }

        })
    }

    const handleNext = () => {
        userController.getByNickname(signupForm.getValues('nickname')).then(response => {
            if (response.success === true && response.info.user) {
                handleToastError('Esse nickname já está sendo usado.')
                return
            }
            
            next()
        })

        
    }

    useEffect(() => {
        handleMakeAvatar()
    }, [])


    return (
        <>
            <ToastError></ToastError>
            <Container className='my-1'>
                <center>
                    { avatar && <img src={avatar} width='200'></img> }
                </center>
                <InputGroup>
                    <Button variant='primary' onClick={handleMakeAvatar} style={{minWidth: '100%'}}>
                        Gerar outro avatar
                    </Button>
                </InputGroup>
                <FormText className='mt-1'>ℹ️ Escolha um avatar.</FormText>

                <InputGroup className='mt-4'>
                    <InputGroup.Text>Nick</InputGroup.Text>
                    <Form.Control placeholder='Coloque seu apelido do app' {...signupForm.register('nickname')}></Form.Control>
                </InputGroup>
                <FormText className='mt-1'>ℹ️ Capriche no seu apelido no app.</FormText>


                <Row className='mt-3'>
                    <Col className='d-flex justify-content-end'>
                            <Button variant='secondary' onClick={previus} className='mx-2'>Voltar</Button>
                            <Button onClick={handleNext}>Próximo</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InputGroupStep1