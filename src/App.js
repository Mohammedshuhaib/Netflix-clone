import React from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import RowPost from './components/Row-Post/RowPost'
import {action,originals} from "./urls"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={action} title="Atcion" isSmall={true} />
    </div>
  )
}

export default App
