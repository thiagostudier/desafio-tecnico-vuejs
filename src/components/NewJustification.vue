<template>
  <div id="new-justification">
    <h1 class="title">Adicionar nova justificativa</h1>
    <form-group :characters="150" :marginBottom="24" :value="justification">
      <label for="justification">Justificativa</label>
      <input type="text" id="justification" v-model="justification" placeholder="Digite um motivo para fazer opt out" maxlength="150"/>
    </form-group>
    <form-group>
      <label class="button">
        <input type="checkbox" class="checkbox-dark" v-model="observation" value="true" />
        Permitir que o usuário informe uma observação
      </label>
    </form-group>
    <button class="btn" v-bind:class="{ able: justification != '' }" @click="addOption({text: justification, obs: observation})">Salvar alterações</button>
  </div>
</template>

<script>

import store from '@/store'
import FormGroup from './FormGroup.vue'

export default {
  name: 'NewJustification',
  components: { FormGroup },
  data(){
    return {
      justification: "",
      observation: false,
      options: store.state.options,
    }
  },
  methods:{
    addOption(option){
      // VALIDAR SE A JUSTIFICATIVA É VÁLIDA E SE JÁ EXISTE NA LISTA
      if(this.justification != "" &&
        this.justification.length <= 150 &&
        !this.options.some(e => e.text == this.justification)){
        // LIMPAR DADOS DO FORMULÁRIO
        this.justification = ""
        this.observation = false
        // ADICIONAR ITEM À LISTA DE OPÇÕES
        store.dispatch('addOption', { option })
      }else{
        // FEEDBACK/ALERTA
        alert('Justificativa inválida, ou já consta no formulário!')
      }
    }
  }
}

</script>

<style scoped>

  #new-justification{
    background: #fff;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    padding: 50px 50px 45px 50px;
    margin-bottom: 35px;
  }

  h1.title{
    font-family: Roboto;
    font-weight: 500;
    font-size: 32px;
    line-height: 35px;
    margin: 0px 0px 90px 0px;
    color: #474747;
  }

  .btn{
    width: 210px;
    margin-left: auto;
    margin-top: 85px;
  }

  @media (max-width: 768px){
    #new-justification{
      padding: 25px 20px;
    }
    h1.title{
      font-size: 25px;
      margin: 0px 0px 25px 0px;
    }
    .btn{
      width: 210px;
      max-width: 100%;
      margin-top: 20px;
    }
  }

</style>

