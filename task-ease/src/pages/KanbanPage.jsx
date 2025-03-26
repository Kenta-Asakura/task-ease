import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Board from "../components/Board";
import CreateTaskForm from "../components/CreateTaskForm";

import { useState } from 'react';
import { useEffect } from 'react';

function KanbanPage() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Load tasks from localStorage on first render (Initial render)
  useEffect(() => {
    // console.log("Before fetching tasks:", localStorage.getItem("tasks")); // Debugging
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // console.log("Loaded tasks:", storedTasks); // Debugging
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change (Re-render)
  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ! For Testing - uncomment to CLEAR EVERYTHING
  // useEffect(() => {
  //   localStorage.clear();
  // }, []);

  // CRUD operations
  // - Create task
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }
  // - Update task
  // - Delete task

  return (
    <>
      <NavBar toggleForm={() => setShowForm(true)} />

      {/* <SideBar /> */}

      <div className="min-h-screen bg-gray-800 mt-[55px] md:mt-[64px] ">
        <Board tasks={tasks} />
        {showForm && <CreateTaskForm setTasks={setTasks} setShowForm={setShowForm} />}
      </div>
    </>
  )
}

export default KanbanPage;
