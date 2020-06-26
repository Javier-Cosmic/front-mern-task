import React, {useState} from 'react';
import Button from '../layout/Button';
import FormNewProject from '../layout/FormNewProject';
import Input from '../layout/Input';

const ProjectNew = ({hover, bcolor, color}) => {

    const [project, setProject] = useState({
        nameProject: ''
    });

    const { nameProject } = project;

    const onChangeProject = (e) =>{
        setProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    const onClickProject = (e) => {
        e.preventDefault();

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
                margin='5px 0px -10px 0'
                marginxs='0 0 -10px 0'
                type='button'>
                &#xf067;  Nuevo proyecto
            </Button>

            <FormNewProject>
                <Input 
                    border='1px solid hsl(0,0%,80%)'
                    height='30px'
                    type='text'
                    placeholder='Nombre del proyecto'
                    name='nameProject'
                    value={nameProject}
                    onChange={onChangeProject}
                />

                <Button
                    hoverMain={hoverTheme}
                    bcolor={bcolor}
                    color={color}
                    margin='5px 0px 10px 0'
                    marginxs='10px 0 10px 0'
                    type='button'
                    onClick={onClickProject}>
                    &#xf055; Agregar proyecto
                </Button>

            </FormNewProject>
        </>
    );
}

export default ProjectNew;