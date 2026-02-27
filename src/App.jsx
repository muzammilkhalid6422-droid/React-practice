import React from 'react'
import './App.css'


import Navbar from './components/Navbar'
import Home from './components/Home'
import Card from './components/Card'
import Hero from './components/Page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Footer from './components/Footer'





export default function App() {
  return (
    <>


      <Home />
      <Navbar />
      <Card />
      <Hero />
      <Footer/>
      




    </>
  )
}
