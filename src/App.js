import React from 'react';
import AboutPage from './components/pages/aboutPage';
 import { GlobalStyle } from './styles/globalStyle.js';
 import { Switch, Route,useLocation } from 'react-router-dom';
 import { AnimatePresence } from 'framer-motion';
import Nav from './components/nav';
import ContactUs from './components/pages/contact';
import OurWork from './components/pages/ourwork';
import MovieDetail from './components/pages/movieDetail';



function App() {
const location= useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
     
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname} >
        <Route path='/work/:id'><MovieDetail/>
        </Route>
       
        
      <Route path='/work' >
        <OurWork />
        </Route>  
     <Route path='/contact' >
       <ContactUs />
       </Route>
     <Route path='/' >
       <AboutPage />
       </Route>
     </Switch> 
     </AnimatePresence>
    
    </div>
  );
}

export default App;
