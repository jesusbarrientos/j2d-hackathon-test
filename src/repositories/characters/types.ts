import { PaginatedData } from '@/repositories/common/types.ts'

// MODEL

export enum CharacterStatus {
    ALIVE = 'Alive',
    DEAD = 'Dead',
    UNKNOWN = 'unknown',
}

export enum CharacterGender {
    FEMALE = 'Female',
    MALE = 'Male',
    GENDERLESS = 'Genderless',
    UNKNOWN = 'unknown',
}

export type Character = {
    id: number;
    name: string;
    status: CharacterStatus;
    species: string;
    type: string;
    gender: CharacterGender;
    origin: {
        name: string;
        url: string;
    },
    location: {
        name: string;
        url: string;
    },
    image: string;
    episode: string[];
    url: string;
    created: string;
}

// REPOSITORY

export type QueryCharactersInput = {
    page: number,
}

export type QueryCharactersOutput = PaginatedData<Character>

export type QueryCharacters = (input: QueryCharactersInput) => Promise<QueryCharactersOutput>

export type CharactersRepository = () => {
    queryCharacters: QueryCharacters,
}
