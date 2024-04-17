import { IoMdArrowDropdown } from "react-icons/io";

function Filterbar() {
  return (
    <div id="filterbar">
      <div className="filterbar-content">
        <IoMdArrowDropdown />
        <p>filter</p>
      </div>
    </div>
  );
}

export default Filterbar;
