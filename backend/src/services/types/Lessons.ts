export interface ParamsByFind {
    id: string;
    limit: number;
    skip: number;
  }

  export interface LessonsResponse {
    totalItems: number;
    lessons: Lessons[];
  }

  export interface Lessons {
    _id: string;
    urlvideo: string;
    name: string;
    description: string;
    courseid: string;
  }