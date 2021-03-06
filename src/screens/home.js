import React from 'react';
import {SafeAreaView,View,Text,Platform} from 'react-native'
import styled from 'styled-components';
import Svg, { Circle, Line,Path,G } from 'react-native-svg';

import SearchBar from '../components/searchBar'
import Categories from '../components/categories'
import List from '../components/list'

const Container = styled.SafeAreaView`
width : 100%;
height:100%;
background-color : #0459a5;
position : relative;
padding-top : ${Platform.OS === 'android' ? 30 : 0}px;

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
line-height : 26px;
font-weight : 700;
`
const Home = (props)=>{
        return(
            <Container>
                <View style={{paddingHorizontal : 15,paddingTop : 10}}>
                <Header>
                        <HeaderTitle>Dashboard</HeaderTitle>
                        <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <Path stroke="none" d="M0 0h24v24H0z"/>
                            <Path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <Circle cx="19" cy="15" r="3" fill="red" />
                            <Path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </Svg>
                </Header>
                    <SearchBar />
                    <Categories />
                    
                </View>
                <List navigation={props.navigation}/>
            </Container>
        )
}
export default Home;