import { useEffect, useState } from "react"
import { Badge, Button, Card, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import chatController from "../../controllers/chatController"

const ChannelList = () => {
    const [chats, setChats] = useState()
    const [userId, setUserId] = useState(window.localStorage.getItem('userId'))

    useEffect(() => {
        chatController.get().then(response => {
            if (response.success === false) {
                return
            }

            response.info.chats.forEach(chat => {
                chat.users.forEach(user => {
                    if (user.users_chats.role == 'HOST' && user.id == userId) {
                        chat.host = true
                    }
                })
            })

            setChats(response.info.chats)


        })
    })

    return (
        <>
            <Card style={{ boxShadow: '0 0 2px rgba(0, 0, 0, 1)' }}>
                <Container className='mt-3'>
                    <ListGroup>
                        {chats && chats.length != 0 && chats.map((chat, index) => (
                            <ListGroupItem key={index} className='d-flex justify-content-between align-items-start'>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">
                                        {chat.type === 'STUDY' && <strong> 📚 {chat.title} </strong>}
                                        {chat.type === 'NOTIFY' && <strong> 🔔 {chat.title} </strong>}
                                        {chat.type === 'FUN' && <strong> 👽 {chat.title} </strong>}
                                    </div>
                                    <span className='text-muted' style={{ fontSize: '14px' }}> {chat.description} </span>
                                </div>

                                {chat.host === true && 
                                    <Badge bg="primary" pill>
                                        HOST
                                    </Badge>
                                }
                               
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