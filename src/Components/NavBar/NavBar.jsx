import { Link } from "react-router-dom";
import './NavBar.css'
import NavBarLogo from "../NavBarLogo/NavBarLogo";
import {TbHome2} from 'react-icons/tb'
import {RiNotification3Line} from 'react-icons/ri'
import {FiMail} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'
import {LiaClipboardListSolid} from 'react-icons/lia'
import {GoVerified} from 'react-icons/go'
import {CiCircleMore} from 'react-icons/ci'

export default function Navbar(){
    const postNewTweet = () => {
        window.location.href = "/"
    }

    return(
        <div className="navbar">
            <NavBarLogo />
            <div className="navbar--links">
                <TbHome2 />
                <Link to="/" > Home </Link>
            </div>
            <div className="navbar--links">
                <RiNotification3Line />
                <Link to="/notifications"> Notifications </Link>
            </div>
            <div className="navbar--links">
                <FiMail />
                <Link to="/messages" > Messages </Link>
            </div>
            <div className="navbar--links">
                <LiaClipboardListSolid />
                <Link to="/lists"> Lists </Link>
            </div>
            <div className="navbar--links">
                <GoVerified />
                <Link to='/verified'> Verified </Link>
            </div>
            <div className="navbar--links">
                <AiOutlineUser />
                <Link to="/profile"> Profile </Link>
            </div>
            <div className="navbar--links">
                <CiCircleMore />
                <Link to="/more"> More </Link>
            </div>
            <button onClick={postNewTweet} className="btn--tweet">Tweet</button>
        </div>
    )
}