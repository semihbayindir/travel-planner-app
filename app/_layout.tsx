import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

 export default function RootLayout() {

  useFonts({
    'openSans':require('./../assets/fonts/OpenSans-Light.ttf'),
    'openSans-medium':require('./../assets/fonts/OpenSans-Medium.ttf'),
    'openSans-bold':require('./../assets/fonts/OpenSans-Bold.ttf')
  })

  return (
      <Stack>
        <Stack.Screen name='index' options={{headerShown:false}}/>
      </Stack>
  );
}
