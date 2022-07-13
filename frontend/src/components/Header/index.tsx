import logo from '../../assets/img/logoPag.svg'
import './styles.css'

function Header() {
    return (<header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="logo DsMeta" />
            <h1>Ds Meta</h1>
            <p>Desenvolvido por link do Linkedn:
                <a href="https://www.linkedin.com/in/daniel-baumgarten-9056192a/"> Daniel Baumgarten </a>
            </p>
        </div>
    </header>
    )
}

export default Header
