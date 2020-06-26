import React from "react";
import ListTask from "../layout/ListTask";
import Msg from "../layout/Msg";
import TaskMain from "./TaskMain";
import Title from "../layout/Titles";

const TaskList = () => {
  const task = [
    { nombre: "Obtener los datos", estado: true },
    { nombre: "Verificar los datos en la bd", estado: false },
    { nombre: "Configurar token", estado: true },
    {
      nombre:
        "Guardar sesion en localstorage hdbdbcdhcsd bhsdbvhbduhs vbubvuwbdcvsbhbvshfdbv nieniuvfndvidsnfuvnsuifnd ndknffvdfkmkdfnbkdnf dfjvnjdfnb",
      estado: false,
    },
  ];

  return (
    <>
      <Title
        fontsizexs="25px"
        fontsize="28px"
        lineH
        marginxs="0px 20px 0 20px"
        margin="-15px 0 -15px 0"
        textAling="left"
      >
        Proyecto Login
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
        {task.length === 0 ? (
          <Msg>No hay tareas para mostrar</Msg>
        ) : (
          task.map((tasks) => <TaskMain task={tasks} />)
        )}
      </ListTask>
    </>
  );
};

export default TaskList;
