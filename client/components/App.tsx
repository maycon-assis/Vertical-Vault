import Form from './Form'
import Home from './Home'
import Navbar from './Navbar'

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-300 items-center gap-96">
      <Navbar />
      <Form />
    </div>
  )
}

export default App
