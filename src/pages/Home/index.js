import React from 'react';
import {View, Text, TouchableOpacity,SafeAreaView} from 'react-native';
import PlayerRadio from '../Player';
import VideoPlayer from 'react-native-video-player';
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';

export default function Home() {
    return(
        <SafeAreaView>
            <View style={{backgroundColor:"#74B868", width:"100%", height:"100%"}}>
                <View style={{backgroundColor:'#d00',width:'100%'}}>
                    <VideoPlayer 
                        video={{ uri: 'https://5ad482a77183d.streamlock.net/contatoblink102.com.br/contatoblink102.com.br/playlist.m3u8' }}
                        videoWidth={1920}
                        duration={1}
                        videoHeight={980}
                        onStart={ function teste (){
                            ReactNativeAudioStreaming.pause();
                        }}
                        onPlayPress={ function teste (){
                            ReactNativeAudioStreaming.pause();
                        }}
                        thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                        ref={r => this.playerVideo = r}
                    />
                </View >

                <View style={{backgroundColor:'#242424',justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:60}}>
                <TouchableOpacity style={{backgroundColor:'#000', width:100, height:40, borderRadius:25}} onPress={() => this.playerVideo.pause()}>
                        <Text style={{color:'#fff',marginLeft:35,marginTop:10}}>Play</Text>
                 </TouchableOpacity>
                </View>

                <View style={{backgroundColor:'#242424',justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:60}}>
                <TouchableOpacity style={{backgroundColor:'#000', width:100, height:40, borderRadius:25}} onPress={() => {
                     
                } }>
                        <Text style={{color:'#fff',marginLeft:0,marginTop:10}}>pause audio</Text>
                 </TouchableOpacity>
                </View>

                <View style={{backgroundColor:'#242424',width:'100%',height:80, position:'absolute',bottom:0,left:0}}>
                    <PlayerRadio/>
                </View>
            </View>
        </SafeAreaView>
    );
}


