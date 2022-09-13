import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #EAEAEA;
    flex: 1;
`;

// VIEW

export const ViewArea = styled.View`
    height: 70px;
    padding-left: 20px;
    align-items: center;
    justify-content: flex-start;
`;

export const HeaderArea = styled.View`
    /* flex: 1; */
    height: 100px;
    width: 100%;
    background-color: #fff;
    justify-content: center;
    border-color: black;
    border-width: 0.2px;
      
`

export const HandleButton = styled.TouchableOpacity`
    background-color: #8C8C8C;
    width: 80%;
    height: 35px;
    border-radius: 30px;
    margin-bottom: 20px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
`;

export const FlatList = styled.FlatList`
    margin-bottom: 20px;
    width: 100%;
    height: 80%;
`;

export const HorizontalList = styled.FlatList`
    width: 250px;
    height: 90px;
    border-radius: 30px;
    margin-left: 15px;
    padding-left: 12px;
    background-color: #CCCCCC;
`;

export const ImageProfile = styled.Image`
    width: 280px;
    height: 280px;
    border-radius: 200px;
    margin-bottom: 40px;
`;

// TEXT
export const HandleButtonText = styled.Text`
    font-size: 16px;
    text-align: center;

`;

export const Title = styled.Text`
    font-size: 23px;
    font-weight: bold;
    margin-left: 25px;
    margin-top: 10px;
`;

export const SimpleText = styled.Text`
    font-size: 20px;
    margin-top: 20px;
`;

