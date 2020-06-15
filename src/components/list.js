import React from 'react';
import {Dimensions,View,Text,Image, FlatList,TouchableWithoutFeedback} from 'react-native'
import styled from 'styled-components';
import Svg, { Circle, Line,Path,G } from 'react-native-svg';
import data from '../data.json'
import { SharedElement } from 'react-navigation-shared-element';
const { width, height } = Dimensions.get('window');
const Container = styled.View`
    width : ${width}px;
    height : 100%;
    margin : 25px 0px;
`
const BackDrop = styled.TouchableOpacity`
    width : ${width}px;
    height : 93%;
    background-color : #f4f4f4;
    position : absolute;
    bottom : 0px;
    left : 0px;
    z-index : -1;
`
const Item = styled.View`
    width : 100%;
    height : 150px;
    border-radius : 20px;
    background-color : #FFF;
    margin-bottom : 25px;;
`

const ItemDetail = styled.Text`
   
`
const _renderItem = ({item,index}) =>{
    return (
        <TouchableWithoutFeedback>
            <Item key={item.id} style={{borderRightWidth : 5,borderRightColor: '#000',shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.13,shadowRadius: 2.62,elevation: 2}}>
                <ItemDetail>
                    
                </ItemDetail>
                <SharedElement id={`item.${item.id}.photo`}>
                    <Image source={item.photoUrl} />
                </SharedElement>
            </Item>
        </TouchableWithoutFeedback>
    )
}
export default function List() {
    return (
        <Container >
            <BackDrop style={{borderTopLeftRadius:50,borderTopRightRadius:50}} />
            <FlatList
            style={{marginBottom : 150}}
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{paddingHorizontal:20,}}
                data={data.categories} 
                renderItem={_renderItem}
                keyExtractor={item => item.id + ''}/>
        </Container>
    ) 
}
