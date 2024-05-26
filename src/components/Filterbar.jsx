import { IoMdArrowDropdown } from "react-icons/io";

function Filterbar() {
  return (
    <div id="filterbar">
      <a className="filter-date">
        filter
        <IoMdArrowDropdown />
      </a>
    </div>
  );
}

export default Filterbar;
