import{useNavigate } from 'react-router-dom'
import Login from './reg';
function Header({onLog, onReg}) {
    const navigate = useNavigate();


    return (
        <div className="header">

            <a className="forum">Forum</a>
            <div className="login">
                <a onClick={onLog} >Login</a>
                <a > / </a>
                <a onClick={onReg}>Register</a>
            </div>


        </div>
    )
}

export default Header