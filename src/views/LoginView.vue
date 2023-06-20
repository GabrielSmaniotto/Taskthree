<template>
    <v-container>
        <v-form class="ma-9">
            <h1>Login</h1>
            <v-text-field v-model="email" label="Email" required></v-text-field>
            <v-text-field v-model="password" label="Password" required type="password" icon-></v-text-field>
            <v-btn color="primary" class="mr-2" @click="login">Login</v-btn>
            <v-btn color="primary" @click="store.loginWithGoogle">Sign In With Google</v-btn>
            <v-btn to="/register" @click="acessa2">teste de Login</v-btn>
            <v-btn @click="store.alerta">Acessa</v-btn>

        </v-form>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/store/AuthLogon';


const email = ref('');
const password = ref('');
const store = useAuthStore();

const login = () => {
    store.login(email, password)
};
const acessa2 = () => {
    store.alerta()
};


</script>