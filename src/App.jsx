import React from 'react'
import Header from './Components/header/Header.jsx'
import Nav from './Components/nav/Nav.jsx'
import About from './Components/about/About.jsx'
import Experience from './Components/experience/Experience.jsx'
import Achievements from './Components/achievements/Achievements.jsx'
import Contact from './Components/contact/Contact.jsx'
export const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Achievements/>
        <Contact/>
    </>
  )
}
export default App;