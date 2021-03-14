import React, {useState, useEffect} from 'react';
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerEvents,
  TrackPlayerEvents,
  getCurrentTrack,
} from 'react-native-track-player';
import {
  NativeModules,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  DeviceEventEmitter,
  ActivityIndicator,
  Platform,
} from 'react-native';

// that image is loaded without an image if it has no image without metadata
const imageBackground =
  'https://firebasestorage.googleapis.com/v0/b/blink-102-rn.appspot.com/o/icon.png?alt=media&token=51bb121e-67f6-431c-8e7f-e8f6a2b5bc9f';

// this is the initial of the notification
import icone from '../../assets/icone.png';

export function playAndroid() {
  this.playerVideo.pause();
  console.log('Caiu no Son');
  global.playPlayer();
}

export function pauseAndroid() {
  global.pausePlayer();
}

export function PlayerAudio() {
  const [url] = useState(
    'https://playerservices.streamtheworld.com/api/livestream-redirect/BLINK102FMAAC.aac',
  );
  const [play, setPlay] = useState(false);
  const events = [
    TrackPlayerEvents.REMOTE_PLAY,
    TrackPlayerEvents.REMOTE_STOP,
    TrackPlayerEvents.PLAYBACK_METADATA_RECEIVED,
  ];

  const url2 = url;
  const track2 = {url: url2};

  const [track, setTrack] = useState({
    album: '',
    artist: '',
    date: '',
    genre: '',
    source: imageBackground,
    title: '',
    artwork: icone,
  });
  const playbackState = usePlaybackState();

  async function setup() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ],
      notificationCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ],

      // Icone da notificacao
      icon: icone,
    });
  }

  global.pausePlayer = async function pausePlayerF() {
    await TrackPlayer.pause();
  };

  global.playPlayer = async function handlePlayStop() {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add(track2);
      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.reset();
        await TrackPlayer.add(track2);
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  useEffect(() => {
    setup();

    TrackPlayer.addEventListener(
      'playback-metadata-received',
      async (response) => {
        console.log('O que tem no data', response);
        const {album, artist, genre, source, title} = response;
        const currentTrack = await TrackPlayer.getCurrentTrack();
        const data = {
          album,
          artist,
          genre,
          source:
            track.source !== '' && track.source !== 'icy'
              ? track.source
              : imageBackground,
          title: title,
          url: url,
          artwork: imageBackground,
        };
        setTrack(data);
        await TrackPlayer.updateMetadataForTrack(currentTrack, data);
      },
    );

    TrackPlayer.addEventListener('remote-stop', async (response) => {
      console.log('Caiu no stop');
      setPlay(false);
    });

    TrackPlayer.addEventListener('remote-pause', async (response) => {
      console.log('Caiu no pause', play);
      setPlay(false);
    });

    TrackPlayer.addEventListener('remote-play', async (response) => {
      console.log('Caiu no play', play);
      setPlay(true);
    });
  }, []);

  return (
    <View style={styles.ContainerView}>
      <Text style={styles.textTrackTitle}>{track.artist}</Text>
      <Text style={styles.textTrackArtist}>{track.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerView: {},
  ContainerItems: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  btnImgPlay: {
    width: 46,
    height: 46,
    alignItems: 'center',
  },
  textContainer: {
    width: '100%',
  },
  textTrackTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTrackArtist: {
    textAlign: 'center',
    fontSize: 19,
    color: '#000',
    fontWeight: 'bold',
  },
});
