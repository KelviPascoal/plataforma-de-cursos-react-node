import { Container, MenuPagesButtons, AuthButtons } from "./styles";

export function Header () {

    return(
        <Container>
            <div className="logo">
                <h1>Sankatsu</h1>
                <img src="https://muniztrader.com/wp-content/uploads/2018/02/Logo-Lobo.png" alt="logo" width="40px" height="40px" />
            </div>
            <MenuPagesButtons>
                <button>Home</button>
                <button>Cursos</button>
                <button>Conteudo</button>
                <button>A Sankatsu</button>
            </MenuPagesButtons>

            <AuthButtons>
                <button>Entrar</button>
                <button>Cadastrar</button>
            </AuthButtons>
        </Container>
    )
}