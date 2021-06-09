import { useForm } from "react-hook-form";
import { FormInput } from "../../../../components/Form";
import { Container } from "./styles";


export function LessonForm() {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data: any) => alert(JSON.stringify(data));

     return (
        <>
            <Container>
                <h1>asdasd</h1>
                <form onSubmit={handleSubmit(onSubmit)}></form>
                <FormInput {...register("firstName")} value="name" placeholder="nome" label="nome"/>
            </Container>
        </>
    

    )
}