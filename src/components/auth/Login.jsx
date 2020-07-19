import React, {useState, useRef, useEffect, useContext} from 'react';
import WrapperUser from '../layout/WrapperUser';
import WrapperBox from '../layout/WrapperBox';
import WrapperFields from '../layout/WrapperFields';
import Input from '../layout/Input';
import ButtonInput from '../layout/ButtonInput';
import Msg from '../layout/Msg';
import Titles from '../layout/Titles';
import Swal from 'sweetalert2';
import LinkTo from '../layout/LinkTo';
import AlertContext from '../../context/alerts/AlertContext';
import AuthContext from '../../context/auth/AuthContext';
import Loading from '../layout/Loading';

const Login = ({ history }) => {

    const authContext = useContext(AuthContext);
    const { isAuth, msgAuth, login, loadingSpinner } = authContext;

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const inputRef = useRef();
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const {email, password} = user

    useEffect(() => {
        inputRef.current.focus();

        if(isAuth){
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

        if(msgAuth && email.trim() !== '' && password.trim() !== ''){
            showAlert(msgAuth.msg);
            return            
        }

    }, [msgAuth, isAuth, history]);

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        if(email.trim() === '' || password.trim() === ''){
            showAlert('Los campos son obligatorios.')
            return   
        }
        
        login({
            email,
            password
        })
    }

    return (
        <WrapperUser>
                <WrapperBox width='27%'>                        
                <i className="fa fa-user-circle-o icon" aria-hidden="true"></i>       
                    <form onSubmit={onSubmit}>
                        <Titles fontsizexs='30px' marginxs='0px 0px 30px 0px' color='#767676'>Inicio de Sesion</Titles>
                            <WrapperFields> 
                                <Input 
                                    inner={inputRef}
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={email}
                                    placeholder='&#xf0e0;  Ingresa tu correo electronico'
                                    onChange={onChange}
                                />
                            </WrapperFields>
                            <WrapperFields>
                                <Input 
                                    type='password'
                                    id='password'
                                    name='password'
                                    value={password}
                                    placeholder=' &#xf023;  Ingresa tu contraseña'
                                    onChange={onChange}
                                />
                            </WrapperFields> 
                                {alert ? (<Msg errorTask mtopxs='30px' widthxs='87%'>{alert.msg}</Msg>) : null}        
                            
                            {loadingSpinner
                                ? <Loading />
                                : <>
                                    <WrapperFields>
                                        <ButtonInput
                                            type='submit'
                                            value='Entrar'
                                        />
                                    </WrapperFields>
                                    <LinkTo to={'/crear-cuenta'}>Registrarme</LinkTo>
                                </> 
                            }
                        </form>
                </WrapperBox> 
        </WrapperUser>
    );
}

export default Login; 