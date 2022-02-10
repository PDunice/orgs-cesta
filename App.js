
import AppLoading from 'expo-app-loading';
import { StatusBar, SafeAreaView, Text, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/cesta'
import Cesta from './src/telas/cesta';



export default function App() {
const[fonteCarregada]= useFonts({
  "MontserratRegular": Montserrat_400Regular,
  "MontserratBold":Montserrat_700Bold
});

if(!fonteCarregada){
  return <AppLoading />
}

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>
      {/* <Text>bla bla bla</Text> */}
      <Cesta {...mock} />
      
    </SafeAreaView>
  );
}


