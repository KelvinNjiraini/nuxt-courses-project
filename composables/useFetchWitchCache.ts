import { StorageSerializers } from '@vueuse/core';

export default async <T>(url: string) => {
    // useSession storage to cache the lesson data
    const cached = useSessionStorage<T>(url, null, {
        // By passing null by default, it cannot automatically determine whcih serializer to use
        serializer: StorageSerializers.object,
    });

    if (!cached.value) {
        const { data, error } = useFetch<T>(url);

        if (error.value) {
            throw createError({
                ...error.value,
                statusMessage: `Could not fetch data from ${url}`,
            });
        }
        cached.value = data.value as T;
    } else {
        console.log(`Getting value for ${url} from cache`);
    }

    return cached;
};
