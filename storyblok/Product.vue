<template>
  <div
    v-editable="blok"
    class="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-4 xl:gap-x-8"
  >
    <div class="group relative">
      <div
        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
      >
        <img
          :src="blok.image.filename"
          alt="Front of men&#039;s Basic Tee in black."
          class="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div class="mt-4 flex justify-between">
        <div>
          <h3 class="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" class="absolute inset-0"></span>
              {{ blok.headline }}
            </a>
          </h3>
          <p class="mt-1 text-sm text-gray-500" v-html="articleContent"></p>
        </div>
        <p class="text-sm font-medium text-gray-900">$35</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

const articleContent = computed(() => renderRichText(props.blok.description));
</script>
