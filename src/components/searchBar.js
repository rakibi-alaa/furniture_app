import React from 'react';
import {SafeAreaView,View,Text,} from 'react-native'
import styled from 'styled-components';
import Svg, { Circle, Line,Path,G } from 'react-native-svg';

const Container = styled.View`
width : 100%;
height : 50px;
flex-direction : row;
justify-content : space-between;
align-items : center;
padding : 0px 10px;
border-radius : 6px;
background-color : rgba(255,255,255,.4);
margin : 15px 0px;
`
const Input = styled.TextInput`
    width : 88%;
    height : 100%;
    color : white;
    font-size : 16px;
`

export default function SearchBar() {
    return (
            <Container >
                <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="32" height="32" viewBox="0 0 24 24" stroke-width="3" stroke="#FFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <Path stroke="none" d="M0 0h24v24H0z" />
                    <Circle cx="10" cy="10" r="7" strokeWidth="2"/>
                    <Line x1="21" y1="21" x2="15" y2="15" strokeWidth="2" />
                </Svg>
                <Input/>
            </Container>
    ) 
}
