import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.scss'

const Home = () => (
    <div className="home-container" >
        <div className="home-title">
            <h4>
                Desafio do Capítulo 3,<br /> Bootcamp DevSuperior
            </h4>
        </div>
        <div className="home-container-description">
            <h1 className="home-container-description-text">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br />
            Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br />
            Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <a href="antforfigma@gmail.com">antforfigma@gmail.com</a>
            </h1>
        </div>

        <Link to="/search" className="home-container-btn">
            <Button name="Começar" /> 
        </Link>

    </div>
)

export default Home;