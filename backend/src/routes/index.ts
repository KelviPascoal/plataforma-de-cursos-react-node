import {Router} from 'express';
import { CouserRoute } from './CouserRoute';
import { LessonRoute } from './LessonRoute';
import { StudentRoute } from './StudentRoute';

export const routes = Router();

routes.use(StudentRoute)
routes.use(CouserRoute)
routes.use(LessonRoute)