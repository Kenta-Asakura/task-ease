function NavBar() {
  return (
    <header className="flex flex-row items-center min-h-[55px] md:min-h-[64px] px-4 md:px-6 bg-gray-700 shadow-sm">
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
