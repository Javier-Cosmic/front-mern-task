import React, {useState, useRef, useEffect} from 'react';
import WrapperUser from '../layout/WrapperUser';
import WrapperBox from '../layout/WrapperBox';
import WrapperFields from '../layout/WrapperFields';
import Input from '../layout/Input';
import Button from '../layout/Button';
import Titles from '../layout/Titles';
import LinkTo from '../layout/LinkTo';

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const onChange = (e) => {
        e.preventDefault();

        

        setUser({
            ...user,
            [e.target.name] : e.target.value
        })

    }

    const onClick = e => {

    }

    return (
        <WrapperUser>
                <WrapperBox width='27%'>                        
                <i className="fa fa-user-circle-o icon" aria-hidden="true"></i>       
                    <Titles fontsizexs='30px' marginxs='0px 0px 30px 0px' color='#767676'>Inicio de Sesion</Titles>
                        <form>
                            <WrapperFields> 
                                <Input 
                                    inner={inputRef}
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={user.email}
                                    placeholder='&#xf0e0;  Ingresa tu correo electronico'
                                    onChange={onChange}
                                />
                            </WrapperFields>
                            <WrapperFields>
                                <Input 
                                    type='password'
                                    id='password'
                                    name='password'
                                    value={user.password}
                                    placeholder=' &#xf023;  Ingresa tu contraseña'
                                    onChange={onChange}
                                />
                            </WrapperFields>         
                            <WrapperFields>
                                <Button
                                    type='button'
                                    onClick={onClick}>
                                    Entrar
                                </Button>
                            </WrapperFields>
                        </form>
                        <LinkTo to={'/crear-cuenta'}>Registrarme</LinkTo>
                </WrapperBox>   
        </WrapperUser>
    );
}

export default Login; 