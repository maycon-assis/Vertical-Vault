import Landing from './Landing'
import { Routes, Route } from 'react-router-dom'
import Main from './Main'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  )
}

export default App
