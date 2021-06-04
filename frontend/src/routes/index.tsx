import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import { Courserlist } from '../modules/lesson/course/CourserList';
import { LessonList } from '../modules/lesson/lesson/LessonList';

function Routes() {
    return (
        
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route path="/aula" exact component={LessonList}/>
                <Route path="/cursos" component={Courserlist}/>
                <Route path="/:courserId/aulas" component={LessonList}/>
            </Switch>
        </BrowserRouter>
        
    )
}
export { Routes };