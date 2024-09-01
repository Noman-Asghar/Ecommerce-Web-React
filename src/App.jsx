
import Navbar from './assets/Components/Navbar'
// import './App.css'
import { Outlet } from 'react-router-dom'
import Foter from './assets/Components/Foter'


function App() {
  
return(
    <>
  <Navbar / >
  <Outlet / >
  <Foter/>
  </>


  
 
)
};

export default App
