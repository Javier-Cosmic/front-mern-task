import React, { useState, useContext, useEffect } from "react";
import ProjectContent from "./ProjectContent";
import Paragraph from "../layout/Paragraph";
import ProjectContext from "../../context/projects/ProjectContext";

const ProjectsList = ({hoverColor, color, colorText }) => {
    // context project state
    const projectContext = useContext(ProjectContext);

    // extraemos los estados y funciones de project state desde el context
    const { projects, getProject } = projectContext;

    useEffect(() => {
        getProject();
    }, []);

    // validamos si no hay proyectos
    if (projects.length === 0) {
        return (
        <Paragraph
            margin="10px 0 0 0px"
            fontsize="12px"
            fontsizexs="14.4px"
            fontsizesm="18px"
            marginsm="10px"
            color={colorText}
        >
            Empieza creando tu primer proyecto
        </Paragraph>
        );
    }

    return (
        <>
        {projects.map((projects) => (
            <ProjectContent
                key={projects._id}
                project={projects}
                hoverColor={hoverColor}
                colorText={colorText}
                color={color}
            />
        ))}
        </>
    );
};

export default ProjectsList;
