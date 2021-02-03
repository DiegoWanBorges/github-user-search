import { Link } from 'react-router-dom'
import './styles.scss'

const NavBar = () => (
    <nav className="main-nav">
        <div >
            <Link to="/" className="nav-link">
                <h5 className="nav-logo-text" >Bootcamp DevSuperior</h5>
            </Link>
        </div>
    </nav>
)

export default NavBar