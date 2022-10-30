import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, Alert } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
    
      <Text style={styles.paragraph}>
        Super simple react app, mostly just to test out snack.
      </Text>
      <Button
          title="Hey click me"
          onPress={() => Alert.alert('Clicked eh?')}
        />
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  logo: {
    marginTop: 20,
    height: 128,
    width: 128,
  }
});
