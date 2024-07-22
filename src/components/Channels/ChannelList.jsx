import { useEffect, useState } from "react"
import { Button, Card, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import chatController from "../../controllers/chatController"

const ChannelList = () => {
    const [chats, setChats] = useState()

    useEffect(() => {
        chatController.get().then(response => {
            if (response.success === false) {
                return
            }

            setChats(response.info.chats)

        })
    })

    return (
        <>
            <Card style={{ boxShadow: '0 0 2px rgba(0, 0, 0, 1)' }}>
                <Container className='mt-3'>
                    <ListGroup>
                        {chats && chats.length != 0 && chats.map((chat, index) => (
                            <ListGroupItem key={index}>
                                <Row>
                                    {chat.type === 'STUDY'  && <strong> 📚 {chat.title} </strong>}
                                    {chat.type === 'NOTIFY'    && <strong> 🔔 {chat.title} </strong>}
                                    {chat.type === 'FUN' && <strong> 👽 {chat.title} </strong>}
                                </Row>
                                <Row>
                                    <span className='text-muted' style={{ fontSize: '14px' }}> {chat.description} </span>
                                </Row>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Container>

                <Button variant='dark' className='mx-1 my-2'>
                    💬 Criar Canal
                </Button>
            </Card>
        </>
    )
}

export default ChannelList