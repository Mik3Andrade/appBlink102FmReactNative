import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Text,
} from 'react-native';
import {
  PlayerAudio,
  playpauseControl,
  playAndroid,
  pauseAndroid,
} from '../Player';
import VideoPlayer from 'react-native-video-player';
import {ReactNativeAudioStreaming} from 'react-native-audio-streaming';

export default function Home() {
  const [playIcon, setPlayIcon] = useState(false);

  const [playVideoPlayer, setPlayVideoPlayer] = useState(false);

  const [playPauseController, setPlayPauseController] = useState(false);

  function playPause() {
    if (Platform.OS === 'android') {
      console.log('Caiu no Android');
      if (playPauseController == false) {
        setPlayIcon(!playIcon);
        playAndroid();
      } else {
        if (playVideoPlayer == false) {
          setPlayIcon(true);
          this.playerVideo.onStartPress();
          setPlayVideoPlayer(true);
        } else {
          setPlayIcon(false);
          this.playerVideo.pause();
          setPlayVideoPlayer(!playVideoPlayer);
        }
      }
    } else {
      console.log('que estranho');
      if (playPauseController == false) {
        setPlayIcon(!playIcon);
        playpauseControl();
      } else {
        if (playVideoPlayer == false) {
          setPlayIcon(true);
          this.playerVideo.onStartPress();
          setPlayVideoPlayer(true);
        } else {
          setPlayIcon(false);
          this.playerVideo.pause();
          setPlayVideoPlayer(!playVideoPlayer);
        }
      }
    }
  }

  function playPauseSetController() {
    setPlayIcon(false);
    console.log(playPauseController);
    setPlayPauseController(!playPauseController);
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.videoPlayerContainer}>
          <VideoPlayer
            video={{
              uri:
                'https://5ad482a77183d.streamlock.net/contatoblink102.com.br/contatoblink102.com.br/playlist.m3u8',
            }}
            videoWidth={1600}
            duration={1}
            videoHeight={900}
            onStart={() => {
              if (Platform.OS === 'android') {
                pauseAndroid();
              } else {
                ReactNativeAudioStreaming.pause();
              }
            }}
            onPlayPress={() => {
              if (Platform.OS === 'android') {
                pauseAndroid();
              } else {
                ReactNativeAudioStreaming.pause();
              }

              setPlayIcon(!playIcon);
            }}
            thumbnail={{
              uri:
                'https://static.biologianet.com/2020/05/jacare-do-papo-amarelo.jpg',
            }}
            ref={(r) => (this.playerVideo = r)}
          />
        </View>

        <View style={{width:'100%',height:'35%',marginTop:40}}>
          <View
            style={{
              backgroundColor: '#f44',
              width: '70%',
              height: '100%',
              position: 'absolute',
              alignSelf: 'center',
            }}></View>
        </View>
        <View style={styles.btnPlayPauseContainer}>
          <TouchableOpacity
            style={styles.btnPlayPauseVideoPlayer}
            onPress={playPauseSetController}>
            <Image
              style={styles.btnPlayPauseIconVideoPlayer}
              source={
                playPauseController
                  ? require('../../assets/radioIcon.png')
                  : require('../../assets/tvIcon.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnPlayPause} onPress={playPause}>
            <Image
              style={styles.btnPlayPauseIcon}
              source={
                playIcon
                  ? require('../../assets/pause2.png')
                  : require('../../assets/play2.png')
              }
            />
          </TouchableOpacity>
        </View>

        <View style={styles.playerAudioContainer}>
          <PlayerAudio ref={(component) => (this.PlayerAudio = component)} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#74B868',
  },
  container: {
    backgroundColor: '#74B868',
    width: '100%',
    height: '100%',
  },
  videoPlayerContainer: {
    backgroundColor: '#74B868',
    width: '100%',
    zIndex: 2,
  },
  btnPlayPauseContainer: {
    marginTop:30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    height: 70,

    width: '100%',
    zIndex: 1,
  },
  btnPlayPause: {
    width: 70,
    height: 70,
    marginLeft: 30,
  },
  btnPlayPauseVideoPlayer: {
    width: 45,
    height: 45,
  },
  playerAudioContainer: {
    backgroundColor: '#242424',
    width: '100%',
  },
  btnPlayPauseIcon: {
    width: 70,
    height: 70,
  },
  btnPlayPauseIconVideoPlayer: {
    width: 45,
    height: 45,
  },
});
