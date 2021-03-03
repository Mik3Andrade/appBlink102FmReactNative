import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Player} from 'react-native-audio-streaming';
import {ReactNativeAudioStreaming} from 'react-native-audio-streaming';
import VideoPlayer from 'react-native-video-player';


export function teste() {
 
  const url =
    'http://playerservices.streamtheworld.com/api/livestream-redirect/BLINK102FMAAC.aac';

  this.playerVideo.pause();
  if (this.Player.state.status == 'STOPPED') {
    ReactNativeAudioStreaming.play(url, {
      showIniOSMediaCenter: true,
      showInAndroidNotifications: true,
    });
    console.log(this.Player.state.status);
  } else {
  }
  if (this.Player.state.status == 'STREAMING') {
    ReactNativeAudioStreaming.pause();
    console.log(this.Player.state.status + ' ' + 'MEIO');
    this.Player.setState({status: Player.STOPPED});
    console.log(this.Player.state.status + ' ' + 'FIM');
  } else {
    ReactNativeAudioStreaming.play(url, {
      showIniOSMediaCenter: true,
      showInAndroidNotifications: true,
    });
  }
}

export function PlayerAudio() {
  return (
    <View style={{backgroundColor: '#fff', width: '100%', height: '100%'}}>
      <Player
        url={
          'http://playerservices.streamtheworld.com/api/livestream-redirect/BLINK102FMAAC.aac'
        }
        ref={(e) => (this.Player = e)}
      />
    </View>
  );
}

// switch (this.Player.state.status) {

//   case (this.Player.state.status == 'PLAYING'):
//     console.log('1');
//   case (this.Player.state.status == 'STREAMING'):
//     console.log('1');
//       ReactNativeAudioStreaming.pause();
//       break;
//   case (this.Player.state.status == 'PAUSED'):
//     console.log('1');
//       ReactNativeAudioStreaming.resume();
//       break;
//   case (this.Player.state.status == 'STOPPED'):
//     console.log('1');
//   case (this.Player.state.status == 'ERROR'):
//     console.log('1');
//       ReactNativeAudioStreaming.play(this.props.url, {showIniOSMediaCenter: true, showInAndroidNotifications: true});
//       break;
//   case (this.Player.state.status == 'BUFFERING'):
//     console.log('1');
//       ReactNativeAudioStreaming.stop();
//       break;
// }
