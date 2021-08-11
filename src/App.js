/* import './App.css'; */
import React from 'react';
import Headers from  './components/header/Headers';
import Articles from './components/article/Articles';
import Footer from './components/footer/Footer';

function App (props) {
  return (
     <div>
        <Headers />
        <Articles />
        <Footer />
      </div>
  );
};

export default App;
