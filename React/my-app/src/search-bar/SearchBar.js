import classes from "./SearchBar.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { IconContext } from "react-icons";

function SearchBar() {
  return (
    <div className={classes.bar}>
      <div className={classes.text_box}> </div>
      <div className={classes.link_icon}>
        <p className={classes.rc_text} ><a href="https://website.robcol.k12.tr/en/home-page"> Robert College</a></p>
        <div className={classes.icon_background}>
            <IconContext.Provider value={{ color: "white " }}>
              <BiSearchAlt2 size={25} />
            </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
