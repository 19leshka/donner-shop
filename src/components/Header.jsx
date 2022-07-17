import CurtButton from "./CurtButton";
import logo from "./../assets/img/logo.png";
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <NavLink to="/">
                <div className="header__logo">
                    <img width="38" src={logo} alt="Donner logo" />
                    <div>
                        <h1>DONER MASTER</h1>
                        <p>Разбуди аппетит</p>
                    </div>
                </div>
                </NavLink>
            <CurtButton/>
            </div>
        </div>
    )
}

export default Header;