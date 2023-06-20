<template>
    <v-app>
          <v-container fill-height fluid pa-2>
            <v-card class="ma-3">
            <v-card-title>Novo Cadastro</v-card-title>
            <v-card-text class="mt-10">
                <v-text-field title="Email" v-model="email" placeholder="E-Mail"></v-text-field>
                <v-text-field title="Password" v-model="password" placeholder="Password"></v-text-field>
                <v-spacer />
                <v-btn color="#8E24AA" @click="register">Cadastrar</v-btn>
            </v-card-text>
            </v-card>
          </v-container>
    </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const email = ref('');
const password = ref('');
const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            console.log(getAuth().currentUser);

        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
        });
}
const signInWithGoogle = () => {
}
</script>