import React, {useContext, useRef} from 'react';
import Task from '../layout/Task';
import TaskContainer from '../layout/TaskContainer';
import ButtonState from '../layout/ButtonState';
import Button from '../layout/Button';
import Paragraph from '../layout/Paragraph';
import IconColor from '../layout/IconColor';
import Swal from 'sweetalert2';
import TaskContext from '../../context/tasks/TaskContext';
import ProjectContext from '../../context/projects/ProjectContext';

const TaskMain = ({task}) => {

    // context de task state
    const taskContext = useContext(TaskContext);
    const {deleteTask, getTask, changeState, currentTask, updateTask} = taskContext;

    // context de project state
    const projectContext = useContext(ProjectContext);
    const {currentProject} = projectContext;

    // array destructuring para saber la posicion
    const [currentName] = currentProject;

    
    const deleteTaskF = () => {

        // alert
        Swal.fire({
            title: `¿ Deseas eliminar la tarea ${task.name} ?`,
            text: "Esta opción no se puede revertir.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(47, 47, 47)',
            cancelButtonColor: 'rgb(47, 47, 47, 0.4)',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, eliminar!',
    
        }).then((result) => {
            if (result.value) {
    
            // funcion proveniente del context
            deleteTask(task.id);

            // actualizar las tareas a mostrar
            getTask(currentName.id);
    
            Swal.fire({
                icon: 'success',
                title: 'Tarea eliminada',
                confirmButtonColor: '#2F2F2F',
                text: `Tu tarea ${task.name} ha sido eliminada con exito.`
            })
            }
        })
    }

    // cambiar estado
    const changeStateF = () => {
        
        if(task.estado){
            task.estado = false;
        }else{
            task.estado = true;
        }

        // le pasamos por parametro el objeto tarea modificada
        changeState(task);
    }

    //obtener tarea actual para editar
    const getTaskCurrent = () => {
        currentTask(task);
    }

    return (
        <Task>
            <Paragraph>{task.name}</Paragraph>

            <TaskContainer>
                {task.estado
                    ? <ButtonState onClick={changeStateF} complete>
                       <IconColor color='#5FC85F'> &#xf058; </IconColor>Completado
                    </ButtonState>
                    : <ButtonState onClick={changeStateF}>
                       <IconColor color='#EF6969'> &#xf057; </IconColor>Incompleto
                    </ButtonState>
                }
                <Button 
                    width='40%'
                    margin='0 10px 0 0'
                    type='button'
                    onClick={getTaskCurrent}
                    >
                    Editar
                </Button>
                <Button 
                    width='40%'
                    secondary
                    hover
                    type='button'
                    onClick={deleteTaskF}
                    >
                    Eliminar
                </Button>
            </TaskContainer>
        </Task>
    )
}

export default TaskMain;