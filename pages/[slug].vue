<script setup lang="ts">
const route = useRoute();

const story = await useAsyncStoryblok(route.params.slug as string, {
  version: "draft",
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
