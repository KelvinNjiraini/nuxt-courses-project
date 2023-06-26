import courseData from './courseData';

<<<<<<< HEAD
export const useCourse = () => {
    return {
        ...courseData,
        chapters: courseData.chapters.map((chapter) => ({
            ...chapter,
            lessons: chapter.lessons.map((lesson) => ({
                ...lesson,
                path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
            })),
        })),
=======
type Lesson = {
    title: string;
    slug: string;
    number: number;
    videoId: number;
    sourceUrl?: string;
    downloadUrl: string;
    text: string;
    path: string;
};

type Chapter = {
    title: string;
    slug: string;
    number: number;
    lessons: Lesson[];
};

type Course = {
    title: string;
    chapters: Chapter[];
};

export const useCourse = (): Course => {
    const chapters: Chapter[] = courseData.chapters.map((chapter) => {
        const lessons: Lesson[] = chapter.lessons.map((lesson) => ({
            ...lesson,
            path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
        }));
        return {
            ...chapter,
            lessons,
        };
    });

    return {
        ...courseData,
        chapters,
>>>>>>> cf0f71ab9f4ed1ad50bba6fa9acba78ebc349a7d
    };
};
