import React from 'react';
import Container from './components/Container';
import Deneme from './components/Deneme';
import {DataProvider} from './context/DataContext';
import Day1 from './routes/Day1';
function App() {
  return (
    <DataProvider>
      <Container/>
      <Deneme/>
    </DataProvider>
  )
}

export default App