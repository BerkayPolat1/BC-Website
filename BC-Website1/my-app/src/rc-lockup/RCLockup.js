// Lockup files are used to edit the home page RC and BC icons.

import classes from "./RCLockup.module.css";
import BCLogo from "../assets/BCTitle.png";
import RCLogo from "../assets/RCLogo1.png";
import { Link } from "react-router-dom";


function RCLockup() {
    return <div className={classes.lockup}>
            <Link to="/" className={classes.lockup}>
                <img className={classes.RCLogo} src={RCLogo} alt="RC Logo"></img>
            </Link>
        <img className={classes.BCLogo} src={BCLogo} alt="BC Logo"></img>
    </div>
}

export default RCLockup;