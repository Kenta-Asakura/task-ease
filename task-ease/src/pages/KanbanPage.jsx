import NavBar from '../layout/NavBar/NavBar';
// import SideBar from '../components/SideBar';
import Board from "../components/Board/Board";

import TaskForm from '../components/Task/TaskForm/TaskForm';
import CreateTaskForm from "../components/Task/CreateTaskForm/CreateTaskForm";
import TaskModal from '../components/Task/TaskModal/TaskModal';
// import EditTaskForm from '../components/Task/EditTaskForm/EditTaskForm';

import { useState, useEffect } from 'react';

function KanbanPage() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsTaskModalOpen(true);
  };

  // Load tasks from localStorage on first render (Initial render)
  useEffect(() => {
    // console.log("Before fetching tasks:", localStorage.getItem("tasks")); // Debugging
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];setIsTaskModalOpen

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
  // const addTask = (newTask) => {
  //   setTasks((prevTasks) => [...prevTasks, newTask]);
  // }

  const handleCreateTask = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
    setShowForm(false);
  };

  // - Update task
  // - Delete task

  return (
    <>
      <NavBar toggleForm={() => setShowForm(true)} />

      {/* <SideBar /> */}

      <div className="min-h-screen bg-gray-800 mt-[55px] md:mt-[64px] ">
        <Board
          tasks={tasks}
          onTaskClick={handleTaskClick}
        />

        {showForm &&
          // <CreateTaskForm
          //   setTasks={setTasks}
          //   // setShowForm={setShowForm}
          //   onCancel={() => setShowForm(false)}
          // />

          <TaskForm
            onSubmit={handleCreateTask}
            onCancel={() => setShowForm(false)}
          />
        }

        {isTaskModalOpen &&
          <TaskModal
            task={selectedTask}
            setIsTaskModalOpen={setIsTaskModalOpen}
          />
        }

        {/* <EditTaskForm></EditTaskForm> */}
      </div>
    </>
  )
};

export default KanbanPage;
