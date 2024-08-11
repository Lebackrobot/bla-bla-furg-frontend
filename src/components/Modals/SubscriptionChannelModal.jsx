import { useState } from "react"
import { Button, Form, InputGroup, Modal } from "react-bootstrap"
import chatController from "../../controllers/chatController"
import { useForm } from "react-hook-form"
import { ToastError, handleToastError } from "../toasts/ToastError"
import { Load, handleLoad } from "../Load/Load"

let setSubscriptionChannelModal

const SubscriptionChannelModal = () => {
    const [show, setShow] = useState(false)
    const [chat, setChat] = useState()

    const subscriptionChannelForm = useForm()
    
    const handleSubscritionChannelModal = (roomTarget) => {
        setChat(roomTarget)
        setShow(true)
    }
    
    const handleClose = () => setShow(false)

    const handleChannelRegister = () => {
        handleLoad(true)

        try {
            const payload = subscriptionChannelForm.getValues()
    
            chatController.addMember({ roomId: chat.id, ...payload}).then(response => {
                if (response.success === false) {
                    handleToastError(response.message)
                    return 
                }
    
                window.location.reload()    
                handleClose()
            })
        }

        finally {
            handleLoad(false)
        }
    }

    setSubscriptionChannelModal = handleSubscritionChannelModal 


    return (
        <>
            <Load></Load>
            <ToastError></ToastError>
            {chat &&
                <Modal show={show}>
                    <Modal.Header>
                        <Modal.Title>
                            {chat.type === 'STUDY' && <strong> 📚 {chat.title} </strong>}
                            {chat.type === 'REMINDER' && <strong> 🔔 {chat.title} </strong>}
                            {chat.type === 'FUN' && <strong> 👽 {chat.title} </strong>}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        {chat.visibility === 'PUBLIC' && <span className='text-muted'> 🔓 Esse chat é publico.Deseja entrar ? </span> }
                        {chat.visibility === 'PRIVATE' && 
                            <>
                                <span className='text-muted'> 🔓 Esse chat é privado.Deseja entrar? </span>
                                <InputGroup className="mb-3 mt-3">
                                    <InputGroup.Text id="basic-addon1"> Senha</InputGroup.Text>
                                    <Form.Control
                                        type='password'
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        {...subscriptionChannelForm.register('password')}
                                    />
                                </InputGroup>
                            </>
                            
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Não
                        </Button>
                        <Button variant="primary" onClick={handleChannelRegister}>
                            Sim
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
        </>
    )
}

export { SubscriptionChannelModal, setSubscriptionChannelModal}