import {
    Container,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Icon
} from "./LoginElements";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Apartments</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Logowanie</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='username' required/>
                            <FormLabel htmlFor='for'>Hasło</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton type='submit'>
                                <Link to='/admin/apartments'>
                                    Zaloguj
                                </Link>
                            </FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default Login
