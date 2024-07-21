import { Form, ProgressBar } from "react-bootstrap"
import InputGroupStep1 from "./InputGroups/InputGroupStep1"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import InputGroupStep2 from "./InputGroups/InputGroupStep2"
import { useForm } from "react-hook-form"
import InputGroupStep3 from "./InputGroups/InputGroupStep3"

const SignupForm = () => {
    const navigate = useNavigate()
    const signupForm = useForm()

    const [step, setStep] = useState(1)

    const hadleNext = () => {
        if (step <= 3) {
            setStep(step + 1)
        }
    }

    const handlePrevius = () => {
        if (step > 1) {
            setStep(step - 1)
            return
        }

        navigate('/signin')

    }

    return (
        <>
            <ProgressBar striped variant="success" now={((step) / 3) * 100} />

            <Form>
                { step == 1 && <InputGroupStep1 next={hadleNext} previus={handlePrevius} signupForm={signupForm}></InputGroupStep1> }
                { step == 2 && <InputGroupStep2 next={hadleNext} previus={handlePrevius} signupForm={signupForm}></InputGroupStep2> }
                { step == 3 && <InputGroupStep3 signupForm={signupForm}> </InputGroupStep3>}
            </Form>
        </>
    )
}

export default SignupForm