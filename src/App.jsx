import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>This week's Calendar</h1>
      <h2>Look at all the stuff you need to do this week!</h2>
      <Calendar />
    </div>
  )
}

export default App