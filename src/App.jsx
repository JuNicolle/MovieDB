import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from './Pages/HomePage'
import GenrePage from './Pages/GenrePage'
import NavBar from './Components/NavBar';


function App() {

  return <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Genres' element={<GenrePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
}

export default App
