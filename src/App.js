import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList tasks={["Generate react app", "Intall react-bootstrap", "Generate TodoList component", "Make component reactive", "Add progress bar"]}/>
      </header>
    </div>
  );
}

export default App;
