<template>
    <v-app>
        <v-form class="ma-3">
          <v-container fill-height fluid pa-2>
            <v-card class="ma-3">
            <v-card-title>Cadastro</v-card-title>
            <v-card-text class="mt-10">
                <v-text-field title="Nome" v-model="nome" placeholder="Nome Completo"></v-text-field>
                <v-text-field title="Idade" v-model="idade" placeholder="Idade"></v-text-field>
                <v-text-field title="Endereco" v-model="endereco" placeholder="Endereco"></v-text-field>
                <v-text-field title="cpf" v-model="cpf" placeholder="CPF"></v-text-field>
                <v-text-field title="Email" v-model="email" placeholder="E-Mail"></v-text-field>
                <v-spacer />
                <v-btn color="#8E24AA" @click="save">Salvar</v-btn>
            </v-card-text>
            </v-card>
          </v-container>
        </v-form>
    </v-app>
</template>
<script>
import  axios  from "axios";
export default {
  name: "Cadastro",
  data() {
    return {
      nome: '',
      idade: '',
      endereco: '',
      cpf: '',
      email: '',
      dados: []
    }
  },
  methods: {
    save() {
        axios.post('https://taskthree-485fc-default-rtdb.firebaseio.com/clientes.json', {
        nome: this.nome,
        idade: this.idade,
        endereco: this.endereco,
        cpf: this.cpf,
        email: this.email

      }).then(
        response => {
          if (response.status == '200')
            console.log('Salvo')
        }
      ).catch(
        error => console.log(error)
      );
    },
}
}
</script>