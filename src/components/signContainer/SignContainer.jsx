import { Card, Col, Container, Row } from "react-bootstrap"
import styles from './SignContainer.module.css'


const SignContainer = ({ children }) => {
    return (
        <>
            <Container className='d-flex align-items-center justify-content-center vh-100'>
                <Card className={`${styles.shadowMargin}`}>
                    <Row>
                        <Col className='p-5 mx-5'>
                            { children }
                        </Col>

                        <Col className={styles.background}></Col>
                    </Row>
                </Card>
            </Container>
        </>
    )

}

export default SignContainer
