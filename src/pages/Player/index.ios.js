import React, {useState} from 'react';
import {View} from 'react-native';
import {Player} from 'react-native-audio-streaming';
import {ReactNativeAudioStreaming} from 'react-native-audio-streaming';

export function playpauseControl() {
  const url =
    'http://playerservices.streamtheworld.com/api/livestream-redirect/BLINK102FMAAC.aac';

  this.playerVideo.pause();

  const statusPlayer = this.Player.state.status;
  const playingPlayer = 'PLAYING';
  const streamingPlayer = 'STREAMING';
  const pausedPlayer = 'PAUSED';
  const stoppedPlayer = 'STOPPED';
  const errorPlayer = 'ERROR';
  const bufferingPlayer = 'BUFFERING';

  switch (statusPlayer) {
    case playingPlayer:
    case streamingPlayer:
      ReactNativeAudioStreaming.stop();
      break;
    case pausedPlayer:
      ReactNativeAudioStreaming.play(url, {
        showIniOSMediaCenter: true,
        showInAndroidNotifications: true,
      });
      break;
    case stoppedPlayer:
    case errorPlayer:
      ReactNativeAudioStreaming.play(url, {
        showIniOSMediaCenter: true,
        showInAndroidNotifications: true,
      });
      break;
    case bufferingPlayer:
      ReactNativeAudioStreaming.stop();
      break;
  }

  // if (this.Player.state.status == 'STOPPED') {
  //   ReactNativeAudioStreaming.play(url, {
  //     showIniOSMediaCenter: true,
  //     showInAndroidNotifications: true,
  //   });
  //   console.log(this.Player.state.status);
  // } else {
  // }
  // if (this.Player.state.status == 'STREAMING') {
  //   ReactNativeAudioStreaming.stop();
  //   console.log(statusPlayer + ' ' + 'MEIO');
  //   this.Player.setState({status: Player.STOPPED});
  //   console.log(statusPlayer + ' ' + 'FIM');
  // } else {
  //   ReactNativeAudioStreaming.play(url, {
  //     showIniOSMediaCenter: true,
  //     showInAndroidNotifications: true,
  //   });
  // }
}

export function PlayerAudio() {
  return (
    <View style={{backgroundColor: '#74B868', width: '100%',height:100}}>
      <Player
        style={{backgroundColor: '#74B868',}}
        url={
          'http://playerservices.streamtheworld.com/api/livestream-redirect/BLINK102FMAAC.aac'
        }
        ref={(e) => (this.Player = e)}
      />
    </View>
  );
}
