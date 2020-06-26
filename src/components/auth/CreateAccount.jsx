import React, {useState} from 'react';
import WrapperUser from '../layout/WrapperUser';
import WrapperBox from '../layout/WrapperBox';
import WrapperFields from '../layout/WrapperFields';
import Titles from '../layout/Titles';
import Label from '../layout/Label';
import Input from '../layout/Input';
import Button from '../layout/Button';
import LinkTo from '../layout/LinkTo';

const CreateAccount = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        repassword: ''
    })

    const onChange = e => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onClick = e => {
        
    }

    return (
        <WrapperUser>
            <WrapperBox width='35%'>
                <Titles fontsizexs='30px' marginxs='0px 0px 30px 0px'>Crea tu cuenta</Titles>
                <form>
                    <WrapperFields>
                        <Label size='15px' width='320px' htmlFor='name'>Nombre: </Label>
                        <Input
                            type='text'
                            id='name'
                            name='name'
                            value={user.name}
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
                                value={user.email}
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
                                value={user.password}
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
                                value={user.repassword}
                                placeholder='Repite tu contraseña'
                                onChange={onChange}
                            />
                    </WrapperFields>
                    <WrapperFields>
                        <Button
                            onClick={onClick}>
                            Registrarme
                        </Button>
                    </WrapperFields>
                </form>
                <LinkTo to={'/'}>Volver atras</LinkTo>
            </WrapperBox>
        </WrapperUser>
    );
}

export default CreateAccount;

