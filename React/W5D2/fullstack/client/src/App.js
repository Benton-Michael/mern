import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from './components/Header';
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import NewMovie from './components/NewMovie';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MovieList/>}/>
        <Route path="/new" element={<NewMovie/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
