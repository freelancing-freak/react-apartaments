import {
    Container,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Icon,
    Text
} from "./LoginElements";

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
                            <FormInput type='email' required/>
                            <FormLabel htmlFor='for'>Hasło</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton type='submit'>Zaloguj</FormButton>
                            <Text>Zapomniałeś hasła?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default Login
