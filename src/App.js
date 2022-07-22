import React,{useState,useEffect} from 'react';
import './App.css';
import { Routes, Route,useNavigate} from 'react-router-dom'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import AlertBar from './components/Alert';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
function App() {
  const [show,setShow] = useState(false)
  const [alert,setAlert] = useState({
    key:'',variant:'',message:''
  })
  const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/')
    }else{
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [])
  
  const showAlert = (key,variant,message)=>{
    setAlert({key:key,variant:variant,message:message})
    setShow(true)
    setTimeout(()=>{
      setShow(false)
    },2000)
  }
  return (
    <>
      <NoteState>
        <Header />
        <div style={{width:"100%",height:"100px"}}>
        {show && <AlertBar alert={alert}/>}
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<LogIn showAlert={showAlert} />} />
          <Route path='/signup' element={<SignUp showAlert={showAlert}  />} />
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
