import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {FancyAlert} from 'react-native-expo-fancy-alerts';
import {useEffect} from 'react';

const FancyAlerts = ({visible,alertText,backToHome}) => {
  useEffect(() => {}, [visible]);

  return (
    <View>
      <FancyAlert
        visible={visible}
        icon={
          <View
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
              borderRadius: 50,
              width: '100%',
            }}>
            <Text>🤓</Text>
          </View>
        }
        style={{backgroundColor: 'white'}}>
            <Text style={styles.txtColor}>{alertText}</Text>
        <TouchableOpacity style={styles.alertContainer} onPress={backToHome}>
          <Text style={{color:'white'}}>back to home</Text>
        </TouchableOpacity>
      </FancyAlert>
    </View>
  );
};
const styles = StyleSheet.create({
  alertContainer: {
    backgroundColor: '#fb5607',
    fontSize:15,
    borderRadius:10,
    padding:5,
    marginBottom:2
  },
  txtColor:{
      color:'black',
      marginBottom:'5%',
      marginTop:-16
  }
});
export default FancyAlerts;
