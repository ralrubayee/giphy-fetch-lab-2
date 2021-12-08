import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import GiphyInfo from './GiphyInfo';


function App() {
  const [giphyData, setGiphyData] = useState('');
  const [giphyTitle, setGiphyTitle] = useState('')

  const handleSubmit = title => {
    setGiphyTitle(title)
  };

  useEffect(() => {
    let giphyUrl = `https://api.giphy.com/v1/gifs/random?api_key=dnAsu8jjwPPH9fDyaOPO69pAe8yYGyQz&tag=${giphyTitle}&apikey=dnAsu8jjwPPH9fDyaOPO69pAe8yYGyQz`;
  

    const makeApiCall = () => {
      fetch(giphyUrl)
      .then(res => res.json())
      .then(data => {
        setGiphyData(data)
      })
    }
    makeApiCall()
  }, [giphyTitle])
  
  return (
    <div className="App">
      <header className="App-header">
        <Form handleSubmit={ handleSubmit }/>
        {giphyData.data ? <GiphyInfo giphy={giphyData} /> : null }
      </header>
    </div>
  );
}

export default App;
