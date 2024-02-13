import Workers from './Components/Workers/Workers'
import avatar1 from "../public/assets/avatar1.jpg"
import './App.css'

function App() {

  const bernardoAvatar = avatar1

  return (
    <>
      <Workers name={"Bernardo"} age={36} gender={"Male"} charge={"Chief of EE Department"} image={bernardoAvatar}/>
      <Workers name={"Gabriel"} age={27} gender={"Male?"} charge={"Budget Department"} />
      <Workers name={"Luis"} age={27} gender={"Male"} charge={"Engeneering Support"} />
      <Workers />
    </>
  )
}

export default App
