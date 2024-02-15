import './App.css'
import ListsOfObjects from './Components/ListOfObjects'
import ListReuseble from './Components/ListReuseble'
import Lists from './Components/Lists'

function App() {

  const nameOfFruitsList = "Fruits"
  const fruits = [{id: 1, name: "Orange", calories: 95}, 
                  {id: 2, name: "Guayaba", calories: 45}, 
                  {id: 3, name: "Mora", calories: 105}, 
                  {id: 4, name: "Lechoza", calories: 159}, 
                  {id: 5, name: "Mango", calories: 37}]
  
  const nameOfVegablesList = "Vegetables"      
  const vegatables = [{id: 11, name: "Carrot", calories: 9}, 
                      {id: 12, name: "Potato", calories: 5}, 
                      {id: 13, name: "Celery", calories: 15}, 
                      {id: 14, name: "Onion", calories: 19}, 
                      {id: 15, name: "Garlic", calories: 17}]

  return (
    <>
      <Lists />
      <ListsOfObjects />
      <ListReuseble items={fruits} categorys={nameOfFruitsList}/>
      <ListReuseble items={vegatables} categorys={nameOfVegablesList}/>

    </>
  )
}

export default App
