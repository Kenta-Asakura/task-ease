import { useState } from 'react'
import './App.css'
import MainContent from './components/MainContent';
import Articles from './components/Articles';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-wrapper'>
      <h1>React Application Demo</h1>

      <div className='contents-wrapper'>
        <MainContent />
        <Articles />
      </div>
    </div>
  )
}

export default App;
