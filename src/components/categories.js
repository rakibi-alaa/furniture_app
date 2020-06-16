import React from 'react';
import {FlatList,} from 'react-native'
import styled from 'styled-components';
import data from '../data.json'

const Categorie = styled.TouchableOpacity`
    border-radius : 6px;
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
