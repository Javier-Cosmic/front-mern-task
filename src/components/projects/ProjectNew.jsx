import React, {useState, useContext} from 'react';
import Button from '../layout/Button';
import ButtonInput from '../layout/ButtonInput';
import FormNewProject from '../layout/FormNewProject';
import Input from '../layout/Input';
import Msg from '../layout/Msg';
import Swal from 'sweetalert2'
import ProjectContext from '../../context/projects/ProjectContext';

const ProjectNew = ({hover, bcolor, color}) => {

    // utilizamos el context de project state
    const projectContext = useContext(ProjectContext);
    const { newForm, viewForm, addProject, msgValidateForm, validateForm} = projectContext;

    const [project, setProject] = useState({
        name: ''
    });

    const { name } = project;

    const onChangeProject = (e) =>{
        setProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProject = (e) => {
        e.preventDefault();

        // validacion ---> se ejecuta la funcion 
        if(name === ''){
            validateForm();
            return;
        }
        // agregar proyecto  --> le pasamos como parametro el state project a la funcion proveniente del context
        addProject(project);

        // alerta
        Swal.fire({
            icon: 'success',
            title: 'Proyecto Agregado',
            confirmButtonColor: '#2F2F2F'
        })

        //limpiar el campo
        setProject({
            name: ''
        })

    }

    // invocamos la funcion viewForm proveniente del context para mostrar el formulario
    const onClickForm = () => {
        viewForm();
    }
 
    const hoverTheme = () => {
        if (bcolor === '#FF6347' || bcolor === '#E42F8A') {
            return '#487078'
        }else{
            return hover 
        }
    }

    return (
        <>
            <Button
                hoverMain={hoverTheme}
                color='white'
                margin='5px 0px 15px 0'
                marginxs={newForm ? '0 0 15px 0' : '0 0 60px 0'}
                type='button'
                onClick={onClickForm}>
                &#xf067;  Nuevo proyecto
            </Button>

            {newForm
                ? <FormNewProject onSubmit={onSubmitProject}>
                        <Input 
                            border='1px solid hsl(0,0%,80%)'
                            height='30px'
                            type='text'
                            placeholder='Nombre del proyecto'
                            name='name'
                            value={name}
                            onChange={onChangeProject}
                        />

                        <ButtonInput
                            hoverMain={hoverTheme}
                            bcolor={bcolor}
                            color={color}
                            margin='5px 0px 10px 0'
                            marginxs='10px 0 15px 0'
                            type='submit'
                            value='&#xf055; Agregar proyecto'
                        />

                    </FormNewProject>
                
                : null}

                {msgValidateForm
                    ? <Msg error>Debes indicar el nombre del proyecto.</Msg>
                    : null
                }
        </>
    );
}

export default ProjectNew;