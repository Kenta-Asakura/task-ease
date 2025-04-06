import { useState } from "react";

function SideBar() {
  const [isOpen, setIsOpen] = useState('false');

  return (
    <aside>
      <h3>All Boards (1)</h3>

      <nav>
        <ul>
          <li>House Hold Chores</li>
          <li>Seibu Prince Hotels Development</li>
        </ul>
      </nav>

      <div>
        Profile Icon
        {/* <img src="" alt="" /> */}

        <span>User Name</span>
      </div>

      <button>
        Log Out
        {/* <img src="" alt="" /> */}
      </button>
    </aside>
  )
};

export default SideBar;
