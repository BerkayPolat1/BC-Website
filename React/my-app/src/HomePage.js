import Navbar from "./navbar/Navbar";
import RCLockup from "./rc-lockup/RCLockup";
import SearchBar from "./search-bar/SearchBar";

function HomePage () {
    return <div>
        <SearchBar />
        <RCLockup />
        <Navbar />
    </div>
}

export default HomePage;