import React from 'react';
import Container from './components/Container';
import {DataProvider} from './context/DataContext';
function App() {
  return (
    <DataProvider>
      <Container/>
    </DataProvider>
  )
}

export default App