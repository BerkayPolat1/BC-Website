import classes from "./SideMenu.module.css";

function SideMenu() {
    return (<div className={classes.sidemenu_container}> 
        <h1> Latest News </h1>
        <ul>
            <li className={classes.sidemenu_element} ><a href="/"> An Adventure Site in the Woods of Robert College </a> </li>
            <hr></hr>
            <li className={classes.sidemenu_element}><a href="/"> A Global Web of Media Review Platforms: Letterboxd, Musicboard, Goodreads </a> </li>
            <hr></hr>
            <li className={classes.sidemenu_element}><a href="/"> CIPs Behind the Scenes: How Do They Work and How to Organize One?  </a> </li>
            <hr></hr>
            <li className={classes.sidemenu_element}><a href="/"> The Misconception of APs Among Robert Students </a></li>
            <hr></hr>
            <li className={classes.sidemenu_element}><a href="/"> COP26: Hope or Disappointment? </a></li>
            <hr></hr>
            <li className={classes.sidemenu_element}><a href="/">  Think Global act Local</a></li>
        </ul>
    </div>)
}

export default SideMenu;