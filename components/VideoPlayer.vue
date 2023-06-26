<template>
<<<<<<< HEAD
    <iframe
        width="450"
        height="315"
        :src="`https://player.vimeo.com/video/${props.videoId}`"
        title="Video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
=======
	<iframe
		width="450"
		height="315"
		:src="`https://player.vimeo.com/video/${props.videoId}`"
		title="Video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	></iframe>
>>>>>>> cf0f71ab9f4ed1ad50bba6fa9acba78ebc349a7d
</template>

<script setup>
const props = defineProps({
<<<<<<< HEAD
    videoId: {
        type: Number,
        required: true,
    },
=======
	videoId: {
		type: Number,
		required: true,
	},
>>>>>>> cf0f71ab9f4ed1ad50bba6fa9acba78ebc349a7d
});
</script>
