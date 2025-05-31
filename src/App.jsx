import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Navbarbanner from './Components/Navbarbanner'
import Hero from './Components/Hero'
import Numbercounter from './Components/Numbercounter'
import ChoseUs from './Components/ChoseUs'
import Banner from './Components/Banner'
import Banner2 from './Components/Banner2'
import SubjectCard from './Components/SubjectCard'
import Review from './Components/Review'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Navbarbanner/>
      <Hero/>
      <Numbercounter/>
      <ChoseUs/>
      <Banner/>
      <Banner2/>
      <SubjectCard/>
      <Review/>
      <Footer/>
    </>
  )
}

export default App
