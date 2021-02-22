import React from 'react';
import {View, Text} from 'react-native';
import PlayerRadio from '../Player';

export default function Home() {
    return(
        <View style={{backgroundColor:"#000", width:"100%", height:"100%"}}>
            <PlayerRadio/>
        </View>
    );
}