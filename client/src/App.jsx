import './App.css'
import {auth, database} from './API/API_init'
import { Homepage, Login } from './Components'


function App() {
  const a = new auth()
  return (
    <>
      {/* <Login/> */}
      <Homepage/>
    </>
  )
}

export default App
