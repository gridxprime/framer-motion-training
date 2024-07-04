

import { motion } from 'framer-motion'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Layout from './components/Layout'
import Links from './pages/Links'
import Contacts from './pages/Contacts'
import About from './pages/About'
import Notfoundpage from './pages/Notfoundpage'
import './App.css'
import './media.css'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage></Homepage>}></Route>
        <Route path='links' element={<Links></Links>}></Route>
        <Route path='contacts' element={<Contacts></Contacts>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='*' element={<Notfoundpage></Notfoundpage>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
