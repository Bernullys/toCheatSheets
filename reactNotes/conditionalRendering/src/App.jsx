import Login from './Components/Login/Loging'
import './App.css'

function App() {


  return (
    <>
      <Login logied={true} name={"Bernardo"}/>
      <Login logied={false} name={"Gabriel"}/>
      <Login logied={true}/>


    </>
  )
}

export default App
