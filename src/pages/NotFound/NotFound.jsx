import { Modal } from "react-bootstrap"

const NotFound = () => {
    return (
        <>
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={true}>
                <center>
                    <img src="./images/not-found.png" width='500'></img>
                </center>
            </Modal>
        </>
    )
}

export default NotFound