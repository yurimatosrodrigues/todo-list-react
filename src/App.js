import React, { useState } from 'react';
import './App.css';

const App = () => {
  //let message = 'Hello World!'
  const [message, setMessage] = useState('Hello World!');  
  return(
    <>
      <div className="container">
        {message}
      </div>
      <button onClick={()=> setMessage("teste")}>Mudar Mensagem</button>
    </>    
  )};

export default App;