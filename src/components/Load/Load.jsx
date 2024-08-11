import { useEffect, useState } from "react"
import { Modal } from "react-bootstrap"

let handleLoad

const Load = () => {
    const [show, setLoad] = useState(false)

    const handleShow = () => {
        setLoad(true)
    
        setTimeout(() => {
            setLoad(false)
        }, 3000)
    }

    handleLoad = handleShow

    return (
        <>
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show}>
                <center>
                    <img src='images/loading-3.gif' width='600'></img>
                    <h3 className='p-4'>Carregando...</h3>
                </center>
            </Modal>

        </>
    )
}

export { Load, handleLoad }