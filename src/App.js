import logo from './logo.svg';
import './App.css';

function Header(){
  return (
    <>
    <h1>Todo List</h1>
    <input type="text"/>
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
