import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import { Courserlist } from '../modules/lesson/course/CourserList';
import { LessonList } from '../modules/lesson/lesson/LessonList';

function Routes() {
    return (
        
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route path="/aulas/:id" exact component={LessonList}/>
                <Route path="/cursos" component={Courserlist}/>
            </Switch>
        </BrowserRouter>
        
    )
}
export { Routes };