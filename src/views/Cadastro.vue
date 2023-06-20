<template>
    <Cadastro v-if="store.user != null" /> 
    <div v-else>
        não logado
    </div>
    
</template>

<script setup>
import { useAuthStore } from '@/store/AuthLogon';
import Cadastro from '@/components/Cadastro.vue';

const store = useAuthStore();
</script>