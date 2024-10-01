import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from './Pages/HomePage'
import GenrePage from './Pages/GenrePage'
import NavBar from './Components/NavBar';
import MovieDetailsPage from './Pages/MovieDetailsPage';


function App() {

  return <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Genres' element={<GenrePage/>}/>
          <Route path='/movie/:id' element={<MovieDetailsPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
}

export default App
