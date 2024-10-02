import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from './Pages/HomePage'
import GenrePage from './Pages/GenrePage'
import NavBar from './Components/NavBar';
import MovieDetailsPage from './Pages/MovieDetailsPage';
import GenreDetailsPage from './Pages/GenreDetailsPage';
import ActorsPage from './Pages/ActorsPage';
import ActorDetailPage from './Pages/ActorDetailPage';


function App() {

  return <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Genres' element={<GenrePage/>}/>
          <Route path='/movie/:id' element={<MovieDetailsPage/>}/>
          <Route path='/Genres/:id' element={<GenreDetailsPage/>}/>
          <Route path='/Actors' element={<ActorsPage/>}/>
          <Route path='/Actors/:id' element={<ActorDetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
}

export default App
