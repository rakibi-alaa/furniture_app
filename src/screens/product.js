import React from 'react';
import {Text,View,Image,Platform,TouchableOpacity, ScrollView, Dimensions} from 'react-native'
import styled from 'styled-components';
import Svg, { Circle, Line,Path,G } from 'react-native-svg';

import { SharedElement } from 'react-navigation-shared-element';
import ColorSelector from '../components/colorSelector'

//const {width,height} = Dimensions.get('window')
const Container = styled.View`
    width : 100%;
    height:100%;
    background-color : #0459a5;
    position : relative;
`
const SecondContainer = styled.SafeAreaView`
    padding-top : ${Platform.OS === 'android' ? 30 : 0}px;
    width:100%;
    height : 85%;
    background-color : #FFF;
`

const Header = styled.View`
    width : 100%;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
`
const ImageCtn = styled.View`
    width : 100%;
    height : 350px;
    justify-content : center;
    align-items:center;

`
const ProductDetails = styled.View`
    position : absolute;
    bottom : 50px;
    left : 20px;
    width:100%;
    height : 100px;
    padding : 10px 30px 10px 5px ;
    
`
const ProductTitle = styled.Text`
    font-size : 20px;
    font-weight : 600;
`
const ProductPrice = styled.Text`
    margin-top :10px;
    color : #159AE7;
    font-size : 16px;
`
const ProductDescription = styled.Text`
    margin-top :10px;
    font-size : 12px;
`
const BottomCTAContainer= styled.TouchableOpacity`
    width : 60%;
    height : 50px;
    margin : 20px auto;
    flex-direction : row;
    justify-content : center;
    border-radius: 30px;
    align-items:center;
    background-color : #fcbf1e;
`
const BottomCTAText = styled.Text`
    font-size:15px;
    margin-left:10px;
`

const imageBgStyle={
    backgroundColor : '#EDF4ED',
    borderRadius : 120
}
export default class Product extends React.Component{
    render(){
        const { item } = this.props.route.params;
        return(
            <Container >
                
                <SecondContainer style={{borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
                    
                    <View style={{paddingHorizontal: 15,position:'relative',height:'100%',}}>
                        <Header>
                            <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                                <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="38" height="38" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <Path stroke="none" d="M0 0h24v24H0z"/>
                                    <Line x1="5" y1="12" x2="19" y2="12" />
                                    <Line x1="5" y1="12" x2="9" y2="16" />
                                    <Line x1="5" y1="12" x2="9" y2="8" />
                                </Svg>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                            <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <Path stroke="none" d="M0 0h24v24H0z"/>
                                <Circle cx="9" cy="19" r="2" />
                                <Circle cx="17" cy="19" r="2" />
                               
                                <Path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                                <Circle cx="20" cy="9" r="2" fill="red" stroke="red" />
                            </Svg>
                            </TouchableOpacity>
                        </Header>
                        <ImageCtn>
                            <SharedElement id={item.id} {...imageBgStyle}>
                            <Image source={{uri :item.image}} style={{width : 240,height : 240,alignSelf: 'center', transform:[{scale : 1.2}]}} />
                            </SharedElement>
                        </ImageCtn>
                        <ColorSelector/>
                        <ProductDetails>
                            <ProductTitle>
                                {item.title}
                            </ProductTitle>
                            <ProductPrice>
                                ${item.price}
                            </ProductPrice>
                            <ProductDescription>
                                {item.description}
                            </ProductDescription>
                        </ProductDetails>
                    
                    </View>
                
                 {/* <SharedElement id={item.id}>
                    <Image source={{uri :item.image}} style={{width : 170,height : 160,top:-30,alignSelf: 'center'}} />
                </SharedElement> */}
                
                </SecondContainer>
                <BottomCTAContainer>
                    <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <Path stroke="none" d="M0 0h24v24H0z"/>
                        <Circle cx="9" cy="19" r="2" />
                        <Circle cx="17" cy="19" r="2" />
                    
                        <Path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                    </Svg>
                    <BottomCTAText>Add to cart</BottomCTAText>
                </BottomCTAContainer>
                
            </Container>
        )
    }
}