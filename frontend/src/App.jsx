import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RoomDetailPage from './pages/RoomDetailPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/rooms/:id" element={<RoomDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App