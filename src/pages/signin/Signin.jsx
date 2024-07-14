import { Button, Card, Col, Container, Row } from "react-bootstrap"
import styles from './Signin.module.css'
import SigninForm from "../../components/forms/SigninForm"


const Signin = () => {
    return (
        <>
            <Container className='d-flex align-items-center justify-content-center vh-100'>
                <Card className={`${styles.shadowMargin}`}>
                    <Row>
                        <Col className='p-5 mx-5'>
                            <center>
                                <img src='./images/bla-bla-icon.png' width='100' className='mb-4'></img>
                                <h3>Bla Bla Furg</h3>
                                <span className='text-muted'> 
                                    Porque estudar não precisa ser tão chato!
                                </span>
                            </center>

                            <SigninForm> </SigninForm>
                        </Col>

                        <Col className={styles.background}></Col>
                    </Row>
                </Card>
            </Container>
        </>
    )

}

export default Signin