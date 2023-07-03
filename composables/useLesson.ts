import { LessonWithPath } from '~/types/course';

export default async (chapterSlug: string, lessonSlug: string) =>
    useFetchWitchCache<LessonWithPath>(
        `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
    );
