import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';

function App() {


  const [mode,setMode]= useState('dark')
  const [alert,setAlert]= useState(null);

  const showAlert  =(message,type)=>{ 
    setAlert({
      msg : message,
      type : type}
    )

  }
  return (
    <>
  
   <Navbar title="TextEditor"mode={mode}/>
  
 <div className='container'><Textform heading="Text Box" textbox="write the text below"/></div> 
  <div className='container'><About/></div>
      


  
  
  
    </>
  );
}

export default App;


