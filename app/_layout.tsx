import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <StatusBar backgroundColor={'#ff0055'} /> */}
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}
