import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import { Courselist } from '../modules/lesson/course/CourseList';
import { LessonForm } from '../modules/lesson/lesson/LessonForm';
import { LessonList } from '../modules/lesson/lesson/LessonList';

function Routes() {
    return (
        
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route path="/aulas/lista/:id" exact component={LessonList}/>
                <Route path="/cursos" exact component={Courselist}/>
                <Route path="/aulas/cadastrar" exact component={LessonForm}/>
                
                
            </Switch>
        </BrowserRouter>
        
    )
}
export { Routes };