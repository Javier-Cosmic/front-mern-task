import React, {useState, useRef, useEffect, useContext} from 'react';
import WrapperUser from '../layout/WrapperUser';
import WrapperBox from '../layout/WrapperBox';
import WrapperFields from '../layout/WrapperFields';
import Titles from '../layout/Titles';
import Label from '../layout/Label';
import Input from '../layout/Input';
import ButtonInput from '../layout/ButtonInput';
import LinkTo from '../layout/LinkTo';
import Msg from '../layout/Msg';
import Swal from 'sweetalert2';
import AlertContext from '../../context/alerts/AlertContext';
import AuthContext from '../../context/auth/AuthContext';

// props history router dom
const CreateAccount = ({ history }) => {

    const authContext = useContext(AuthContext);
    const {isAuth, msgAuth, registerUser} = authContext;

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

        // si el usuario esta logueado 
        if (isAuth){

            // alerta
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Has iniciado sesion correctamente.'
              })

            history.push('/proyectos');
        }

        // mostrar un mensaje de error desde el servidor
        if(msgAuth){
            showAlert(msgAuth.msg);   // ---> msgAuth corresponde al auth y 'msg' es un parametro del payload como obj
        }
        
        
    }, [msgAuth, isAuth, history]);

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
            
        }else{ 
            // le pasamos a la funcion del context los datos almacenados del state
            registerUser({
                names,
                email,
                password
            })
        }

        if(!msgAuth === 'El usuario ya está registrado.'){
            // alerta
            Swal.fire({
                icon: 'success',
                title: 'Usuario creado exitosamente!',
                confirmButtonColor: '#2F2F2F'
                
            })
        }
        
    }

    return (
        <WrapperUser>
            <WrapperBox width='35%'>
                <Titles fontsizexs='30px' marginxs='0px 0px 30px 0px'>Crea tu cuenta</Titles>
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
                        {alert ? (<Msg errorTask mtopxs='30px' widthxs='87%'>{alert.msg}</Msg>) : null}
                    <WrapperFields>
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

