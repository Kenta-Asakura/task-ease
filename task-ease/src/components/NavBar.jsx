import logo from "../assets/task-ease.png"

function NavBar() {
  return (
    <header className="fixed inset-0 flex z-[100] flex-row items-center h-[55px] md:h-[64px] px-4 md:px-6 bg-gray-700 shadow-sm">
      <nav className="flex flex-row justify-between content-center w-full text-gray-50">
        <button className="cursor-pointer">
          <img src={logo}
            alt="Task Ease Logo"
            className="h-6 md:h-7"
          />
        </button>

        <div className="flex flex-row items-center gap-2">
          <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full cursor-pointer">
            Add New Task
          </button>

          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;
