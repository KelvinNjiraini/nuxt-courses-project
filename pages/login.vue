<template>
    <div class="prose mx-auto h-9 max-w-2xl">
        <h1>Login in to {{ course.title }}</h1>
        <button
            class="rounded bg-blue-500 px-4 py-2 font-bold text-white"
            @click="login"
        >
            Log in with Github
        </button>
    </div>
</template>
<script setup lang="ts">
const course = await useCourse();
const { query } = useRoute();
const supabase = useSupabaseAuthClient();
const user = useSupabaseUser();

watchEffect(async () => {
    if (user.value) {
        await navigateTo(query.redirectTo as string, {
            replace: true,
        });
    }
});

const login = async () => {
    const redirectTo = `${window.location.origin}${query.redirectTo}`;
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: { redirectTo },
    });

    if (error) console.error('Error: ', error);
};
</script>
