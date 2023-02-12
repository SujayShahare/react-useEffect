import './App.css';
import CounterOne from './components/CounterOne';
import DataFetching from './components/DataFetching';
import FetchIndividualPost from './components/FetchIndividualPost';
import MouseContainer from './components/MouseContainer';
import MouseEffect from './components/MouseEffect';

function App() {
  return (
    <div className="App">
      {/* <CounterOne />
      <MouseEffect /> */}
      {/* <MouseContainer /> */}
      {/* <DataFetching /> */}
      <FetchIndividualPost />
    </div>
  );
}

export default App;
