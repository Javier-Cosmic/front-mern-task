import React, {useState, useRef, useEffect, useContext} from 'react';
import WrapperUser from '../layout/WrapperUser';
import WrapperBox from '../layout/WrapperBox';
import WrapperFields from '../layout/WrapperFields';
import Titles from '../layout/Titles';
import Label from '../layout/Label';
import Input from '../layout/Input';
import ButtonInput from '../layout/ButtonInput';
import Button from '../layout/Button';
import LinkTo from '../layout/LinkTo';
import Msg from '../layout/Msg';
import AlertContext from '../../context/alerts/AlertContext';
import AuthContext from '../../context/auth/AuthContext';


const CreateAccount = () => {

    const authContext = useContext(AuthContext);
    const {registerUser} = authContext;

    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    const inputRef = useRef();
    const [user, setUser] = useState({
        names: '',
        email: '',
        password: '',
        repassword: ''
    })

    const {names, email, password, repassword} = user;

    useEffect(() => {
        inputRef.current.focus();

        console.log(process.env.API_URL);
    }, []);

    const onChange = e => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        
        if(names.trim() === '' ||
            email.trim() === '' || 
            password.trim() === '' || 
            repassword.trim() === '')
        {
            showAlert('Todos los campos son obligatorios.');
            return;
        }

        if(password.length < 6){
            showAlert('La clave debe ser de al menos 6 caracteres.');
            return
        }

        if(password !== repassword){
            showAlert('Las claves no son iguales.');
            return;
        }

        registerUser({
            names,
            email,
            password
        })

    }

    return (
        <WrapperUser>
            <WrapperBox width='35%'>
                {alert ? (<Msg errorTask mtopxs='0px' widthxs='90%'>{alert.msg}</Msg>) : null}
                <Titles fontsizexs='30px' margin={alert ? '20px 0 0 0' : '0px'} marginxs='20px 0px 30px 0px'>Crea tu cuenta</Titles>
                <form onSubmit={onSubmit}>
                    <WrapperFields>
                        <Label size='15px' width='320px' htmlFor='name'>Nombre: </Label>
                        <Input
                            inner={inputRef}
                            type='text'
                            id='name'
                            name='names'
                            value={names}
                            placeholder='Ingresa tu nombre y apellido'
                            onChange={onChange}
                        />
                    </WrapperFields>
                    <WrapperFields>
                        <Label size='15px' width='320px' htmlFor='email'>Correo electronico:</Label>
                            <Input 
                                type='email'
                                id='email'
                                name='email'
                                value={email}
                                placeholder='Ingresa tu correo electronico'
                                onChange={onChange}
                            />
                    </WrapperFields>
                    <WrapperFields>
                    <Label size='15px' width='320px' htmlFor='password'>Contraseña:</Label>
                            <Input 
                                type='password'
                                id='password'
                                name='password'
                                value={password}
                                placeholder='Ingresa tu contraseña'
                                onChange={onChange}
                            />
                    </WrapperFields>
                    <WrapperFields>
                    <Label size='15px' width='320px' htmlFor='password'>Confirmar contraseña:</Label>
                            <Input 
                                type='password'
                                id='repassword'
                                name='repassword'
                                value={repassword}
                                placeholder='Repite tu contraseña'
                                onChange={onChange}
                            />
                    </WrapperFields>
                    <WrapperFields>
                        {/* <Button
                            type='submit'
                            >
                            Registrarme
                        </Button> */}

                        <ButtonInput
                            type='submit'
                            value='Registrarme'
                        />
                    </WrapperFields>
                </form>
                <LinkTo to={'/'}>Volver atras</LinkTo>
            </WrapperBox>
        </WrapperUser>
    );
}

export default CreateAccount;

