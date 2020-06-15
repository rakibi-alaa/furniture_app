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
    z-index : -10;
`
const Item = styled.View`
    width : 100%;
    height : 150px;
    border-radius : 20px;
    background-color : #FFF;
    margin-bottom : 45px;
    z-index : -1;
    position : relative;
`
const ItemInnerContainer = styled.View`
    flex-direction : row;
    width : 100%;
    height:100%;
    border-radius :20px;
    
    
`
const ItemDetail = styled.View`
   width:50%;
   overflow : hidden;
   height : 100%;
   padding-left : 20px;
   padding-top :20px;
   position:relative;
`
const ItemTitle = styled.Text`
    font-size : 20px;
    font-weight : 600;
`
const ItemPriceContainer = styled.View`
    background-color:pink;
    position:absolute;
    bottom :0px;
    padding : 8px 15px;
`


const _renderItem = ({item,index}) =>{
    console.log(item.image)
    return (
        <TouchableWithoutFeedback onPress={()=>{alert('here')}}>
            <Item key={item.id} style={{borderRightWidth : 5,borderRightColor: index %2 == 0 ? '#329ba8' : 'coral',shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.13,shadowRadius: 2.62,elevation: 2}}>
                <ItemInnerContainer >
                    <ItemDetail style={{borderRadius : 20}}>
                        <ItemTitle>{item.title}</ItemTitle>
                        <ItemPriceContainer style={{borderTopRightRadius : 20}}>
                            <Text>{item.price} $</Text>
                        </ItemPriceContainer>
                    </ItemDetail>
                    
                    <SharedElement width="50%"  id={`item.${item.id}.photo`}>
                        <Image source={{uri :item.image}} style={{width : 170,height : 160,top:-30,alignSelf: 'center'}} />
                    </SharedElement>
                   
                    
                </ItemInnerContainer>
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
                contentContainerStyle={{paddingHorizontal:20,paddingTop:30}}
                data={data.products} 
                renderItem={_renderItem}
                keyExtractor={item => item.id + ''}/>
        </Container>
    ) 
}
