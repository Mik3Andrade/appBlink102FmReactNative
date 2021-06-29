import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from 'react-native';
import Detalhes from './detalhes-modal';

export default function Notices({data}) {
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <View>
      <View style={styles.card}>
        <Image style={styles.capa} source={{uri: data.image}} />
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.date_published}>{data.date_published}</Text>
        <TouchableOpacity
          style={styles.btnLeiaMais}
          onPress={() => setVisibleModal(true)}>
          <Text style={styles.textLeiaMais}>Leia Mais</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes noticias={data} voltar={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  title: {fontSize: 17, padding: 10, fontWeight: 'bold'},
  capa: {height: 220, zIndex: 2},
  date_published: {
    fontSize: 13,
    paddingLeft: 10,
    paddingBottom: 10,
    color: '#bcbaba',
  },
  btnLeiaMais: {
    width: 100,
    height: 40,
    backgroundColor: '#78c269',
    borderRadius: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  textLeiaMais: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
});
