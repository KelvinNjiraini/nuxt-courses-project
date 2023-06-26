export default defineNuxtRouteMiddleware((to, from) => {
    const navigationHistory = useLocalStorage('history', []);
    navigationHistory.value.push(to.path);
    // console.log(`Navagation history: ${navigationHistory.value.join('\n')}`);
});
