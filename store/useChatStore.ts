import { defineStore } from "pinia";

export const useChatStore = defineStore("chat", {
  state: () => ({ history: [] }),
  actions: {
    async askQuestion(question: string) {

      const { data } = await useAsyncData(() => {
        return $fetch("https://murphy.herokuapp.com/chat", {
          method: "POST",
          body: JSON.stringify({
            question: question,
          }),
        });
      });

      this.history.push({
        question: question,
        answer: data.value?.chat
      });
    },
  },
  persist: true,
});
