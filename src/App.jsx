import './App.css'
import Header from './Components/Header'
import Container from './Components/Container'
import {data} from './info'

function App() {

  return (
    <>
    <Header/>
    <Container data = {data}/>
    </>
  )
}

export default App
