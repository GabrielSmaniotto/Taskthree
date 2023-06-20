<template>
    
    <Crud v-if="store.user != null"/> 
    <div v-else>
        não logado
    </div>
    
</template>

<script setup>
import { useAuthStore } from '@/store/AuthLogon';
import Crud from '@/components/Crud.vue';

const store = useAuthStore();
</script>