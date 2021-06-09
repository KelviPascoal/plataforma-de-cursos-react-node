import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { LessonService } from "../../../../services/lessonService";
import { Container, VideoContainer, VideoSection, Pagination } from "./styles";

interface Lesson {
    _id: string,
    name: string,
    urlvideo: string,
    description: string,
    courseid: string,
}

interface LessonsAndCount {
    totalItems: number;
    lessons: Lesson[];
}

export function LessonList() {
    const params: any = useParams();
    const [lessons, setLessons] = useState<LessonsAndCount>();
    const [pages, setPages] = useState<number[]>([]);
    const [pageState, setPageState] = useState<number>(1);

    

    function loadPagination() {
        let totalItems = lessons?.totalItems || 1;
        let totalPags = Math.ceil(totalItems / 6)
        let numberList: number[] = [];
        for(let i = 1 ; i < totalPags; i++)  {
            numberList.push(i);
        }
        setPages(numberList)
    }

    useEffect(() => {
        async function loadLesson() {
            const lessons = await LessonService.findAll({id: params.id, pageState: pageState })
            setLessons(lessons);
            loadPagination()
        }
        loadLesson()
    }, [pageState, lessons]);

   


    return (
    <>

      <Container>
            <VideoContainer>
                <iframe src="https://player.vimeo.com/video/511128196"
                    width="800" height="450" style={{ marginBottom: 20 }} allow="autoplay; fullscreen" ></iframe>
            </VideoContainer>
            <section>
            <VideoSection>
                {lessons && lessons.lessons.map((lesson: Lesson) =>
                    <button key={lesson._id}>{lesson.name}</button>
                )}
            </VideoSection>
            <Pagination>
                {pages && pages.map(page => <button key={page} onClick={() => setPageState(page)}>{page}</button>)}
            </Pagination>
            </section>
        </Container>
    
    </>
    )
}