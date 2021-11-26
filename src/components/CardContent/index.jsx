import React from 'react';
import { View } from 'react-native'

import styled from 'styled-components/native';
import { Shape, HeadingSm, SubtitleSm, Paragraph } from '../../styles/styles'

import CustomButton from '../CustomButton';

const CardHeader = styled(HeadingSm)`
    margin-bottom: ${props => props.theme.spacing.size.xxxs.value};
`
const CardSubtitle = styled(SubtitleSm)`
    margin-bottom: ${props => props.theme.spacing.size.xxs.value};
`
const CardParagraph = styled(Paragraph)`
    margin-bottom: ${props => props.theme.spacing.size.sm.value};
`
function CardContent(){
    return(
            <View>    
                <Shape>
                    <CardHeader>Heading</CardHeader>
                    <CardSubtitle>Subtitle</CardSubtitle>
                    <CardParagraph>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer when an unknown printer took a galley of type and scrambled. 
                    </CardParagraph>
                    <CustomButton/>
                </Shape>
            </View>
    );
}

export default CardContent;