import React from 'react';
import { View } from 'react-native'

import styled from 'styled-components/native';
import { Shape, HeadingSm, SubtitleSm, Paragraph } from '../../styles/styles'

import CustomButton from '../CustomButton';

//estilo headingsm dentro do cardcomponent
const CardHeader = styled(HeadingSm)`
    margin-bottom: ${props => props.theme.spacing.size.xxxs.value};
`
//estilo subtitlesm dentro do cardcomponent
const CardSubtitle = styled(SubtitleSm)`
    margin-bottom: ${props => props.theme.spacing.size.xxs.value};
`
//estilo paragraph dentro do cardcomponent
const CardParagraph = styled(Paragraph)`
    margin-bottom: ${props => props.theme.spacing.size.sm.value};
`
//COMPONENT CARDCONTENT
function CardContent(props){
    return(
            <View>    
                <Shape>
                    <CardHeader>{props.heading}</CardHeader>
                    <CardSubtitle>{props.subtitle}</CardSubtitle>
                    <CardParagraph>{props.paragraph}</CardParagraph>
                    <CustomButton text="Saber Mais" link={props.link}/>
                </Shape>
            </View>
    );
}

export default CardContent;