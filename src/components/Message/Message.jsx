import { Badge, Row } from "react-bootstrap"
import moment from "moment/moment"


const Message = ({ message, sender }) => {
    return (
        <>
            {message && 
                <Row>
                    <div className={`p-2 d-flex ${sender == 'me' ? 'justify-content-end' : 'justify-content-start'}`}>
                        
                    {/*  Setando a imagem do usuário no chat */}
                        {sender != 'me' && <img src={message.blob} width='40'></img> }

                        <Badge bg={sender === 'me' ? 'primary' : 'secondary'} className='p-2' style={{height: '35px'}}>
                            {/*     <span style={{ fontSize: '16px' }}>
                                {sender != 'me' && <Badge className='p-1' bg='dark' pill>{message.user.nickname}</Badge>}
                                {sender == 'me' && <Badge className='p-1' bg='dark' pill>You</Badge>}
                                </span>
                            <br></br>
                            <br></br> */}

                            <span style={{ fontSize: '15px' }}>{ message.content }</span>
                            <span style={{ color: 'white', fontSize: '10px', marginLeft: '8px' }}> 
                                { moment(message.createdAt).format('HH:mm') }
                            </span>
                        </Badge>

                        {sender == 'me' && <img src={message.blob} width='40'></img>}

                    </div>
                </Row>
            }
        </>
    )
}

export default Message