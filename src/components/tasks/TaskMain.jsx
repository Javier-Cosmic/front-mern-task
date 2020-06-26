import React from 'react';
import Task from '../layout/Task';
import TaskContainer from '../layout/TaskContainer';
import ButtonState from '../layout/ButtonState';
import Button from '../layout/Button';
import Paragraph from '../layout/Paragraph';
import IconColor from '../layout/IconColor';

const TaskMain = ({task}) => {
    return (
        <Task>
            <Paragraph>{task.nombre}</Paragraph>

            <TaskContainer>
                {task.estado
                    ? <ButtonState complete>
                       <IconColor color='#5FC85F'> &#xf058; </IconColor>Completado
                    </ButtonState>
                    : <ButtonState >
                       <IconColor color='#EF6969'> &#xf057; </IconColor>Incompleto
                    </ButtonState>
                }
                <Button 
                    width='40%'
                    margin='0 10px 0 0'
                    type='button'
                    >
                    Editar
                </Button>
                <Button 
                    width='40%'
                    secondary
                    hover
                    type='button'
                    >
                    Eliminar
                </Button>
            </TaskContainer>
        </Task>
    )
}

export default TaskMain;