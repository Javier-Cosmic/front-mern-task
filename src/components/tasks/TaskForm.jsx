import React, { useState, useContext, useEffect, useRef, createRef } from "react";
import FormTask from "../layout/FormTask";
import ContainerInputTask from "../layout/ContainerInputTask";
import Input from "../layout/Input";
import Title from "../layout/Titles";
import ButtonInput from "../layout/ButtonInput";
import Msg from "../layout/Msg";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";
import Swal from 'sweetalert2';


const TaskForm = () => {
  // context de task state
  const taskContext = useContext(TaskContext);
  const {currentask, addTask, validateTask, errorTask, getTask, updateTask} = taskContext;

  //context de project state
  const projectContext = useContext(ProjectContext);
  const { currentProject } = projectContext;

  // array destructuring  ---> id con el proyecto actual
  const [currentName] = currentProject;

  // state del formulario  
  const [tasks, setTasks] = useState({
    name: "",
  });
  
  // destructuring del state
  const { name } = tasks;

  //referenciar el focus del input a editar
  const inputRef = useRef();

  // efecto que detecta si hay tarea seleccionada
  useEffect(() => {
    // si la tarea actual es diferente de null
    if (currentask !== null) {
      // se actualiza el formulario tarea con la tarea actual
      setTasks(currentask);
      inputRef.current.focus()
    }else{
      setTasks({
          name: ''
      });
    }
    },[currentask]);
   

  const onChangeTask = (e) => {
    // escuchar los datos del input
    setTasks({
        ...tasks,
        [e.target.name]: e.target.value,
    });

  };

  // anadir tarea
  const onSubmitTask = (e) => {
    e.preventDefault();
    // validar que el nombre no este vacio
    if (name.trim() === '') {
      validateTask();
      return;
    }

    //validacion para saber si es edicion o agregar nueva tarea
    if (currentask === null) {
      // le añadimos el id del proyecto actual a las tareas
      tasks.projectId = currentName.id;
      tasks.estado = false;
      // le pasamos por parametros el objeto tarea
      addTask(tasks);
      //alerta
      Swal.fire({
        icon: 'success',
        title: 'Tarea agregada.',
        confirmButtonColor: '#2F2F2F'
      })

    }else{
      updateTask(tasks);
      //alerta
      Swal.fire({
        icon: 'success',
        title: 'Tarea editada.',
        confirmButtonColor: '#2F2F2F'
      })
    }

    // actualizar las tareas a mostrar
    getTask(currentName.id);

    //limpiar state
    setTasks({
      name: ""
    })
  }

  return (
    <FormTask onSubmit={onSubmitTask}>
      <Title
        fontsize="28px"
        fontsizexs="25px"
        textAling="left"
        margin="-15px 0 20px 0"
      >
        {currentask === null ? 'Añadir una tarea' : 'Editando tarea'}
      </Title>
      <ContainerInputTask marginb={errorTask ? '32px' : '0px'}>
        <Input
          inner={inputRef}
          border="1px solid hsl(0,0%,80%)"
          height="40px"
          type="text"
          name="name"
          value={name}
          placeholder="&#xf08d;  Ingresa el nombre de tu tarea"
          onChange={onChangeTask}
        />

        <ButtonInput 
          width="42%" 
          type="submit"
          margin="0 0 0 10px" 
          value={currentask ? 'Editar tarea' : 'Agregar tarea'}
        />
      </ContainerInputTask>
        {errorTask
          ? <Msg errorTask fontsizesm='13px'>Debes indicar el nombre de la tarea.</Msg>
          : null
        }
    </FormTask>
  );
};

export default TaskForm;
