import { useState } from "react"
import { Toast, ToastContainer, ToastHeader } from "react-bootstrap"

let handleToastError

const ToastError = () => {
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState()

    handleToastError = ( message ) => {
        setMessage(message)
        setShow(true)

        setTimeout(() => {
            setShow(false)
        }, 3000)
    }

    return (
        <ToastContainer style={{position: "fixed"}} position='top-end'  className='m-1'>
            <Toast show={show} bg='warning' className='p-1'>
                <Toast.Body>
                    { message }
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export { ToastError, handleToastError }