import { useEffect, useState } from "react"
import { Badge, Row } from "react-bootstrap"
import signController from "../../controllers/signinController"
import moment from "moment/moment"


const Message = ({ message, sender }) => {
    console.log(message.avatar)

    return (
        <>
            <Row>
                <div className={`p-2 d-flex ${sender == 'me' ? 'justify-content-end' : 'justify-content-start'}`}>
                    { sender != 'me' && <img src={message.avatar} width='40'></img> }
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