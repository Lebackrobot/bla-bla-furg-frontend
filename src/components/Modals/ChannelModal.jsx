import { useState } from "react"
import { Button, Form, InputGroup, Modal } from "react-bootstrap"
import { useForm } from "react-hook-form"
import chatController from "../../controllers/chatController"
import { ToastError, handleToastError } from '../toasts/ToastError' 

let setChannelModal

 
const ChannelModal = () => {
    const [show, setShow] = useState(false)
    const [showPassword, setShowPasword] = useState(false)
    const [ submitDisabled, setSubmitDisabled] = useState(true)

    const handleSubmit = () => {
        const payload = channelForm.getValues()

        chatController.create(payload).then(response => {
            if (response.success === false) {
                handleToastError(response.message)
                return
            }

            window.location.reload()
        })

    }

    const handleShowPassword = (event) => {
        handleValidation()

        const visibility = event.target.value;

        if (visibility === 'PRIVATE') { 
            setShowPasword(true)
        }

        else setShowPasword(false)
    }

    const handleValidation = () => {
        const payload = channelForm.getValues()
        setSubmitDisabled(true)


        if (payload.visibility && payload.name && payload.description && payload.type) {
            setSubmitDisabled(false)
        }

        if (payload.visibility === 'PRIVATE' && payload.password === '') {
            setSubmitDisabled(true)
        }
    }

  
    const channelForm = useForm()
    setChannelModal = setShow

    const handleClose = () => {setShow(false)}

    return (
        <>
            <ToastError></ToastError>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>
                        💬 Criar Room
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Select aria-label="Default select example" className='mb-3' {...channelForm.register('type')} onChange={handleValidation}>
                            <option value=''>👾 Selecione a categoria do seu Canal.</option>
                            <option value="RANDOM">👽 Zueira</option>
                            <option value="STUDY">📚 Estudos</option>
                            <option value="REMINDER">🔔 Avisos</option>
                        </Form.Select>

                        <Form.Select aria-label="Default select example" className='mb-3' {...channelForm.register('visibility')} onChange={handleShowPassword}>
                            <option value=''>🔓 Selecione a visibilidade do seu Canal.</option>
                            <option value="PUBLIC">🔓 Publico</option>
                            <option value="PRIVATE">🔒 Privado</option>
                        </Form.Select>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Nome</InputGroup.Text>
                            <Form.Control
                                placeholder="Nome do canal"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onKeyDown={handleValidation}
                                {...channelForm.register('name')}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Descrição</InputGroup.Text>
                            <Form.Control
                                placeholder="Descrição do canal"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onKeyDown={handleValidation}
                                {...channelForm.register('description')}
                            />
                        </InputGroup>

                        { showPassword === true  &&
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Senha</InputGroup.Text>
                                <Form.Control
                                    type='password'
                                    placeholder="Senha do room"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onKeyDown={handleValidation}
                                    {...channelForm.register('password')}
                                />
                            </InputGroup>
                        }

                        


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" disabled={submitDisabled} onClick={handleSubmit}>
                        Criar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


export { ChannelModal, setChannelModal }