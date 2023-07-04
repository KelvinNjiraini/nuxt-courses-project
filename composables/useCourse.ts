import { CourseOutline } from '~/server/api/course/meta.get';

export default async (): Promise<any> => {
    return useFetchWitchCache<CourseOutline>('/api/course/meta');
};
