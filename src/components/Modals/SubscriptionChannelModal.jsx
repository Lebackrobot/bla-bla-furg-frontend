import { useState } from "react"
import { Button, Modal } from "react-bootstrap"

let setSubscriptionChannelModal

const SubscriptionChannelModal = () => {
    const [show, setShow] = useState(false)
    const [chat, setChat] = useState()

    
    const handleSubscritionChannelModal = (chatTarget) => {
        setChat(chatTarget)
        setShow(true)
    }

    setSubscriptionChannelModal = handleSubscritionChannelModal 

    const handleClose = () => setShow(false)

    return (
        <>
            {chat &&
                <Modal show={show}>
                    <Modal.Header>
                        <Modal.Title>
                            {chat.type === 'STUDY' && <strong> 📚 {chat.title} </strong>}
                            {chat.type === 'NOTIFY' && <strong> 🔔 {chat.title} </strong>}
                            {chat.type === 'FUN' && <strong> 👽 {chat.title} </strong>}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span className='text-muted'>
                            🔓 Esse chat é publico. Deseja entrar?
                        </span>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Não
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Sim
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
        </>
    )
}

export { SubscriptionChannelModal, setSubscriptionChannelModal}