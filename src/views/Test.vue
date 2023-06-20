<template>
    <div v-if="store.user != null">
        <v-alert type="success" title="Parabens, você está logado!"
            text="“O tamanho não importa. Olhe para mim. Você me julga pelo meu tamanho, 
            hein? E não deveria, porque minha aliada a Força é, e uma aliada poderosa… A vida a cria, 
            a faz crescer, penetra nós e nos rodeia.… Seres luminosos somos ! Não esta matéria bruta!” - Mestre Yoda."></v-alert>
    </div>
    <div v-else> 
        <v-alert type="success" title="Parabens, você é o Ganhador"
            text="Você ganhou 10 mil reais "><v-AlertLink href="http://pudim.com.br/">Clique aqui para resgatar seu premio!</v-AlertLink></v-alert>
    </div>
</template>
  
<script setup>
import { useAuthStore } from '@/store/AuthLogon';
const store = useAuthStore();


</script>
  