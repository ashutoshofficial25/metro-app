import { getMetroStations } from '@/common/functions';
import { TicketSchema } from '@/common/schema';
import { MetroList } from '@/constants/data';
import { AntDesign, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { Link, router, useLocalSearchParams, useNavigation } from 'expo-router';
import { ErrorMessage, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Metro() {
  const [metroDetail, setMetroDetail] = useState<any>(null);

  const [stations, setStations] = useState<any[]>([]);

  const [currentTab, setCurrentTab] = useState<'single' | 'return'>('single');

  const schema = new TicketSchema();

  const data = useLocalSearchParams();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    const find = MetroList.find((item) => item.id === Number(data.metro));

    if (find) {
      setMetroDetail(find);

      const metroStations = getMetroStations(find.id);

      setStations(metroStations);
    }
  }, [data.metro]);

  console.log('log::: params ', data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href={'/'}>
          <AntDesign name="left" size={20} color="black" />
        </Link>
        <Image style={styles.image} src={metroDetail?.url} />
        <Text style={styles.h1}>{metroDetail?.name}</Text>
      </View>

      <View>
        <Text style={styles.h2}>Buy Metro Ticket </Text>
      </View>

      <Formik
        initialValues={schema.initialValues}
        onSubmit={async (values) => {
          console.log('log::: values', values);

          router.navigate('/payment-success');
        }}
        validationSchema={schema.schema}
      >
        {({ handleChange, handleSubmit, values, setFieldValue }) => (
          <>
            <View style={styles.card}>
              <View style={styles.buttonContainer}>
                <Pressable
                  style={[
                    styles.tabButton,
                    currentTab === 'single' && styles.activeButton,
                  ]}
                  onPress={() => setCurrentTab('single')}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      textAlign: 'center',
                    }}
                  >
                    {' '}
                    Single Journey
                  </Text>
                </Pressable>

                <Pressable
                  style={[
                    styles.tabButton,
                    currentTab === 'return' && styles.activeButton,
                  ]}
                  onPress={() => setCurrentTab('return')}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      textAlign: 'center',
                    }}
                  >
                    {' '}
                    Return Journey
                  </Text>
                </Pressable>
              </View>

              <Picker
                selectedValue={values.from}
                onValueChange={(itemValue, index) =>
                  setFieldValue('from', itemValue)
                }
              >
                <Picker.Item label="From" value={''} color="#a1a1a1" />
                {stations
                  .filter((item) => item?._id !== values.to)
                  .map((station) => (
                    <Picker.Item
                      key={station._id}
                      label={station.name}
                      value={station._id}
                    />
                  ))}
              </Picker>

              <Text style={{ color: '#ff0000' }}>
                <ErrorMessage name="from" />
              </Text>

              <Picker
                selectedValue={values.to}
                onValueChange={(itemValue, index) =>
                  setFieldValue('to', itemValue)
                }
              >
                <Picker.Item label="Sector-62" value={'sector-62'} />
                <Picker.Item label="Sector-63" value={'sector-63'} />
                <Picker.Item label="Sector-64" value={'sector-64'} />
              </Picker>

              <Text style={{ color: '#ff0000' }}>
                <ErrorMessage name="to" />
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 8,
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: '500' }}>
                  Passenger
                </Text>
                <View
                  style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}
                >
                  <Pressable
                    style={styles.roundButton}
                    onPress={() => {
                      if (values.passenger <= 1) {
                        return;
                      }

                      return setFieldValue('passenger', values.passenger - 1);
                    }}
                  >
                    <Ionicons name="remove-outline" size={16} />
                  </Pressable>

                  <Text style={{ fontSize: 16, padding: 4 }}>
                    {values.passenger}
                  </Text>

                  <Pressable
                    style={styles.roundButton}
                    onPress={() =>
                      setFieldValue('passenger', values.passenger + 1)
                    }
                  >
                    <Ionicons name="add-outline" size={16} />
                  </Pressable>
                </View>
              </View>

              <View
                style={{
                  marginTop: 42,
                  flexDirection: 'row',
                }}
              >
                <Feather
                  name="info"
                  style={{ marginRight: 4, marginTop: 5, color: '#a1a1a1' }}
                />
                <Text style={{ color: '#a1a1a1', fontSize: 12 }}>
                  The ticket will valid till 01/01/2026, 00:00 AM. By booking
                  with us, you agree the Terms & Conditions
                </Text>
              </View>

              <Pressable
                onPress={() => handleSubmit()}
                style={styles.payButton}
              >
                <Text style={styles.payBtnText}> Proceed to Pay</Text>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
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
    padding: 5,
    borderRadius: 8,
    justifyContent: 'space-between',
    gap: 4,
  },
  tabButton: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 4,
    backgroundColor: 'transparent', // default background color
  },
  activeButton: {
    backgroundColor: '#fff', // active background color
  },
  input: {
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
    backgroundColor: '#00B8F5',
    paddingVertical: 4,
    fontSize: 16,
    borderRadius: 12,
    marginVertical: 12,
  },

  payBtnText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    paddingVertical: 4,
    color: '#fff',
  },
});
