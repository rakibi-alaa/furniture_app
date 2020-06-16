import React from 'react';
import {SafeAreaView,View,Text,} from 'react-native'
import styled from 'styled-components';
import Svg, { Circle, Line,Path,G } from 'react-native-svg';


const ColorSelectorCtn = styled.View`
    width : 90px;
    margin: 0px auto;
    margin-bottom : 30px;
    flex-direction : row;
    justify-content : space-around;

    align-items:center;
`
const ColorSelector = styled.TouchableOpacity`
    width : 24px;
    height: 24px;
    border-radius : 14px;
    border : 2px solid #FFF;
`

const Color = styled.View`
    width : 100%;
    height: 100%;
    border: 2px solid #FFF;
    border-radius : 12px;
    background-color : green;
`

export default function ColorSelectors() {
    return (
        <ColorSelectorCtn>
            <ColorSelector style={{borderColor : 'rgba(203,203,169,.7)'}}>
                <Color style={{backgroundColor : 'rgb(203,203,169)'}}/>
            </ColorSelector>
            <ColorSelector style={{borderColor : 'rgba(255,165,0,.7)'}} >
                <Color style={{backgroundColor : 'rgb(255,165,0)'}}/>
            </ColorSelector>
            <ColorSelector style={{borderColor : 'rgba(136,184,231,.7)'}}>
                <Color style={{backgroundColor : 'rgb(136,184,231)'}}/>
            </ColorSelector>
        </ColorSelectorCtn>
    ) 
}
