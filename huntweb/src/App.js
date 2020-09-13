import React from 'react';

//importando css padrão
import './style.css'

//Importando os componentes
import Header from './components/header'
import Main from './pages/main'

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default App;
