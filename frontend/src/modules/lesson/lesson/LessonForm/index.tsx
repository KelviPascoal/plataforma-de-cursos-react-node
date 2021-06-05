import { Container } from "./styles";

export function LessonForm() {
    function handleAddLesson() {

    }
    return (
        <>
            <Container>
                <h1>Cadastrar aula</h1>

                <form  onSubmit={handleAddLesson}>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <select name="" id="">
                </select>
                <button>Salvar</button>
                </form>
                
            </Container>
        </>

    )
}