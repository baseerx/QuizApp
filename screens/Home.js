import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.firstContainer}>
        <Text style={styles.txtTitle}>Quiz App</Text>
      </View>
      <View style={styles.secondContainer}>
        <Image
          style={styles.banner}
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/online-testing-scene-4315045-3610779.png',
          }}
        />
      </View>
      <View style={styles.nextbtnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Paper')}>
          <View style={styles.thirdContainer}>
            <Text style={styles.txtClass}>NEXT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  txtClass: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
  },
  txtTitle: {
    color: '#1a759f',
    fontSize: 28,
    fontWeight: '600',
  },
  banner: {
    width: 400,
    height: 400,
  },
  homeContainer: {
    alignItems: 'center',
    flex: 1,
  },
  firstContainer: {
    flex: 1,
  },
  secondContainer: {
    flex: 3,
  },
  thirdContainer: {
    backgroundColor: '#1a759f',
    color: 'white',
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 3,
  },
  nextbtnContainer:{
      width:'100%'
  }
});
