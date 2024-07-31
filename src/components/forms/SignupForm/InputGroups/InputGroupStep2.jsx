import { Button, Container, Form, FormText, InputGroup, Row, Col } from "react-bootstrap"

const InputGroupStep2 = ({ next, previus, signupForm }) => {
    const handleNextStep = () => {
        next()
    }


    return (
        <Container className='my-5'>
            <InputGroup className='mt-4'>
                <InputGroup.Text>Email</InputGroup.Text>
                <Form.Control placeholder='' {...signupForm.register('email')}></Form.Control>
            </InputGroup>

            <InputGroup className='mt-4'>
                <InputGroup.Text>Senha</InputGroup.Text>
                <Form.Control type='password' placeholder='' {...signupForm.register('password')}></Form.Control>
            </InputGroup>

            <Row className='mt-3'>
                <Col className='d-flex justify-content-end'>
                    <Button variant='secondary' onClick={previus} className='mx-2'>Voltar</Button>
                    <Button onClick={handleNextStep}>Próximo</Button>
                </Col>
            </Row>
        </Container>
    )
}   

export default InputGroupStep2