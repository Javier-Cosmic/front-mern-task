import React, {useState} from 'react';
import ProjectContent from './ProjectContent'
import ListProject from '../layout/ListProject';

const ProjectsList = ({hoverColor, color, colorText}) => {

    const projects = [
        {name: 'Login'},
        {name: 'Ecommerce'},
        {name: 'Diseño'},
        {name: 'nse'},
        {name: 'xxx'},
        {name: 'soloinvento'},
        {name: 'soloinvento'},
        {name: 'soloinvento'},
        {name: 'soloinvento'},
        {name: 'soloinvento'},
        {name: 'soloinvento'},
    ] 

    return (
        <ListProject>
            {projects.map(proyecto => (
                <ProjectContent
                    hoverColor={hoverColor}
                    colorText={colorText}
                    project={proyecto}
                    color={color}
                />
            ))}
        </ListProject>
    ) 
}

export default ProjectsList;