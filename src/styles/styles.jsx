import styled from 'styled-components/native';


export const Shape = styled.View`
    width: 90%;
    margin: 5%;
    background-color: ${props => props.theme.neutral.color[1].value};
    border-radius: ${props => props.theme.radius.size.none.value};
    padding: ${props => props.theme.spacing.size.lg.value};
    border-width: ${props => props.theme.border.size.thin.value};
    border-color: ${props => props.theme.neutral.color[2].value};
`;

//CONSERTAR LINE HEIGHT baixar font
export const HeadingSm = styled.Text`
    line-height: 30;
    font-size: ${props => props.theme.font.size.lg.value};
    font-family: ${props => props.theme.font.family.highlight.value};
    font-weight: ${props => props.theme.font.weight.bold.value};
    color: ${props => props.theme.neutral.color[5].value};
`;

export const SubtitleSm = styled.Text`
    line-height: 25;
    font-size: ${props => props.theme.font.size.md.value};
    font-family: ${props => props.theme.font.family.highlight.value};
    font-weight: ${props => props.theme.font.weight.medium.value};
    color: ${props => props.theme.neutral.color[4].value};
`;

export const Paragraph = styled.Text`
    line-height: 25;
    font-size: ${props => props.theme.font.size.xs.value};
    font-family: ${props => props.theme.font.family.highlight.value};
    font-weight: ${props => props.theme.font.weight.regular.value};
    color: ${props => props.theme.neutral.color[4].value};
`;


