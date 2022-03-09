import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sam Kessler CISC 3650 TodoList Lab</h1>
      </header>
      <div className='App-body'>
        <TodoList tasks={["Generate react app", "Intall react-bootstrap", "Generate TodoList component", "Make component reactive", "Add progress bar"]}/>
      </div>
    </div>
  );
}

export default App;
