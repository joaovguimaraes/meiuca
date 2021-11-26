import React from 'react';
import styled from 'styled-components/native';

export const ButtonPrimary = styled.TouchableHighlight`
    width: 60%;
    align-items: center;
    line-height: 100px;
    border-radius: ${props => props.theme.radius.size.none.value};
    padding: ${props => props.theme.spacing_squish.size.xs.stack.value};
    color: ${props => props.theme.neutral.color[3].value};
    background: ${props => props.theme.brand.color.primary[3].value};
`;

export const ButtonText = styled.Text`
    font-size: ${props => props.theme.font.size.sm.value};
    color: ${props => props.theme.neutral.color[1].value};
`;

function click() {
    console.log("click")
}



function CustomButton(props){
    return(
        <ButtonPrimary activeOpacity={0.6}  onPress={click} underlayColor="#8F260A">
            <ButtonText>Saber Mais</ButtonText>
        </ButtonPrimary>
    )
};

export default CustomButton;