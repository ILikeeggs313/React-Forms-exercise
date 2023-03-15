import logo from './logo.svg';
import './App.css';
import BoxList from './BoxList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BoxList />
      </header>
    </div>
  );
}

export default App;
