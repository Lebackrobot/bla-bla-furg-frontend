import SigninForm from "../../components/forms/SigninForm"
import SignContainer from "../../components/signContainer/SignContainer"


const Signin = () => {
    return (
        <SignContainer>
            {/* Header */}
            <center>
                <img src='./images/bla-bla-icon.png' width='100' className='mb-4'></img>
                <h3>Bla Bla Furg</h3>
                <span className='text-muted'> 
                    Porque estudar não precisa ser tão chato!
                </span>
            </center>

            <SigninForm> </SigninForm>
        </SignContainer>
    )

}

export default Signin