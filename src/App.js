import './App.css';
import Counter from "./Component/Counter"
import ListPeople from "./Component/ListPeople"
import InputName from "./Component/InputName";

function App() {
  return (
    <div className="App">
      <Counter/>
      <ListPeople/>
      <InputName />
    </div>
  )
}

export default App
