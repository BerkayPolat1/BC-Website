import classes from "./Navbar.module.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Navbar() {
    return (
      <ul className={classes.navbar_container}> 
      <DropdownButton className={classes.navbar_element} id="dropdown-basic-button" title="Topics">
        <div className={classes.dropdown_menu}> {/* The menu that appears after the "topic" navigation bar element is pressed. */}
          <Dropdown.Item className={classes.dropdown_element} href="/"> Entertainment</Dropdown.Item>
          <Dropdown.Item className={classes.dropdown_element} href="/"> Arts &amp; Science </Dropdown.Item>
          <Dropdown.Item className={classes.dropdown_element} href="/"> Sports </Dropdown.Item>
          <Dropdown.Item className={classes.dropdown_element} href="/"> Campus Life &amp; Students </Dropdown.Item>
        </div>
      </DropdownButton>
      <li className={classes.navbar_element}>
        <a href="/"> In the News </a>
      </li>
      <li className={classes.navbar_element}>
        <a href="/"> Team </a>
      </li>
      <li className={classes.navbar_element}>
        <a href="/"> All Stories </a>
      </li>
      </ul>
  );
}

export default Navbar;
