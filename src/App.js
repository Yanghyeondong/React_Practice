import './App.css';
import Test from './compo/test';
import Divline from './compo/div_line';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		  <Divline name="배열 연습" />
		  <Test />
      </header>
    </div>
  );
}

export default App;
