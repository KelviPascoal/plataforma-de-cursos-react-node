import { Link } from "react-router-dom";
import { Container, Section } from "./styles";
import { CourserService } from '../../../../services/courserService'
import { useEffect, useState } from "react";

interface Course {
    _id: string;
    urlImg: string;
    name: string;
}

export function Courserlist() {
    const imagem = "https://image.freepik.com/icones-gratis/js-em-um-quadrado-arredondado_318-10133.jpg";
    const [courser, setCourser] = useState<Course[]>([])

    async function loadCoursers() {
        const responseCourse = await CourserService.findAll();
        setCourser(responseCourse)

    }

    useEffect(() => {
        loadCoursers()
    }, [])

    return (
        <Section>
            {courser && courser.map(courser =>
                <Container key={courser._id}>
                    <Link to="/cursos">
                        <img src={courser.urlImg} alt="courser-img" />
                        <strong>{courser.name}</strong>
                        <span>asdasdasd asdas dsad adasdasdaa dsda sdsad sadsa dsadasd sadsddsa dsadsads adsa</span>
                    </Link>
                </Container>
            )}

        </Section>

    )
}