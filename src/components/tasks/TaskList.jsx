import React, {useContext} from "react";
import ListTask from "../layout/ListTask";
import Msg from "../layout/Msg";
import TaskMain from "./TaskMain";
import Title from "../layout/Titles";
import ContainerTaskList from "../layout/ContainerTaskList";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";

const TaskList = () => {

  // context del task state
  const taskContext = useContext(TaskContext);
  const {taskProject} = taskContext;

  // context del project state
  const projectContext = useContext(ProjectContext);
  const {currentProject} = projectContext;
  
  // si no hay ningun proyecto --> validar
  if(!currentProject){
      return ( 
      <Title
          fontsizexs="25px"
          fontsize="28px"
          lineH
          marginxs="0px 20px 0 20px"
          margin="-15px 0 -15px 0"
          textAling="left">
            Selecciona un proyecto
      </Title>
    )
  }

  // array destructuring ---> extraer la posicion actual
  const [currentName] = currentProject;

  return (
    <ContainerTaskList>
      <Title
        fontsizexs="25px"
        fontsize="28px"
        lineH
        marginxs="0px 20px 0 20px"
        margin="-15px 0 -15px 0"
        textAling="left"
      >
        Proyecto {currentName.name}
      </Title>
      <Title
        fontsize="28px"
        fontsizexs="25px"
        marginxs="30px 0 -5px 0"
        margin="15px 0 -15px 0"
      >
        Tareas
      </Title>
      <ListTask>
        {taskProject.length === 0 ? (
          <Msg 
            fontsize='16.5px' 
            fontsizexs='16.5px'
            fontsizesm='18px'
            justify='center'>
              Aún no has creado tu primera tarea.
          </Msg>
        ) : (
          taskProject.map((tasks) => <TaskMain key={tasks.id} task={tasks} />)
        )}
      </ListTask>
    </ContainerTaskList>
  );
};

export default TaskList;
