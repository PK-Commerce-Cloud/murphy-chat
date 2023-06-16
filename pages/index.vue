<template>
  <div>
    <UContainer>
      <component :is="MyButton instanceof String ? Empty : MyButton" />

      <h1 class="text-center text-neutral-50 text-2xl py-4 uppercase font-bold">
        Murphy
      </h1>
      <div class="space-y-2">
        <div class="flex flex-col" v-for="entry in history">
          <div class="flex justify-end mb-2">
            <div
              class="bg-neutral-800 text-neutral-100 rounded-md py-1 px-4 font-bold"
            >
              {{ entry.question }}
            </div>
          </div>
          <div class="flex">
            <div
              class="bg-neutral-900 text-neutral-300 rounded-md py-1 px-4 font-bold"
            >
              {{ entry.answer }}
            </div>
          </div>
        </div>
      </div>

      <form class="flex gap-4 pt-4" v-on:submit="handleSubmit">
        <UInput
          :ui="{
            wrapper: 'grow relative',
          }"
          v-model="question"
          :loading="loading"
          icon="i-heroicons-magnifying-glass-20-solid"
        />
        <UButton
          :ui="{
            base: 'flex-none',
          }"
          type="submit"
          :loading="loading"
          icon="i-heroicons-pencil-square"
          size="sm"
          color="primary"
          square
          variant="solid"
          label="Ask"
        />
      </form>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useChatStore } from "../store/useChatStore";

const store = useChatStore();

const { history } = storeToRefs(store);

const question = ref("");
const loading = ref(false);

const handleSubmit = async (e: any) => {
  e.preventDefault();

  loading.value = true;

  await store.askQuestion(question.value);

  loading.value = false;

  question.value = "";
};
</script>
