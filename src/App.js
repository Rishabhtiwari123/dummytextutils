
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [myStyle,setmyStyle]=useState({
    color:'black'
    // border:'2px solid black'
})
const [alert,setAlert]=useState(null);
const [mode,setMode]=useState('light')
const [btntext,setBtntext]=useState('Enable Dark Mode')
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null)
  },2000)
}
const changeStyle=(selColor)=>{
  
        setmyStyle({
            color:'white',
            // border:'2px solid black'
        })
        // setBtntext('Enable Dark Mode')
        document.body.style.backgroundColor=selColor
        showAlert(`${selColor} mode enabled`,'success')
    }

const toggleMode=()=>{
  if(mode==='dark'){
    setMode('light')
    setBtntext('Enable Dark Mode')
  //   document.body.style.backgroundColor='#dcd2d2'
  //   showAlert("Light Mode has been enabled","success")
  // }
  }
  else{
    setMode('dark')
    setBtntext('Enable Light Mode')
    // document.body.style.backgroundColor='#38385c'
    // showAlert('Dark Mode has been enabled',"primary")
  }
}
  return(
    <>
   <Navbar title="TextUtils" showAlert={showAlert} myStyle={myStyle} changeStyle={changeStyle}/>
   <Alert alert={alert} />
   {/* <Switch> */}
          {/* <Route exact path="/"> */}
          <TextForm  showAlert={showAlert} heading="Enter the text to analyze" myStyle={myStyle}/>
          {/* </Route>
          <Route exact path="/about"> */}
            <About mode={mode} toggleMode={toggleMode} btntext={btntext}/>
          {/* </Route>
        </Switch> */}

   </>
  );
}

export default App;
