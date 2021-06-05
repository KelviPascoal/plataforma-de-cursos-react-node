import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { LessonService } from "../../../../services/lessonService";
import { Container, VideoContainer } from "./styles";

interface Lesson {
    _id: string,
    name: string,
    urlvideo: string,
    description: string,
    courseid: string,
}

export function LessonList() {
    const params: any = useParams();
    const [lessons, setLessons] = useState([])
    const [player, setPlayer] = useState(false)


    async function loadLesson() {
        const lessons = await LessonService.findAll(params.id)
        setLessons(lessons);
    }
    function toggleVideoPlay() {
        setPlayer(!player)
    }

    useEffect(() => {
        loadLesson()
    }, [])




    return (
        <Container>
            <VideoContainer>
                <video src="https://www.youtube.com/watch?v=_NkNvT0wd2s"></video>
                <div className="controllers">
                    <button onClick={toggleVideoPlay}>Play</button>
                </div>
            </VideoContainer>
            <div>


                {lessons.map((lesson: Lesson) =>
                    <button key={lesson._id}>
                        {lesson.description}
                    </button>
                )}
            </div>

        </Container>
    )
}