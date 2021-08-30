import React from 'react';
import AboutPage from './components/pages/aboutPage';
 import { GlobalStyle } from './styles/globalStyle.js';
import Nav from './components/nav';
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav />
      <AboutPage />
    
    </div>
  );
}

export default App;
