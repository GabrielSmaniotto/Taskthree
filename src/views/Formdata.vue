<template>
    <v-app>
        <v-container>
            <v-btn class="ma-3" color="#8E24AA" @click="load">Carregar</v-btn>
            <v-row v-if="dados.length > 0">
                <v-col v-for="(item, index) in dados" :key="index" cols="12" sm="6" md="4" lg="4">
                    <v-card class="ma-3">
                        <v-img :src="'https://source.unsplash.com/random/?id=' + index" cover height="200px" />
                        <v-card-title>{{ item.nome }} </v-card-title>
                        <v-card-text>{{ item.idade }} </v-card-text>
                        <v-card-text>{{ item.endereco }} </v-card-text>
                        <v-card-text>{{ item.email }}</v-card-text>

                        <v-card-actions>
                            <v-spacer />
                            <v-btn color="error" @click="remove(item.id)">Remover</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import axios from 'axios';
export default {
    name: "Formdata",
    data() {
        return {
            dados: []
        }
    },
    methods: {
        load() {
            this.dados = [];
            axios.get('https://taskthree-485fc-default-rtdb.firebaseio.com/clientes.json')
                .then(
                    response => {
                        Object.keys(response.data).forEach((key) => {
                            let user = response.data[key];
                            user.id = key;
                            this.dados.push(user);
                        });
                    }).catch(error => console.log(error))
        },

        remove(key) {
            axios.delete('https://taskthree-485fc-default-rtdb.firebaseio.com/clientes/' + key + '.json')
                .then(
                    response => {
                        if (response.status == '200') this.load();
                    }).catch(error => console.log(error));
        },

    },
    beforeMount() {
        this.load()
    },
}
</script>