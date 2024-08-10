import { Button, Col, Nav, Navbar, Row } from "react-bootstrap"
import styles from './Home.module.css'
import HomeContainer from "../../components/HomeContainer/HomeContainer"
import ChannelList from "../../components/Channels/ChannelList"
import { useNavigate } from "react-router-dom"
import Chat from "../../components/Chat/Chat"
import { useEffect, useState } from "react"
import { urlBase } from "../../configs/axiosConfig"

const Home = () => {
    const navigate = useNavigate()
    

    const [chat, setChat] = useState()
    const [eventSource, setEventSource] = useState(new EventSource(`${urlBase}/auth/event-stream?token=${window.localStorage.getItem('token')}`))

    const handleLogout = () => {
        window.localStorage.removeItem('token')
        navigate('/signin')
    }

    
    return (
        <> 
            <Navbar bg="dark" data-bs-theme="dark" className='px-5'>
                <Navbar.Brand href="#home">
                    <img src='./images/bla-bla-icon.png' height={30}></img>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                
                <Button className={styles.logoutButton} onClick={handleLogout}>Logout</Button>
            </Navbar>

            <HomeContainer>
                <Row>
                    <Col xs={3}>
                        <ChannelList setRoom={setChat}></ChannelList>
                    </Col>

                    <Col>
                        <Chat room={chat} eventSource={eventSource}></Chat>
                    </Col>

                </Row>
            
            </HomeContainer>
        </>
    )
}

export default Home