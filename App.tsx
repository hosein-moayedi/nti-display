import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { strings } from './src/common/strings';
import colors from './src/global-styles/colors';
import { HomeScreen } from './src/screens';
import { Text } from './src/ui-kit';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)



  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        BalooThambi2Medium: require('./src/assets/fonts/BalooThambi2-Medium.ttf'),
        BalooThambi2Regular: require('./src/assets/fonts/BalooThambi2-Regular.ttf'),
        BalooThambi2ExtraBold: require('./src/assets/fonts/BalooThambi2-ExtraBold.ttf'),
      });
      setFontsLoaded(true)
    }
    loadFonts()
  }, [])

  if (!fontsLoaded) {
    return null
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <HomeScreen />
        <StatusBar style="auto" />
      </View>
      <Text style={styles.developer} color='hint' size='smallToMedium'>{strings.screens.app.developer}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.screenBackground,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  developer: {
    alignSelf: 'center',
  }
});
