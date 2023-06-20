<template>
  <div v-if="store.user != null">
  <p>Home</p>
  </div>
    <div v-else>
        não logado
    </div>
</template>

<script setup>
import { useAuthStore } from '@/store/AuthLogon';
const store = useAuthStore();
const logoff = () => {

}
</script>
