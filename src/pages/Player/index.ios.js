import React from 'react';
import { View } from 'react-native';
import { Player } from 'react-native-audio-streaming';

export default function PlayerIos() {
 return (
    <View style={{backgroundColor:"#fff", width:"100%", height:"100%"}}>
        <Player url={"http://playerservices.streamtheworld.com/api/livestream-redirect/BLINK102FMAAC.aac"} />
    </View>
  );
}