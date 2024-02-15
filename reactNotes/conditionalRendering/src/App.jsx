import Login from './Components/Login/Loging'
import Rendering from './Components/Login/Rendering'
import './App.css'

function App() {


  return (
    <>
      <Login logied={true} name={"Bernardo"}/>
      <Login logied={false} name={"Gabriel"}/>
      <Login logied={true}/>
      <Rendering />


    </>
  )
}

export default App
