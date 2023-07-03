import { CourseMeta } from '~/types/course';

export default async (): Promise<any> => {
    return useFetchWitchCache<CourseMeta>('/api/course/meta');
};
