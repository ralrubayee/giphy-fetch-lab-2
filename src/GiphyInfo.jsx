import React from "react";

function GiphyInfo({ giphy }){
  console.log("all the gifs", giphy)
  return (
    <>
    <img src={giphy.data.images.downsized.url} alt="giphy"/>
    </>
  )
}


export default GiphyInfo