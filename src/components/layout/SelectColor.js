import React from 'react';
import styled from 'styled-components';
import Select from "react-select";
import {colors} from './Colors';

const StyleSelect = styled(Select)`
    font-size: 14px;

    @media(max-width: 600px){
        font-size: 1.6em;
        height: 40px;
    }
`;

const styles = {
    control: base => ({
      ...base,
     
    }),
    menu: base => ({
      ...base,

    })
};

const SelectColor = ({changeColor}) => (
    <StyleSelect 
        onChange={changeColor}
        styles={styles} 
        input={false}
        label='select color'
        options={colors} 
        autoFocus={false}
        placeholder='Seleccionar color'
        theme={theme => ({
            ...theme,
            borderRadius: 4,
            colors: {
              ...theme.colors,
              primary25: '#E6FF7F',
              primary: 'black',
            },
        })}
    />
)

export default SelectColor;