import {Routes,Route} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CourseDetails from './components/CourseDetails'
import Assignment from './components/Assignment'
import StudentProfile from './components/StudentProfile'

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='Home' element={<Home/>}/>
      <Route path='/CourseDetails' element={<CourseDetails/>}/>
      <Route path='/Assignment' element={<Assignment/>}/>
      <Route path='/StudentProfile' element={<StudentProfile/>}/>
    </Routes>
    </>
  )
}

export default App
