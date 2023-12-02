import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css' 

// import HomePage from './components/HomePage/HomePage'
import Home from './components/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
