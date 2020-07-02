import React, { useState, useEffect, useContext } from "react";
import ContainerApp from "../layout/ContainerApp";
import ContainerMain from "../layout/ContainerMain";
import SideBar from "../layout/SideBar";
import ContainerTask from "../layout/ContainerTask";
import MarginProject from "../layout/MarginProjects";
import SelectColor from "../layout/SelectColor";
import Title from "../layout/Titles";
import Label from "../layout/Label";
import ProjectNew from "./ProjectNew";
import ProjectList from "./ProjectsList";
import Header from "../layout/Header";
import NameUser from "../layout/NameUser";
import ButtonList from "../layout/ButtonList";
import Menu from "../layout/Menu";
import ButtonToggle from "../layout/ButtonToggle";
import Overlay from "../layout/Overlay";
import TaskForm from "../tasks/TaskForm";
import TaskList from "../tasks/TaskList";
import ThemeContext from "../../context/projects/ThemeContext";
import ProjectContext from "../../context/projects/ProjectContext";

const Projects = () => {
  const [color, setColor] = useState("#A5BFBE");
  const [textColor, setTextColor] = useState("black");
  const [hover, setHover] = useState("#E42F8A");
  const [menu, setMenu] = useState(false);

  // context project state
  const projectContext = useContext(ProjectContext);
  const { currentProject } = projectContext;

  // Metodo para cambiar los colores del tema -> parametro obtenido del select {options} -> colores
  const changeColor = (color) => {
    setColor(color.value);  // --> se cambia el color 

    // validación para los colores del texto
    if (
      color.value === "#F0F8FF" ||
      color.value === "#ADFF2F" ||
      color.value === "#FFFF00" ||
      color.value === "#7FFFD4" ||
      color.value === "#A5BFBE"
    ) {
      setTextColor("black");
    } else {
      setTextColor("white");
    }

    //validacion para los colores del hover
    if(color.value === '#FF6347' || color.value === '#E42F8A'){
      setHover('black')
    }else{
      setHover('#E42F8A')
    }
  };

  // Boton menu responsive
  const menuToggle = () => {
    setMenu(!menu);
  };

  // Guardando el tema elegido en el localstorage
  useEffect(() => {
    const colorDefault = localStorage.getItem("color");
    const textColorDefault = localStorage.getItem("colorText");
    const hoverDefault = localStorage.getItem("hover");

    if (colorDefault) {
      setColor(colorDefault);
    }
    if (textColorDefault) {
      setTextColor(textColorDefault);
    }
    if(hoverDefault){
      setHover(hoverDefault);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("color", color);
    localStorage.setItem("colorText", textColor);
    localStorage.setItem("hover", hover)
  });

  return (
    <ContainerApp>
      <ThemeContext.Provider value={setMenu}>
        
      {/* Sidebar */}
      <SideBar bordercolor={color === '#A5BFBE' ? 'rgb(128,154,153,0.7)' : 'rgb(178,178,178,0.5)'} changeColor={color}>
        <Title margin='0 0 30px 0' fontsize="1.875em" color={textColor}>
          Gestiona tus Proyectos
        </Title>
        <ProjectNew hover={hover} bcolor={color} color={textColor} />

        <Label
          textColor={textColor}
          size="16px"
          width="200px"
          display="inline-block"
          margin="20px 0px 10px 0px"
        >
          Personalizar tema
        </Label>
        <SelectColor changeColor={changeColor} />

        <Title
          fontsize="20px"
          margin="30px 0px 0px 0px"
          marginxs="40px 0px 0px 0px"
          color={textColor}
        >
          Tus proyectos creados
        </Title>
        <MarginProject>
          <ProjectList hoverColor={hover} color={color} colorText={textColor} />
        </MarginProject>
      </SideBar>

      <ContainerMain>
        
      {/* Header */}
        <Header bgcolor={color}>
          <NameUser colorText={textColor}>
            <ButtonToggle colorText={textColor} onClick={menuToggle}>
              &#xf0c9;
            </ButtonToggle>
            Hola <span>Javier</span>
          </NameUser>
          <ButtonList hoverColor={hover} margin="0px" colorText={textColor}>
            Cerrar sesion &#xf08b;
          </ButtonList>
        </Header>

            <main>
              {currentProject
                ? <TaskForm />
                : null
              }
              <ContainerTask>
                <TaskList />
              </ContainerTask>
            </main>

        {/* Menu dispositivos celulares */}
          <Menu transform={menu ? '0' : 'translateX(-110%)'} changeColor={color}>
            <ButtonToggle margin='-15px 0 15px -15px' colorText={textColor} onClick={menuToggle}>
              &#xf0c9;
            </ButtonToggle>
            <Title margin='-8px 0 20px 0' color={textColor}>Gestiona tus Proyectos</Title>
            <ProjectNew hover={hover} bcolor={color} color={textColor} />

            <Label
              textColor={textColor}
              size="14px"
              width="200px"
              display="inline-block"
              margin="10px 0px 0px 0px"
              marginsm='40px 0 10px 0'
            >
              Personalizar tema
            </Label>
            <SelectColor changeColor={changeColor} />

            <Title
              fontsize="20px"
              margin="40px 0px 0px 0px"
              marginxs="30px 0px 0px 0px"
              color={textColor}
            >
              Tus proyectos creados
            </Title>
            <MarginProject>
              <ProjectList hoverColor={hover} color={color} colorText={textColor} />
            </MarginProject>
          </Menu>
          {menu 
          
            ? <Overlay 
                onClick={menuToggle}
              />
            : null

          }
    
      </ContainerMain>
      </ThemeContext.Provider>
    </ContainerApp>
  );
};

export default Projects;
