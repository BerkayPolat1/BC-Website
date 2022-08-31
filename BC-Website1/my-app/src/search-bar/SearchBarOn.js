import classes from "./SearchBarOn.module.css";

function SearchBarOn() {
  return (
    <div className={classes.search_bar_container}>
      <p className={classes.search_bar_text}> Search the Chronicle... </p>
    </div>
  );
}

export default SearchBarOn;
