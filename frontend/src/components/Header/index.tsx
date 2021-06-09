import { Link } from "react-router-dom";
import { Container, MenuPagesButtons, AuthButtons } from "./styles";

export function Header() {

    return (
        <Container>
            <div className="logo">
                <h1>Sankatsu</h1>
                <img src="https://muniztrader.com/wp-content/uploads/2018/02/Logo-Lobo.png" alt="logo" width="40px" height="40px" />
            </div>
            <MenuPagesButtons>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/cursos">
                    <button>Cursos</button>
                </Link>
                <Link to="/">
                    <button>Conteudo</button>
                </Link>
                <Link to="/">
                    <button>A Sankatsu</button>
                </Link>

            </MenuPagesButtons>

            <AuthButtons>
                <button>Entrar</button>
                <button>Cadastrar</button>
            </AuthButtons>
        </Container>
    )
}