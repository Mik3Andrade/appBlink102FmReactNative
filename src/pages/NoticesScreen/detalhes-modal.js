import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function Detalhes(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#000'} />
      <ScrollView>
        <View style={styles.containerCapa}>
          <Image style={styles.capa} source={{uri: props.noticias.image}} />
        </View>
        <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              textAlign: 'center',
              marginTop: 8,
              fontWeight: 'bold',
            }}>
            {'X'}
          </Text>
        </TouchableOpacity>
        <View style={styles.modalContainer}>
          <Text style={styles.titulo}>{props.noticias.title}</Text>

          <Text style={styles.conteudoNoticia}>
            {props.noticias.content_text}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerScrollView: {
    width: '100%',
  },
  container: {
    width: '100%',
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: '100%',
    height: '95%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnVoltar: {
    height: 35,
    width: 35,
    marginTop: 42,
    marginLeft: 15,
    position: 'absolute',
    backgroundColor: '#fff',
    zIndex: 1,
    borderRadius: 30,
  },
  titulo: {
    color: '#78c269',
    fontSize: 25,
    textAlign: 'left',
    marginTop: 20,
    fontFamily: 'Karla-Regular',
    fontWeight: 'bold',
    marginLeft: 30,
    marginRight: 30,
  },
  conteudoNoticia: {
    color: '#000',
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40,
    textAlign: 'left',
    fontFamily: 'Karla-Regular',
  },
  capa: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCapa: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 220,
  },
});
