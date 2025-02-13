<script setup>
import { useValidadorDoc } from "../../validador-doc/dist/index.mjs";
import { ref } from "vue";
const { CNPJ } = useValidadorDoc();
const cnpj = ref("");
const validarCNPJ = () => {
  alert(CNPJ.isValid(cnpj));
};
</script>

<template>
  <div>
    <input v-model="cnpj" placeholder="CNPJ" />
    <button @click="validarCNPJ">Validar CNPJ</button>
  </div>
</template>
