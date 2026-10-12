import {FaGift, FaUserCircle} from "react-icons/fa";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(){
     return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <FaGift/>
                <span>VELOOP</span>
            </div>

            <div className={styles.links}>
              <Link to="/">Home</Link>
              <Link to="/#giveaways">Giveaways</Link>
               <a href="#how-it-works">How It Works</a>
            </div>

            <button className={styles.loginButton}>
                <FaUserCircle/>
                LOGIN
                </button>
        </nav>
     );
    }
    export default Navbar;
