import {useState ,useMemo} from 'react';
import './App.css';
import AppB from './Component/AppB';
import CompA from './Component/CompA';

function App() {
  const[countA,setCountA] = useState(0);
  const incrementA = () => {
    setCountA(countA+1);
  }

  const memoCompAuse = useMemo(() =>{
  return <CompA />
  },[])
  
  return (
    <div className="App">
      <h1>{countA}</h1>
      <button onClick={incrementA}>IncrementA</button>
      {memoCompAuse}

      <h1>SECOND PRACTICE OF USE MEMO</h1>
      <AppB />
    </div>
  );
}

export default App;
