import './App.css'
import ContactBox from './components/ContactBox/ContactBox'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Navbar from './components/Navigation/Navbar'
function App() {
 
  return (
    <div className='container'>
      <Navbar/>
      <ContactHeader/>      
      <ContactBox/>
    </div>
  )
}

export default App
