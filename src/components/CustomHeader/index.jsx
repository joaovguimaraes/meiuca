import React from 'react';

import styled from 'styled-components/native';

export const AppHeader = styled.View`
    background-color: ${props => props.theme.brand.color.primary[3].value};
    height: 10%;
    justify-content: center;
    align-items: center;
`;

export const HeaderText = styled.Text`
    margin-top: 10;
    font-family: ${props => props.theme.font.family.highlight.value};
    font-weight: ${props => props.theme.font.weight.bold.value};
    font-size: ${props => props.theme.font.size.lg.value};
    color: ${props => props.theme.neutral.color[1].value};
`;

function CustomHeader(){
    return(
        <AppHeader>
            <HeaderText>NEWS</HeaderText>
        </AppHeader>
    )
};

export default CustomHeader;