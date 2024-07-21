import { useEffect, useState } from "react"
import { Button, Col, Container, Form, FormText, InputGroup, Row } from "react-bootstrap"
import signController from "../../../../controllers/signinController"
import Avatar from "../../../Avatar/Avatar"

const InputGroupStep1 = ({ next, previus, signupForm }) => {
    const [avatar, setAvatar] = useState()

    const handleMakeAvatar = () => {
        signController.makeAvatar().then(response => {
            setAvatar(response.avatar)
            signupForm.setValue('avatar', response.avatar)
        })
    }

    useEffect(() => {
        handleMakeAvatar()
    }, [])


    return (
        <Container className='my-5'>

            <Avatar avatar={avatar}></Avatar>
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
                        <Button onClick={next}>Próximo</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default InputGroupStep1