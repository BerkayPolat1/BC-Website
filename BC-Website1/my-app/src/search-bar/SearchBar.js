import classes from "./SearchBar.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { IconContext } from "react-icons";
import SearchBarOn from "./SearchBarOn";
import { useEffect, useState, useRef } from "react";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) handler();
    };
    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

function SearchBar() {
  let [barIsOpen, setBarOpen] = useState(false);

  let domNode = useClickOutside(() => {
    setBarOpen(false);
  });

  return (
    <div className={classes.bar}>
      {barIsOpen ? <SearchBarOn /> : null}
      <div className={classes.link_icon}>
        <p className={classes.rc_text}>
          <a href="https://website.robcol.k12.tr/en/home-page">
            {" "}
            Robert College
          </a>
        </p>
        <div className={classes.icon_background}>
          <button
            ref={domNode}
            className={classes.search_bar_button}
            onClick={() => setBarOpen((barIsOpen) => !barIsOpen)}
          >
            <IconContext.Provider value={{ color: "white " }}>
              <BiSearchAlt2 size={25} />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
