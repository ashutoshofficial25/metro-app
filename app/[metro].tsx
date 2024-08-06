import Button from '@/components/Button';
import { MetroList } from '@/constants/data';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

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
        <AntDesign name='left' size={20} color='black' />
        <Image style={styles.image} src={metroDetail?.url} />
        <Text style={styles.h1}>{metroDetail?.name}</Text>
      </View>

      <View>
        <Text style={styles.h2}>Buy Metro Ticket </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.buttonContainer}>
          <Button title='Single Journey' />
          <Button title='Return Journey' />
        </View>

        <TextInput style={styles.input} placeholder='From' />

        <TextInput style={styles.input} placeholder='To' />

        <View>
          <Text>Passenger</Text>
          <View>
            <Pressable style={styles.roundButton}>
              <Ionicons name='add-outline' size={16} />
            </Pressable>

            <Pressable style={styles.roundButton}>
              <Ionicons name='remove-outline' size={16} />
            </Pressable>
          </View>
        </View>

        <Pressable>
          <Text> Proceed to Pay</Text>
        </Pressable>
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
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  h2: {
    paddingLeft: 20,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: '600',
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  h1: {
    fontSize: 20,
    fontWeight: '600',
  },
  card: {
    borderWidth: 1,
    marginHorizontal: 12,
    marginVertical: 16,
    borderRadius: 15,
    borderColor: '#000',
    padding: 12,
  },

  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: '#E7F1F8',
    padding: 2,
    borderRadius: 8,
    justifyContent: 'space-between',
  },

  input: {
    height: 42,
    borderColor: '#020202',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 12,
  },

  roundButton: {
    borderRadius: 50,
    padding: 2,
    borderWidth: 1,
    borderColor: '#101010',
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },

  payButton: {
    backgroundColor: '#2100000',
    paddingVertical: 4,
    fontSize: 16,
  },
});
