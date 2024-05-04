import { IoMdArrowDropdown } from "react-icons/io";

function Filterbar() {
  return (
    <div id="filterbar">
      <a className="filter-date">
        date
        <IoMdArrowDropdown />
      </a>
      <a className="filter-artist">
        artist
        <IoMdArrowDropdown />
      </a>
      <a className="filter-title">
        title
        <IoMdArrowDropdown />
      </a>
    </div>
  );
}

export default Filterbar;
