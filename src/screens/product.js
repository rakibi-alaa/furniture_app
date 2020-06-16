import React from 'react';
import {SafeAreaView,View,Image} from 'react-native'
import styled from 'styled-components';
import Svg, { Circle, Line,Path,G } from 'react-native-svg';

import { SharedElement } from 'react-navigation-shared-element';

const Container = styled.SafeAreaView`
width : 100%;
height:100%;
background-color : #0459a5;
position : relative;
padding : 50%;

`
const Header = styled.View`
width : 100%;
flex-direction : row;
justify-content : space-between;
align-items : center;
`
const HeaderTitle = styled.Text`
color : #FFF;
font-size : 26px;
line-height : 24px;
font-weight : 700;
`
export default class Product extends React.Component{
    render(){
        const { item } = this.props.route.params;
        return(
            <Container>
                 <SharedElement id={item.id} resizeMode="cover">
                    <Image source={{uri :item.image}} style={{width : 170,height : 160,top:-30,alignSelf: 'center'}} />
                </SharedElement>
            </Container>
        )
    }
}