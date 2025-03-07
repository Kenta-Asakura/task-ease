import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Board from "../components/Board";
import CreateTaskForm from "../components/CreateTaskForm";

function KanbanPage() {
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
