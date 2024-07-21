import { useEffect } from "react"
import signController from "../../../../controllers/signinController"
import { useNavigate } from "react-router-dom"

const InputGroupStep3 = ({ signupForm }) => {
    const navigate = useNavigate()

    useEffect(() => {
        signController.signup(signupForm.getValues()).then(response => {
            if (response.success === false) {
                return
            }

            window.localStorage.setItem('token', response.info.token)

            setTimeout(() => {
                navigate('/')
            }, 3000)
        })

    }, [])

    return (
        <>
            <center className='py-5'>
                <img src='./images/loading-3.gif' width='380'></img>
                <h4 className='text-muted mt-3'>Quase lá... </h4>
            </center>
        </>
    )
}

export default InputGroupStep3