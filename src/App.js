import './App.css';
import ArrayTest from './compo/ArrayTest';
import Divline from './compo/div_line';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		  <Divline name="배열 연습" />
		  <ArrayTest />
		  <Divline name="ref 연습" />
      </header>
    </div>
  );
}

export default App;
