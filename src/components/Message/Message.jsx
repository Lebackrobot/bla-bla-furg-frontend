import { Badge, Row } from "react-bootstrap"

const Message = ({ message, sender }) => {
    return (
        <>
            <Row>
                <div className={`p-2 d-flex ${sender == 'me' ? 'justify-content-end' : 'justify-content-start'}`}>
                    <Badge bg={sender === 'me' ? 'primary' : 'secondary'} className='p-2'>
                            <span style={{ fontSize: '15px' }}>{ message }</span>
                            <span style={{ color: 'white', fontSize: '10px', marginLeft: '8px' }}> 17:30 </span>
                    </Badge>
                </div>
            </Row>
        </>
    )
}

export default Message