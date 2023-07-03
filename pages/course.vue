<template>
    <div>
        <div
            class="prose mx-auto mb-12 flex max-w-5xl items-center justify-between"
        >
            <h1 class="text-center">
                <span class="font-medium">
                    <span class="font-bold">{{ course.title }}</span>
                </span>
            </h1>
            <UserCard />
        </div>

        <div class="flex flex-row justify-center flex-grow">
            <div
                class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col"
            >
                <h3>Chapters</h3>
                <div
                    class="space-y-1 mb-4 flex flex-col"
                    v-for="chapter in course.chapters"
                    :key="chapter.slug"
                >
                    <h4>{{ chapter.title }}</h4>
                    <NuxtLink
                        v-for="(lesson, index) in chapter.lessons"
                        :key="lesson.slug"
                        class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
                        :to="lesson.path"
                        :class="{
                            'text-blue-500': lesson.path === $route.fullPath,
                            'text-gray-600': lesson.path !== $route.fullPath,
                        }"
                    >
                        <span class="text-gray-500">{{ index + 1 }}.</span>
                        <span>{{ lesson.title }}</span>
                    </NuxtLink>
                </div>
            </div>

            <div class="prose p-12 bg-white rounded-md w-[65ch]">
                <NuxtErrorBoundary>
                    <NuxtPage />
                    <template #error="{ error }">
                        <p>
                            Oh no, something went wrong with the lesson!
                            <code>{{ error }}</code>
                        </p>
                        <button
                            class="rounded-md bg-gray-500 px-3 py-2 font-bold text-white hover:cursor-pointer"
                            @click="resetError(error)"
                        >
                            Reset
                        </button>
                    </template>
                </NuxtErrorBoundary>
            </div>
        </div>
    </div>
</template>

<script setup>
const course = await useCourse();
const firstLesson = await useFirstLesson();
const resetError = async (error) => {
    console.log(error.value);
    await navigateTo(firstLesson.path);
    error.value = null;
};
</script>
