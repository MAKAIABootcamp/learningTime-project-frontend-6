import React from 'react'
import Button from '../../components/Button/Boton'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Button/>Home
      <Link to="/about">About</Link>
      </div>
  )
}

export default Home;