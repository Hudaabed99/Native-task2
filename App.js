import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
    <View style={styles.imagesContainer}>
    <Image source={require('./assets/image/logo.png')} style={styles.image1} />
  </View>
      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraph}>Make your self stronger than you excuses</Text>
      </View>
      <View style={styles.imagesContainer}>
        <Image source={require('./assets/image/1.jpg')} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttonText}>Or login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
  },
  iconContainer: {
    marginBottom: 20,
  },
  paragraphContainer: {
    marginBottom: 20,
  },
  paragraph: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image1:{
    width:150,
    height: 150,
  },
  image: {
    width: 400,
    height:200,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: 'orange',
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;

