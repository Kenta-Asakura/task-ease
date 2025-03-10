import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Board from "../components/Board";
import CreateTaskForm from "../components/CreateTaskForm";

import { useState } from 'react';
import { useEffect } from 'react';

function KanbanPage() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on first render (Initial render)
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("Loaded tasks:", storedTasks); // ✅ Debugging
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change (Re-render)
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // CRUD operations
  // - Create task
  // - Update task
  // - Delete task
  return (
    <>
      <NavBar />

      {/* <SideBar /> */}

      <div className="min-h-screen bg-gray-800 mt-[55px] md:mt-[64px] ">
        <Board />
        <CreateTaskForm />
      </div>
    </>
  )
}

export default KanbanPage;
