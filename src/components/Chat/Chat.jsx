import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Message from "../Message/Message";
import { useForm } from "react-hook-form";
import messageController from "../../controllers/messageController";
import moment from "moment";
import signController from "../../controllers/signinController";

const Chat = ({ room, eventSource }) => {
    const messageForm = useForm()
    const [messages, setMessages] = useState([])

    useEffect(() => {
        eventSource.onmessage = (event) => {
            const { roomId } = JSON.parse(event.data)

            if (room && room.id == roomId) {
               loadRoom()
            }
        }

        eventSource.onopen = () => {
            console.log(`Connected to server SSE. Waiting for messages...`);
        }

        eventSource.onerror = (error) => {
            console.error(`SSE ERROR: ${error.message}`)
        }

        loadRoom()
        
    }, [room])

    const loadRoom = () => {
        const userId = parseInt(window.localStorage.getItem('userId'))

        if (room) {
            messageController.getChatMessages(room.id).then(response => {
                if (response.success === false) {
                    return
                }

                const messages = response.info.messages

                messages.forEach(message => {
                    if (message.userId === userId) {
                        message.sender = 'me'
                    }


                    signController.makeAvatarV2(message.user.avatar).then(response => {
                        const blob = new Blob([response], { type: 'image/svg+xml' })
                        message.blob = URL.createObjectURL(blob)
                    })
                })
                

                setTimeout(() => {
                    setMessages(messages)
                }, 500)

            })
       }
    }

    const handleMessage = () => {
        const message = messageForm.getValues('message')
        if (message) {
            setMessages([{ content: message, sender: 'me', createdAt: moment() }, ...messages])
            messageForm.reset()
            messageForm.setValue('message', '')

            messageController.create({
                roomId: room.id,
                content: message
            })

            setTimeout(() => { loadRoom() }, 500)
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

            { room &&
                <CardHeader className='p-3' style={{ backgroundColor: '#212529', borderRadius: '5px', color: 'white'}}>
                    <h3> 
                        <img src='./images/bla-bla-icon.png' width={35}></img> &nbsp;&nbsp;
                        {room.name}
                    </h3>
                </CardHeader>
            }
            
            <CardBody>
                <div style={{ position: "relative", height: "500px" }}>
                    {!room &&
                        <Container fluid className="h-100 d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                            <Row>
                                <Col>
                                    <div className="text-center">
                                        <img src='./images/students.png' width='300' alt="Students" />
                                        <h2> 💬 Bora bater um papo?</h2>
                                        <span className='text-muted'>Conecte-se a um Grupo ao lado</span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    }

                    {room &&
                        <Container style={{ height: '100%', maxHeight: 'calc(100% - 0px)', overflowY: 'auto' }}>
                            <Container style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                                {messages.map((msg, index) => (
                                    <Message key={index} message={msg} sender={msg.sender} time={msg.time}></Message>
                                ))}
                            </Container>
                        </Container>
                    }
                </div>
            </CardBody>

            {room && <CardFooter>
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