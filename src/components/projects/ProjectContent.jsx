import React, {Fragment, useContext } from "react";
import ButtonList from "../layout/ButtonList";
import Button from "../layout/Button";
import ContainerProject from "../layout/ContainerProject";
import Swal from 'sweetalert2'
import ThemeContext from "../../context/projects/ThemeContext";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";

const ProjectContent = ({project, hoverColor, colorText}) => {

  // context para funcion del menu responsive
  const themeContext = useContext(ThemeContext);
  const setMenu = themeContext;

  //utilizamos el context de task state
  const taskContext = useContext(TaskContext);
  const {getTask} = taskContext;

  // utilzamos el context de project state
  const projectContext = useContext(ProjectContext);
  const {projectCurrent, deleteProject} = projectContext;

  
  // Utilizamos la funcion que extraemos del  project context 
  const getProjectTask = () => {
      projectCurrent(project.id);
      setMenu(false);

      getTask(project.id);  // ---> extraemos la funcion del task Context
  }
  
  // borrar un proyecto x id
  const deleteProjectF = () => {  
    
    // alert
    Swal.fire({
      title: `¿ Deseas eliminar el proyecto ${project.name} ?`,
      text: "Esta opción no se puede revertir.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(47, 47, 47)',
      cancelButtonColor: 'rgb(47, 47, 47, 0.5)',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, eliminar!',

    }).then((result) => {
      if (result.value) {

        // funcion proveniente del context
        deleteProject(project.id);

        Swal.fire({
            icon: 'success',
            title: 'Proyecto eliminado',
            confirmButtonColor: '#2F2F2F',
            text: `Tu proyecto ${project.name} ha sido eliminado con exito.`
        })
      }
    })
  }
  
  return (
    <Fragment>
      <ContainerProject>
        <ButtonList 
          hoverColor={hoverColor} 
          colorText={colorText}
          onClick={getProjectTask}>
            {project.name}
        </ButtonList>

        {/* boton eliminar proyecto */}
        <Button
          buttonMenuX
          marginxs="-10px 0 0 0"
          paddingxs="0"
          padding="0"
          width="10%"
          display="flex"
          deleteButton
          color={colorText}
          hovernoBG
          hoverColor={hoverColor}
          type='button'
          onClick={deleteProjectF}
        >
          &#xf1f8;
        </Button>
      </ContainerProject>
    </Fragment>
  );
};

export default ProjectContent;
