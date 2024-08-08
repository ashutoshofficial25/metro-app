import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Link, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
const successImg = require('../assets/images/success.png');

export default function PaymentSuccess() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href={'/'}>
          <AntDesign name='left' size={20} color='black' />
        </Link>

        <Text>Logo</Text>

        <Text>Help</Text>
      </View>
      <View style={styles.card}>
        <View>
          <View>
            <Text>Icon</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: 600 }}>From</Text>
          <AntDesign name='arrowright' size={20} />
          <Text style={{ fontSize: 24, fontWeight: 600 }}>To</Text>
        </View>

        <Text
          style={{
            textAlign: 'center',
            textTransform: 'capitalize',
            paddingVertical: 8,
          }}
        >
          1 ticket, single Journey
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <FontAwesome
            name='rupee'
            size={32}
            style={{ fontWeight: '600', marginTop: 4 }}
          />
          <Text style={{ fontSize: 36, fontWeight: '600', marginRight: 4 }}>
            19
          </Text>
          <Image source={successImg} style={{ height: 32, width: 32 }} />
        </View>

        <Text
          style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            marginTop: 12,
            fontWeight: 500,
          }}
        >
          Ticket booked successfully
        </Text>

        <Text
          style={{
            textAlign: 'center',
            marginTop: 2,
          }}
        >
          Your ticket is valid till 11:59 AM{' '}
        </Text>

        <Text
          style={{ textAlign: 'center', marginVertical: 36, color: '#a2a2a2' }}
        >
          01 Mar 2025 09:05 AM
        </Text>

        <View style={{ alignItems: 'center' }}>
          <Pressable
            style={{
              alignItems: 'center',
              backgroundColor: '#00B8F5',
              paddingVertical: 12,
              paddingHorizontal: 24,
              borderRadius: 25,
            }}
          >
            <Text style={{ fontSize: 16, color: '#fff' }}>
              View your tickets
            </Text>
          </Pressable>
        </View>

        {/* <View style={{ backgroundColor: '#00B8F5', height: 10 }}></View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#fff',
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  card: {
    backgroundColor: '#DEF6FF',
    marginTop: 20,
    borderRadius: 12,
    paddingVertical: 36,
    paddingHorizontal: 12,
  },
});
