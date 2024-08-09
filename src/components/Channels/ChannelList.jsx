import { useEffect, useState } from "react"
import { Badge, Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import chatController from "../../controllers/chatController"
import { setSubscriptionChannelModal, SubscriptionChannelModal } from "../Modals/SubscriptionChannelModal"

import styles from './ChannelList.module.css'

const ChannelList = ({ setChat }) => {
    const [chats, setChats] = useState()
    
    const handleChat = (chat) => {
        const users = chat.members.map(member => member.id)
        const member = parseInt(window.localStorage.getItem('userId'))

        if (chat.host) {
            return setChat(chat)
        }

        if (users.includes(member)) {
            return setChat(chat)
        }

        setSubscriptionChannelModal(chat)
    }


    const handleChatVariant = (chatType) => {
        if (chatType == 'STUDY') return 'danger'
        if (chatType == 'NOTIFY') return 'warning'
        if (chatType == 'RANDOM') return 'success'
    }

    useEffect(() => {
        const userId = window.localStorage.getItem('userId')

        chatController.get().then(response => {
            if (response.success === false) {
                return
            }

            console.log(response.info.rooms)

            response.info.rooms.forEach(chat => {
                console.log(chat)

                chat.members.forEach(member => {
                    if (member.role == 'HOST' && member.id == userId) {
                        chat.host = true
                    }

                    else if (member.role == 'MEMBER' && member.id == userId) {
                        chat.member = true
                    }
                })
            })

            setChats(response.info.rooms)


        })
    }, [])

    return (
        <>
            <SubscriptionChannelModal></SubscriptionChannelModal>

            <Card style={{ boxShadow: '0 0 2px rgba(0, 0, 0, 1)', minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Container className='mt-3'>
                    <ListGroup>
                        {chats && chats.length != 0 && chats.map((chat, index) => (
                            <ListGroupItem key={index} className={`mb-3 d-flex justify-content-between align-items-start mb-1 p-3 ${styles.channelListItem}`} onClick={() => handleChat(chat)} variant={handleChatVariant(chat.type)} style={{cursor: 'pointer'}}>
                                <div className="ms-2 me-auto">
                                    <div>
                                        {chat.type === 'STUDY' && <strong>  📚  {chat.name} </strong>}
                                        {chat.type === 'NOTIFY' && <strong> 🔔 {chat.name} </strong>}
                                        {chat.type === 'RANDOM' && <strong> 👽 {chat.name} </strong>}
                                    </div>
                                    <span className='text-muted' style={{ fontSize: '14px' }}> {chat.description} </span>
                                </div>

                                {chat.host === true && 
                                    <Badge bg={handleChatVariant(chat.type)} pill>
                                        HOST
                                    </Badge>
                                }
                                {chat.member === true && 
                                    <Badge bg={handleChatVariant(chat.type)} pill>
                                        MEMBER
                                    </Badge>
                                }
                                
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Container>

                <Button variant='dark' className='mx-1 my-2 px-2'>
                    💬 Criar Canal
                </Button>
            </Card>
        </>
    )
}

export default ChannelList