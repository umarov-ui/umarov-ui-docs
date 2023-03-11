import {FC} from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

const App:FC = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App