import { useEffect, useState } from "react"
import { Badge, Row } from "react-bootstrap"
import signController from "../../controllers/signinController"
import moment from "moment/moment"


const Message = ({ message, sender }) => {
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        if (sender != 'me') {
            signController.makeAvatarV2(message.user.avatar).then(response => {
                    const blob = new Blob([response], { type: 'image/svg+xml' })
                    const url = URL.createObjectURL(blob)
                    setAvatar(url)
                }, message)
        }

    }, [])


    return (
        <>
            <Row>
                <div className={`p-2 d-flex ${sender == 'me' ? 'justify-content-end' : 'justify-content-start'}`}>
                    { sender != 'me' && <img src={avatar} width='40'></img> }
                    <Badge bg={sender === 'me' ? 'primary' : 'secondary'} className='p-2' style={{height: '30px'}}>
                        <span style={{ fontSize: '15px' }}>{ message.content }</span>
                        <span style={{ color: 'white', fontSize: '10px', marginLeft: '8px' }}> 
                            { moment(message.createdAt).format('HH:mm') }
                        </span>
                    </Badge>
                </div>
            </Row>
        </>
    )
}

export default Message