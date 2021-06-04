export interface Student{
    _id: string;
    name: string;
    birdDate: string;
    cpf: number;
    score: Number[];
    classroom: string;
    schoolgrade: number;
}

export interface StudentCreate{
    name: string;
    birdDate: string;
    cpf: number;
    score: Number[];
    classroom: string;
    schoolgrade: number;
}

export interface StudentUpdate{
    name: string;
    birdDate: string;
    cpf: number;
    score: Number[];
    classroom: string;
    schoolgrade: number;
}