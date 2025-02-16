import { useState } from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import KanbanPage from './pages/KanbanPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />

      {/* <SideBar /> */}

      <KanbanPage></KanbanPage>
    </div>
  )
};

export default App;
