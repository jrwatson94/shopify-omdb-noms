import './App.css';
import SearchForm from './SearchForm'
import Nominations from './Nominations'

function App() {
  return (
    <div className="App">
      <h1>Nominate Your Favorite Movies!</h1>
      <div className="main-container">
        <SearchForm />
        <Nominations />
      </div>

    </div>
  );
}

export default App;
