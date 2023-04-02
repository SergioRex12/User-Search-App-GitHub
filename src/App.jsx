
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { UserProvider } from './context/userProvider'
import FormularioUser from './paginas/FormularioUser'
import InfoUser from './paginas/InfoUser'
import Nav from './paginas/Nav'


function App() {

  return (

    <BrowserRouter>
      <UserProvider>

        <Nav/>
        <FormularioUser/>
        <InfoUser/>

      </UserProvider>
    </BrowserRouter>
  )
}

export default App
