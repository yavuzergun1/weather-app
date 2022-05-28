import React from 'react';
import Container from './components/Container';
import './App.css'
// import Deneme from './components/Deneme';
import { CityDataProvider } from './context/CityDataContext';
import AllData from './Data/AllData';
// import {DataProvider} from './context/DataContext';
function App() {
  return (
    <CityDataProvider> 
     <Container/>
    </CityDataProvider>
  )
}

export default App