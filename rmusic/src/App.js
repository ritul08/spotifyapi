import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
   const[keyword,setKeyword]=useState("")
   const[isLoading,setIsLoading]=useState(false)
  const[tracks,setTracks]=useState([])
const getTracks= async()=>{
  setIsLoading(true);
  let data = await fetch(`https://v1.nocodeapi.com/ritul22/spotify/PYWrNluyNPSnnNql/search?q=${keyword}&type=track`);
  let convertedData= await data.json();
  console.log(convertedData.tracks.items);
  setTracks(convertedData.tracks.items);
  setIsLoading(false);
}


  return <>
  <nav className="navbar bg-body-tertiary d-flex justify-content-center">
  <div className="container-fluid">
    <a className="navbar-brand">rmusic</a>
    <form className="d-flex" role="search">
      <input
      value={keyword}
      onChange={(event)=>{setKeyword(event.target.value)}}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button  onClick={getTracks} className="btn btn-outline-success" >
        Search
      </button>
    </form>
  </div>
</nav>

<div className="container">

  <div className="row">
    
    
    
    {
      tracks.map((element) =>{
         return <div key={element} className="col-lg-3 col-md-6 py-2">
          
          <div className="card" >
  <img src={element.album.images[0].url} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{element.name}</h5>
    <p className="card-text">
      Artist: {element.album.artists[0].name}
    </p>
    <p className="card-text">
      Release date: {element.album.release_date}
    </p>
    <audio src={element.preview_url} controls className='w-100'></audio>
    
  </div>
</div>

         </div> 
      })
    }

  </div>
  <div className={`row${keyword===""?"":"d-none"}`}>
    <div className="col-12 py-5 text-center">
      <h1>Hello!!</h1>
      <h2>Welcome to rmusic</h2>
      <h2>Listen the music of your choice!!</h2>
    
</div>
</div>
</div>
    </>;
  
}

export default App;
