import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './component/home/home.component';
import Header from './component/header/header.component';
import Footer from './component/footer/footer.component';
import UpdatePrice from './component/Owner-Page/UpdatePrice.component';
import { useEffect, useState } from 'react';

function App() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [location, setLocation] = useState();
  const [url, setUrl] = useState('http://localhost:8800/api/bookmyshow/all');
    useEffect(() => {
        fetch(url)
            .then(result => result.json())
            .then(data => {
                setMovieDetails(data)
                console.log(data);
            })
    }, [url]);
    const handleSubmit = (e) => {
      e.preventDefault();
      setUrl(`http://localhost:8800/api/bookmyshow?location=${location}`)
  }
  return (
    <div className="App">
        <Header />
        <hr />
      <div className='container'>
      <form onSubmit={handleSubmit}>
                <label>Location </label>&nbsp;&nbsp;
                <input type='text'
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                ></input>
                <input type="submit" />
                </form>
      </div>
   
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home movieDetails={movieDetails}/>} ></Route>
        <Route path="/bookmyshow/theater/owner" element={<UpdatePrice />} ></Route>
      </Routes>
      </BrowserRouter>
      
      <hr />
      <Footer />
    </div>
  );
}

export default App;
