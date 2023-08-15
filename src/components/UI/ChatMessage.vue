<template>
  <q-chat-message :text="[text]" :sent="sent" />
  2
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string;
    sent?: boolean;
  }>(),
  {
    text: '',
    sent: false,
  }
);
</script>
