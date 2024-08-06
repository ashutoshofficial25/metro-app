import { Image, StyleSheet, Text, View } from 'react-native';

import HomeScreen from '@/components/HomeScreen';

export default function Index() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
});
