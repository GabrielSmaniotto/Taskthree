<template>
    <v-toolbar color="#FFB612">
        <v-toolbar-title>Task Three</v-toolbar-title>
        <v-toolbar-items>
            <v-btn to="/home" @click="store.alerta">Home</v-btn>
            <v-btn to="/register" @click="store.alerta">New User</v-btn>
            <v-btn to="/cadastro" @click="store.alerta">New Form</v-btn>
            <v-btn to="/Formdata" @click="store.alerta">Form Data</v-btn>
            <v-btn to="/Test">Teste login</v-btn>
            <v-btn @click="store.logout">logout</v-btn>
        </v-toolbar-items>       
        <v-spacer />
    </v-toolbar>

</template>
<script setup>
import { useAuthStore } from '@/store/AuthLogon';
const store = useAuthStore();


</script>