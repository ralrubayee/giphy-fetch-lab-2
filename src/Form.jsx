import React, { useState } from "react";

function Form(props) {
  const [giphyTitle, setgiphyTitle] = useState("")

  const handleSubmit = evt => {
    evt.preventDefault();
    props.handleSubmit(giphyTitle)
    setgiphyTitle("")
  }

  const reloadPage = () => {
    window.location.reload()
  }

  const handleChange = evt => {
    const title = evt.target.value
    setgiphyTitle(title)
  }

  return (
    <>
    <h1>Giphy</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="GiphyTitle"></label>
        <input
          id="GiphyTitle"
          type="text"
          value={giphyTitle}
          onChange={handleChange}
        />
        <input type="submit" value="Search for Giphy" />
        <button onClick={reloadPage}>See another Gif</button>
       </form>
    </>
  )
}

export default Form;