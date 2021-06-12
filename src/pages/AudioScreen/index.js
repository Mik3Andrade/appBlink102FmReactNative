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
      if (playPauseController == false) {
        setPlayIcon(!playIcon);
        playAndroid();
      } else {
        if (playVideoPlayer == false) {
          pauseAndroid();
          setPlayIcon(true);
          this.playerVideo.onStartPress();
          setPlayVideoPlayer(true);
        } else {
          setPlayIcon(false);

          this.playerVideo.stop();

          setPlayVideoPlayer(!playVideoPlayer);
        }
      }
    } else {
      if (playPauseController == false) {
        setPlayIcon(!playIcon);
        playpauseControl();
      } else {
        if (playVideoPlayer == false) {
          ReactNativeAudioStreaming.pause();
          setPlayIcon(true);
          this.playerVideo.onStartPress();
          setPlayVideoPlayer(true);
        } else {
          setPlayIcon(false);

          this.playerVideo.stop();

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
                'https://video01.logicahost.com.br/blink102/blink102/playlist.m3u8',
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
                'https://firebasestorage.googleapis.com/v0/b/blink-102-rn.appspot.com/o/banner-locutores.jpg?alt=media&token=18a3c809-fc77-40ee-b17a-4c0569259cab',
            }}
            ref={(r) => (this.playerVideo = r)}
          />
        </View>

        <Image
          style={styles.imageInfo}
          source={require('../../assets/voce-escolhe-a-forma-v4.png')}
        />
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
          <PlayerAudio style={{backgroundColor: '#242424'}} />
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
    width: '100%',

    zIndex: 2,
  },
  imageInfo: {
    resizeMode: 'contain',
    marginTop: '5%',
    width: '100%',
    height: '45%',
  },
  btnPlayPauseContainer: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%',
    alignItems: 'center',
    width: '100%',
    zIndex: 1,
  },
  btnPlayPause: {
    resizeMode: 'contain',
    width: 70,
    height: '80%',
    marginLeft: 30,
  },
  btnPlayPauseVideoPlayer: {
    width: 45,
    height: 45,
  },
  playerAudioContainer: {
    width: '100%',
    resizeMode: 'contain',
    height: '5%',
  },
  btnPlayPauseIcon: {
    flex: 1,
    marginTop: 5,
    resizeMode: 'contain',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '70%',
  },
  btnPlayPauseIconVideoPlayer: {
    width: 45,
    height: 45,
  },
});
