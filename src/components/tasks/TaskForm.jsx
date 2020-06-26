import React, { useState } from "react";
import FormTask from "../layout/FormTask";
import ContainerInputTask from "../layout/ContainerInputTask";
import Input from "../layout/Input";
import Title from "../layout/Titles";
import Button from "../layout/Button";

const TaskForm = () => {
  const [formTask, setFormTask] = useState({
    task: "",
  });

  const onChangeTask = (e) => {
    e.preventDefault();

    setFormTask({
      ...formTask,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <FormTask>
      <Title
        fontsize="28px"
        fontsizexs="25px"
        textAling="left"
        margin="-15px 0 20px 0"
      >
        Añadir una tarea
      </Title>
      <ContainerInputTask>
        <Input
          border="1px solid hsl(0,0%,80%)"
          height="40px"
          type="text"
          id="task"
          name="task"
          value={formTask.task}
          placeholder="&#xf08d;  Ingresa el nombre de tu tarea"
          onChange={onChangeTask}
        />
        <Button width="42%" margin="0 0 0 10px" type="button" onClick="">
          Agregar tarea
        </Button>
      </ContainerInputTask>
    </FormTask>
  );
};

export default TaskForm;
