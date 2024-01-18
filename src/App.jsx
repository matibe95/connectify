import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import CreateLink from './components/CreateLink'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:url" element={<CreateLink />} />
    </Routes>
  )
}

export default App
