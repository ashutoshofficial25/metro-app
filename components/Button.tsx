import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface IProps {
  title: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

export default function Button({ title, onPress }: IProps) {
  return (
    <View>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}> {title} </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
