import classes from "./RCLockup.module.css";
import BCLogo from "../assets/BCTitle.png";
import RCLogo from "../assets/RCLogo1.png";

function RCLockup() {
    return <div className={classes.lockup}>
        <img className={classes.RCLogo} src={RCLogo} alt="RC Logo"></img>
        <img className={classes.BCLogo} src={BCLogo} alt="BC Logo"></img>
    </div>
}

export default RCLockup;