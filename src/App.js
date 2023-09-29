import './App.css';
import HomeScreen from './app/components/HomeScreen';
import { useEffect } from 'react';

function App() {

  const preventScrollBarVisibility = () => {
    document.body.style.overflow = 'visible';
    document.body.style['-webkit-overflow-scrolling'] = 'touch';
  }

  useEffect(() => {
    preventScrollBarVisibility();
  }, [])
  return (
    <div className='scrollable'>
      <HomeScreen/>
    </div>
  );
}

export default App;
