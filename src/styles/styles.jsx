import styled from 'styled-components/native';

//COMPONENT SHAPE
export const Shape = styled.View`
    margin: 1%;
    background-color: ${props => props.theme.neutral.color[1].value};
    border-radius: ${props => props.theme.radius.size.none.value};
    padding: ${props => props.theme.spacing.size.lg.value};
    border-width: ${props => props.theme.border.size.thin.value};
    border-color: ${props => props.theme.neutral.color[2].value};
`;

//COMPONENT HEADINGSM 
export const HeadingSm = styled.Text`
    line-height: 35px;
    font-size: ${props => props.theme.font.size.lg.value};
    font-family: ${props => props.theme.font.family.highlight.value};
    font-weight: ${props => props.theme.font.weight.bold.value};
    color: ${props => props.theme.neutral.color[5].value};
`;

//COMPONENT SUBTITLESM
export const SubtitleSm = styled.Text`
    line-height: 25px;
    font-size: ${props => props.theme.font.size.md.value};
    font-family: ${props => props.theme.font.family.highlight.value};
    font-weight: ${props => props.theme.font.weight.medium.value};
    color: ${props => props.theme.neutral.color[4].value};
`;

//COMPONENT PARAGRAPH
export const Paragraph = styled.Text`
    line-height: 25px;
    font-size: ${props => props.theme.font.size.xs.value};
    font-family: ${props => props.theme.font.family.highlight.value};
    font-weight: ${props => props.theme.font.weight.regular.value};
    color: ${props => props.theme.neutral.color[4].value};
`;

//FLATLIST COMPONENT
export const CustomFlatList = styled.FlatList`
    margin-bottom: 75px;
`;


