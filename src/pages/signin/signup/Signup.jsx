import SignContainer from "../../../components/signContainer/SignContainer"
import SignupForm from "../../../components/forms/SignupForm/SignupForm"

const Signup = () => {


    return (
        <SignContainer>
            <center>
                <img src='./images/bla-bla-icon.png' width='100' className='mb-4'></img>
                <h3>Bla Bla Furg - Cadastro</h3>
            </center>

            <SignupForm></SignupForm>

            
        </SignContainer>
    )
}

export default Signup