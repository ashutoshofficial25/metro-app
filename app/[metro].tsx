import { MetroList } from '@/constants/data';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Metro() {
  const [metroDetail, setMetroDetail] = useState<any>(null);

  const data = useLocalSearchParams();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    const find = MetroList.find((item) => item.id === Number(data.metro));

    if (find) {
      setMetroDetail(find);
    }
  }, [data.metro]);

  console.log('log::: params ', data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} src={metroDetail?.url} />
        <Text style={styles.h1}>{metroDetail?.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },

  h1: {
    fontSize: 24,
    fontWeight: '600',
  },
});
