import classes from "./Navbar.module.css";
import Dropdown from "react-bootstrap/Dropdown";

function Navbar() {
  return (
    <div className={classes.navbar_container}>
      <li className={classes.navbar_element}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className={classes.topics_button}>
            Topics
          </Dropdown.Toggle>
          <Dropdown.Menu className={classes.dropdown_menu}>
            <Dropdown.Item href="#/action-1" className={classes.dropdown_element}> Opinions </Dropdown.Item>
            <Dropdown.Item href="#/action-2" className={classes.dropdown_element} > Science &amp; Technology </Dropdown.Item>
            <Dropdown.Item href="#/action-3" className={classes.dropdown_element}> Arts &amp; Entertainment </Dropdown.Item>
            <Dropdown.Item href="#/action-4" className={classes.dropdown_element}> Features </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </li>
      <li className={classes.navbar_element}> Campus &amp; Student Life </li>
      <li className={classes.navbar_element}>
        <a href="/"> In the News </a>
      </li>
      <li className={classes.navbar_element}>
        <a href="/"> Team </a>
      </li>
      <li className={classes.navbar_element}>
        <a href="/"> All Stories </a>
      </li>
    </div>
  );
}

export default Navbar;
