<script setup lang="ts">
import { useNuxtApp } from 'nuxt/app';

const { $client } = useNuxtApp();

const getUser = await $client.hello.useQuery('yoo');
</script>

<template>
  <NuxtWelcome />
</template>
