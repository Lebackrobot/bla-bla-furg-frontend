import { Card } from "react-bootstrap"

const HomeContainer = ({ children }) => {
    return (
        <>
            <Card className='m-3' style={{ boxShadow: '0 0 5px rgba(0, 0, 0, 1)' }}>
                <Card.Body>
                    { children }
                </Card.Body>
            </Card>  
        </>
    )
}

export default HomeContainer