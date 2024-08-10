import { Badge, Row } from "react-bootstrap"
import moment from "moment/moment"
import { useEffect } from "react"


const Message = ({ message, sender }) => {
    useEffect(() => {
        console.log({
            blob: message.blob
        })
    }, [])
    return (
        <>
            {message && 
                <Row>
                    <div className={`p-2 d-flex ${sender == 'me' ? 'justify-content-end' : 'justify-content-start'}`}>
                        
                    {/*  Setando a imagem do usuário no chat */}
                        {sender != 'me' && <img src={message.blob} width='40'></img> }


                        <Badge bg={sender === 'me' ? 'primary' : 'secondary'} className='p-2' style={{height: '30px'}}>
                            <span style={{ fontSize: '15px' }}>{ message.content }</span>
                            <span style={{ color: 'white', fontSize: '10px', marginLeft: '8px' }}> 
                                { moment(message.createdAt).format('HH:mm') }
                            </span>
                        </Badge>
                    </div>
                </Row>
            }
        </>
    )
}

export default Message