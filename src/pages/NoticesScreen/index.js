import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Modal,
} from 'react-native';

export default function NoticesScreen() {
  return (
    <View
      style={[
        styles.containerView,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <StatusBar barStyle="dark-content" />
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
});
