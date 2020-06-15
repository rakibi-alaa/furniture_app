import React from 'react';
import {SafeAreaView,View,Text, FlatList,} from 'react-native'
import styled from 'styled-components';
import Svg, { Circle, Line,Path,G } from 'react-native-svg';
import data from '../data.json'
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
const Categorie = styled.TouchableOpacity`
    border-radius : 3px;
    overflow : hidden;
    margin-right : 12px;
`
const CategorieItem = styled.Text`
    padding : 5px 10px;
    background-color : rgba(255,255,255,.4);
    color: #FFF;
`
const _renderItem = ({item,index}) =>{
    return (
        <Categorie key={item.id}>
            <CategorieItem >{item.title}</CategorieItem>
        </Categorie>
    )
}
export default function Categories() {
    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data.categories} 
            renderItem={_renderItem}
            keyExtractor={item => item.id + ''}/>
    ) 
}
