import { InputHTMLAttributes } from "react";
import { Container } from "./styled"


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    
};

export const Input = (props: InputProps) => {
    const {  label, ...rest } = props;

    return (
        <Container>
            <span>{label}</span>
            <input
                {...rest}
            />
        </Container>
    )
}