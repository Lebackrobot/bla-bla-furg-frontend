import { useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Message from "../Message/Message";
import { useForm } from "react-hook-form";

const Chat = ({ chat}) => {
    const messageForm = useForm()
    const [messages, setMessages] = useState([])

    const handleMessage = () => {
        const newMessage = messageForm.getValues('message')
        if (newMessage) {
            setMessages([...messages, { text: newMessage, sender: 'me', time: new Date().toLocaleTimeString() }])
            messageForm.reset()
            messageForm.setValue('message', '')
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            handleMessage()
        }
    }

    return (
        <Card style={{ boxShadow: '0 0 2px rgba(0, 0, 0, 1)' }}>

            { chat &&
                <CardHeader className='p-3' style={{ backgroundColor: '#212529', borderRadius: '5px', color: 'white'}}>
                    <h3> 
                        <img src='./images/bla-bla-icon.png' width={35}></img> &nbsp;&nbsp;
                        {chat.title}
                    </h3>
                </CardHeader>
            }
            
            <CardBody>
                <div style={{ position: "relative", height: "500px" }}>
                    { !chat && 
                        <Container fluid className="h-100 d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                            <Row>
                                <Col>
                                    <div className="text-center">
                                        <img src='./images/students.png' width='300'></img>
                                        <h2> 💬 Bora bater um papo?</h2>
                                        <span className='text-muted'>Conecte-se a um Grupo ao lado</span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    }
                    
                    {chat && 
                        <Container>
                            <Container>
                                {messages.map((msg, index) => (
                                    <Message key={index} message={msg.text} sender={msg.sender} time={msg.time}></Message>
                                ))}
                            </Container>
                        </Container>
                    }
                </div>
            </CardBody>

            { chat && <CardFooter>
                <InputGroup className="mb-3">
                    <Form.Control {...messageForm.register('message')}
                        placeholder=""
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onKeyDown={handleKeyPress}
                    />
                    <Button variant="primary" id="button-addon2" onClick={handleMessage}>
                        <img src='images/bla-bla-send.png' width='25'></img>
                    </Button>
                </InputGroup>
            </CardFooter>
            }
        </Card>
    )
}

export default Chat