import { useState } from 'react'
import NavBar from './components/NavBar'
import KanbanPage from './pages/KanbanPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <KanbanPage></KanbanPage>
    </div>
  )
};

export default App;
