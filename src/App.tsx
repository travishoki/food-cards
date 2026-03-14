import './App.css'
import Card from './Card'


const foodList = [1, 2, 3, 4, 5, 6]

function App() {
  return (
    <>
      <h1>Food Cards</h1>
      {foodList.map((id) => <Card id={id}/>)}
    </>
  )
}

export default App
