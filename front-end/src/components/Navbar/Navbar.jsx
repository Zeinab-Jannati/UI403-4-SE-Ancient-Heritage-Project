import "./navbar.css";
import { Link } from 'react-router-dom';
import logoUrl from "../../assets/icons/logo.svg"
import FormButton from "../FormButton/FormButton";
import styles from './navbar.css';


const Navbar = () => {
    return ( 
            <nav className="navbar">
                <img className="logo" src={ logoUrl }  alt="logo" />
                <ul className="ul">
                    <div className='navbar-links'>
                        <Link to="/">صفحه‌ی اصلی</Link>
                        <Link to="/">تورها</Link>
                        <Link to="/">جاذبه‌ها</Link>
                        <Link to="/">تماس با ما</Link>
                        <Link to="/">درباره‌ی ما</Link>
                    </div>
                </ul>
                <Link to='/LoginSignUp' id="button">
                    <FormButton className={ styles.navbarButton } buttonText='ورود/ثبت‌نام' buttonColor='#FB8101' buttonTextColor='black' buttonColorHovered="#D96F00"/>
                </Link>
                <hr className="bottomLine" />
            </nav>
      
    );
}
 
export default Navbar;