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
            <iframe src="https://player.vimeo.com/video/511128196"
              width="800" height="450" style={{ marginBottom: 20 }} allow="autoplay; fullscreen" ></iframe>
              
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