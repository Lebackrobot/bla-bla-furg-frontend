import { useEffect, useState } from "react"
import { Badge, Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import chatController from "../../controllers/chatController"
import { setSubscriptionChannelModal, SubscriptionChannelModal } from "../Modals/SubscriptionChannelModal"
import { ChannelModal, setChannelModal } from "../Modals/ChannelModal"

import styles from './ChannelList.module.css'
import { Load, handleLoad } from "../Load/Load"

const ChannelList = ({ setRoom }) => {
    const [rooms, setRooms] = useState()

    const handleChat = (room) => {
        const members = room.members.map(member => member.userId)
        const user = parseInt(window.localStorage.getItem('userId'))

        if (room.host) {
            return setRoom(room)
        }

        if (members.includes(user)) {
            return setRoom(room)
        }

        setSubscriptionChannelModal(room)
    }


    const handleChatVariant = (roomType) => {
        if (roomType == 'STUDY') return 'danger'
        if (roomType == 'REMINDER') return 'warning'
        if (roomType == 'RANDOM') return 'success'
    }

    useEffect(() => {
        handleLoad(true)

        const userId = window.localStorage.getItem('userId')

        chatController.get().then(response => {
            try {
                if (response.success === false) {
                    return
                }
    
                response.info.rooms.forEach(room => {
                    room.members.forEach(member => {
                        if (member.role == 'HOST' && member.userId == userId) {
                            room.host = true
                        }
    
                        else if (member.role == 'MEMBER' && member.userId == userId) {
                            room.member = true
                        }
                    })
                })
    
                setRooms(response.info.rooms)
            }

            finally {
                handleLoad(false)
            }
        })
    }, [])

    return (
        <>
            <Load></Load>
            <ChannelModal></ChannelModal>
            <SubscriptionChannelModal></SubscriptionChannelModal>

            <Card style={{ boxShadow: '0 0 2px rgba(0, 0, 0, 1)', minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Container className='mt-3'>
                    <ListGroup>
                        {rooms && rooms.length != 0 && rooms.map((room, index) => (
                            <ListGroupItem 
                                key={index} 
                                className={`mb-3 d-flex justify-content-between align-items-start mb-1 p-3 ${styles.channelListItem}`} 
                                onClick={() => handleChat(room)} 
                                variant={handleChatVariant(room.type)} 
                                style={{cursor: 'pointer'}}>

                                <div className="ms-2 me-auto">
                                    <div>
                                        {room.type === 'STUDY' && <strong>  📚  {room.name} {room.visibility === 'PRIVATE' && <>(🔒)</>}</strong>}
                                        {room.type === 'REMINDER' && <strong> 🔔 {room.name} {room.visibility === 'PRIVATE' && <>(🔒)</>}</strong>}
                                        {room.type === 'RANDOM' && <strong> 👽 {room.name} {room.visibility === 'PRIVATE' && <>(🔒)</>} </strong>}
                                    </div>
                                    <span className='text-muted' style={{ fontSize: '14px' }}> {room.description} </span>
                                </div>

                                { room.host === true &&   <Badge bg={handleChatVariant(room.type)} pill> HOST </Badge>  }
                                { room.member === true && <Badge bg={handleChatVariant(room.type)} pill> MEMBER</Badge> }
                                
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Container>

                <Button variant='dark' className='mx-1 my-2 px-2' onClick={() => setChannelModal(true)}>
                    💬 Criar Canal
                </Button>
            </Card>
        </>
    )
}

export default ChannelList