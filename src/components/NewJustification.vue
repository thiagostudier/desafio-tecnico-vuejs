<template>
  <div id="new-justification">
    <h1 class="title">Adicionar nova justificativa</h1>
    <form-group :characters="150" :marginBottom="24" :value="justification">
      <label for="justification">Justificativa</label>
      <input type="text" id="justification" v-model="justification" placeholder="Digite um motivo para fazer opt out"/>
    </form-group>
    <form-group>
      <label class="button">
        <input type="checkbox" class="checkbox-dark" :model="observation" />
        Permitir que o usuário informe uma observação
      </label>
    </form-group>
    <button class="btn" v-bind:class="{ able: justification != '' }">Salvar alterações</button>
  </div>
</template>

<script>
import FormGroup from './FormGroup.vue'

export default {
  name: 'NewJustification',
  components: { FormGroup },
  data(){
    return {
      justification: "",
      observation: ""
    }
  }
}

</script>

<style scoped>

  #new-justification{
    background: #fff;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    padding: 50px 50px 45px 50px;
    margin: 15px 0px;
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

</style>

