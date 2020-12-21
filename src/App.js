import logo from './logo.svg';
import './App.css';
import Clock from './components/clock'
import StopWatch from './components/stopwatch'


function App() {
  return (
    <div >
      <Clock></Clock>
      <StopWatch></StopWatch>
    </div>
  );
}

export default App;

// hh:mm:ss
// current time
// center at top of page