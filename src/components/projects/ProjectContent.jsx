import React, { useState, Fragment } from "react";
import ButtonList from "../layout/ButtonList";
import Button from "../layout/Button";
import ContainerProject from "../layout/ContainerProject";

const ProjectContent = ({ hoverColor, color, colorText, project }) => {
  return (
    <Fragment>
      <ContainerProject>
        <ButtonList hoverColor={hoverColor} colorText={colorText}>{project.name}</ButtonList>
        <Button
          buttonMenuX
          marginxs="-10px 0 0 0"
          paddingxs="0"
          padding="0"
          width="10%"
          display="flex"
          bcolor={color}
          color={colorText}
          hovernoBG
          hoverColor={hoverColor}
        >
          &#xf1f8;
        </Button>
      </ContainerProject>
    </Fragment>
  );
};

export default ProjectContent;
