import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import HomeScreen from './app/components/HomeScreen';

function App() {
  return (
    // <ChakraProvider>
      <HomeScreen/>
    // </ChakraProvider>
  );
}

export default App;
