import { Routes, Route} from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';

import { Navbar } from './components/Navbar';
import { Home } from './pages/home';

function App() {
  

  return (
    <main>
      {/* Navbar */}
      <Navbar />
     
    </main>
  )
}

export default App
