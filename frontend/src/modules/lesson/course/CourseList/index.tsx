import { Link } from "react-router-dom";
import { Container, Section } from "./styles";
import { CourseService } from '../../../../services/courserService'
import { useEffect, useState } from "react";

interface Course {
    _id: string;
    urlImg: string;
    name: string;
}

export function Courselist() {
    const imagem = "https://image.freepik.com/icones-gratis/js-em-um-quadrado-arredondado_318-10133.jpg";
    const [courses, setCourses] = useState<Course[]>([])

    async function loadCourser() {
        const responseCourse = await CourseService.findAll();
        setCourses(responseCourse)

    }

    useEffect(() => {
        loadCourser()
    }, [])

    return (
        <Section>
            {courses && courses.map(course =>
                <Container key={course._id}>
                    <Link to={`/aulas/lista/${course._id}`}>
                        <img src={course.urlImg} alt="course-img" />
                        <strong>{course.name}</strong>
                        <span>asdasdasd asdas dsad adasdasdaa dsda sdsad sadsa dsadasd sadsddsa dsadsads adsa</span>
                    </Link>
                </Container>
            )}

        </Section>

    )
}