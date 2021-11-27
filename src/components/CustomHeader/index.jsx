import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

//estilo do header
export const AppHeader = styled.View`
    background-color: ${props => props.theme.brand.color.primary[3].value};
    height: 10%;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

//estilo do texto do header
export const HeaderText = styled.Text`
    margin-top: ${Platform.OS === 'android' ? 40 : 20}px;
    font-family: ${props => props.theme.font.family.highlight.value};
    font-weight: ${props => props.theme.font.weight.bold.value};
    font-size: ${props => props.theme.font.size.lg.value};
    color: ${props => props.theme.neutral.color[1].value};
`;

//COMPONENT HEADER
function CustomHeader(){
    return(
        <AppHeader>
            <HeaderText>NEWS</HeaderText>
        </AppHeader>
    )
};

export default CustomHeader;