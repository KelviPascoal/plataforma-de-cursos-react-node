import { useForm } from 'react-hook-form';
import {Input} from '../Input';

interface FormProps {
    value: string;
    placeholder: string;
    label?: string;
}

export const FormInput = ({value, placeholder, label}: FormProps) => {
    const {register, handleSubmit} = useForm()
    function handleGetValue() {

    }

    return (
        <form onSubmit={handleGetValue}>
            <Input {...register(value)} placeholder={placeholder} label={label} />
        </form>
    )

}
