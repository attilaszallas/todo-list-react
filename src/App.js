import logo from './logo.svg';
import './App.css';
import { useRef } from 'react'

function Header() {
 const txtTaskName = useRef(); 
 const submit = (e) => {
  e.preventDefault();

  const taskName = txtTaskName.current.value;
  console.log(`New task added: ' ${taskName}`)
 };

  return (
      <>
        <h1>Todo List</h1>
        <form onSubmit={submit}>
            <input  id="taskInput" type="text" placeholder='Add new task ...' ref={txtTaskName} />
            <button id="addButton">Add</button>
        </form>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
    </div>
  );
}

export default App;
