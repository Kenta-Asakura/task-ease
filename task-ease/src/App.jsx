import { useState } from 'react'
import KanbanPage from './pages/KanbanPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <KanbanPage></KanbanPage>
    </>
  )
};

export default App;
