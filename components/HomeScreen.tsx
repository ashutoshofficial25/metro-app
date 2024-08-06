import { MetroList } from '@/constants/data';
import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <View>
        <Text style={styles.h1}>Select Your Metro</Text>
      </View>

      <View>
        {MetroList.map((item) => (
          <Link key={item.id} href={`/${item.id}`} style={styles.list}>
            <Image src={item.url} style={styles.listImage} />

            <View>
              <Text style={styles.listTitle}>{item.name}</Text>
            </View>
          </Link>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 36,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 10,
    borderBottomColor: '#090909',
    borderBottomWidth: 1,
  },

  listImage: {
    height: 50,
    width: 50,
  },
  listTitle: {
    fontSize: 16,
  },

  listItem: {
    fontSize: 12,
  },
});
