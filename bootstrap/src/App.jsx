import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'

function App() {

  return (
    <div className="App">
      <Navigation />
      <HomePage />
    </div>
  )
}

export default App