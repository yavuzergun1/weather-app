import React from 'react';
import Container from './components/Container';
import Deneme from './components/Deneme';
import { CityDataProvider } from './context/CityDataContext';
import {DataProvider} from './context/DataContext';
import Day1 from './routes/Day1';
function App() {
  return (
    <CityDataProvider> 
    <DataProvider>
      <Container/>
      <Deneme/>
    </DataProvider>
    </CityDataProvider>
  )
}

export default App