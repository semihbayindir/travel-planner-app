import { StyleSheet, View, Text } from 'react-native';
import Login from './../components/Login'

export default function HomeScreen() {
  return (
    <View style={{
      flex:1,
    }}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
});
