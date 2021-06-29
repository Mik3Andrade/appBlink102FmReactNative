import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import api from '../../services/api';
import Notices from './notices-content';

export default function NoticesScreen() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    async function loadNotices() {
      const response = await api.get('feed/json');
      setNotices(response.data);
      console.log(response.data);
    }

    loadNotices();
  }, []);

  return (
    <View
      style={[
        styles.containerView,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />

      <View style={styles.topbar}>
        <SafeAreaView>
          <View style={styles.containerLogo}>
            <Image
              source={require('../../assets/logo-blink-horizontal.png')}
              style={styles.logoHorizontalBlink}
            />
          </View>
        </SafeAreaView>
      </View>

      <View style={styles.flatListContainer}>
        <FlatList
          data={notices.items}
          renderItem={({item}) => <Notices data={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  topbar: {
    height: '13%',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#C1BBB4',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    resizeMode: 'contain',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  logoHorizontalBlink: {
    width: '65  %',
    height: '100%',
  },
  containerLogo: {
    resizeMode: 'contain',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    zIndex: 1,
  },
  flatListContainer: {
    width: '100%',
    height: '87%',
    backgroundColor: '#fff',
  },
});
