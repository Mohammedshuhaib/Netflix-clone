import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
function Banner() {
  const [movie, setMovie] = useState()

  useEffect(() => {
    axios.get(`trending/all/day?api_key=${API_KEY}`).then((response) => {
      console.log(response.data.results[0])
      setMovie(response.data.results[3])
    })
  }, [])

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">
          {movie ? (movie.title ? movie.title : movie.name) : ''}{' '}
        </h1>
        <div className="banner_btns">
          <button className="btn1">Play</button>
          <button className="btn1">My List</button>
        </div>
        <h1 className="discription">{movie ? movie.overview : ''}</h1>
      </div>
      <div className="fade"></div>
    
    </div>
  )
}

export default Banner
