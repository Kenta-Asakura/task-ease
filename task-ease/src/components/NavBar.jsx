function NavBar() {
  return (
    <header className="fixed inset-0 flex flex-row items-center h-[55px] md:h-[64px] px-4 md:px-6 bg-gray-700 shadow-sm">
      <nav className="flex flex-row justify-between content-center w-full">
        <button>
          {/* <img src="" alt="" /> */}
          Logo
        </button>

        <div>
          <button>Add New Task</button>
          <button>
            {/* <img src="" alt="" /> */}
            Edit Button
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;
