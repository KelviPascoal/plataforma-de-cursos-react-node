import { InputHTMLAttributes } from "react";
import { Container } from "./styled"


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    getValue?: (value: string) => void;
    label?: string;
};

export const Input = (props: InputProps) => {
    const { getValue, label, ...rest } = props;

    return (
        <Container>
            <span>{label}</span>
            <input
                {...rest}
            />
        </Container>
    )
}