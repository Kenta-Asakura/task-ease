import { useState } from 'react'
import KanbanPage from './pages/KanbanPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <KanbanPage></KanbanPage>
    </div>
  )
};

export default App;
