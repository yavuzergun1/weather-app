import React from 'react';
import Container from './components/Container';
import Deneme from './components/Deneme';
import { CityDataProvider } from './context/CityDataContext';
import {DataProvider} from './context/DataContext';
function App() {
  return (
    <CityDataProvider> 
    <DataProvider>
      <Container/>
    </DataProvider>
    </CityDataProvider>
  )
}

export default App