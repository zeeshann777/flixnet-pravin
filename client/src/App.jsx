import './App.css'
import {auth, database} from './API/API_init'
import { Homepage, Login, Signin } from './Components'


function App() {
  const a = new auth()
  return (
    <>
      <Login/>
      {/* {<Signin/>} */}
      {/* <Homepage/> */}
    </>
  )
}

export default App
