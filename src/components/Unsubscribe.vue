<template>
  <div id="unsubscribe" v-if="options.length > 0">
    <div class="unsubscribe-message">
      <img class="logo-companhia" src="@/assets/company-logo.png" alt="Logo da Companhia" />
      <h1 class="title">Nós sentiremos sua falta
        <img class="icon" src="@/assets/unsubscribe-icon.png" alt="Nuvem chorando" />
      </h1>
      <p>Lamentamos ver você indo embora. <br />Para que possamos <b>melhorar nossa comunicação</b>, gostaríamos de <b>saber os motivos</b> que o levaram a tomar essa decisão.</p>
      <p><b>O questionário é opcional</b>.</p>
    </div>
    <div class="unsubscribe-form">
      <h2 class="subtitle">Por que você quer se descadastrar?</h2>
      <div class="unsubscribe-form-itens">
        <form-group v-for="(item, i) in options" v-bind:key="i" :marginBottom="22">
          <label class="button">
            <input type="radio" v-model="option" :value="item.text"/>
            {{item.text}}
          </label>
        </form-group>
        <form-group :marginBottom="22">
          <label class="button">
            <input type="radio" v-model="option" value="Outro"/>
            Outro:
          </label>
        </form-group>
        <form-group :characters="150" :marginBottom="22" :value="comment" v-if="option == 'Outro'">
          <input type="text" id="comment" v-model="comment" placeholder="Informe uma observação" maxlength="150"/>
        </form-group>
      </div>
      <p>O descadastramento será efetuado para o e-mail: <a href="mailto:nome.sobrenome@pmweb.com.br">nome.sobrenome@pmweb.com.br</a></p>
      <button class="btn" v-bind:class="{ able: option != '' }" @click="unsubscribe()">Descadastrar</button>
    </div>
  </div>
</template>

<script>

import store from '@/store'
import FormGroup from './FormGroup.vue'

export default {
  name: 'Unsubscribe',
  components: { FormGroup },
  data(){
    return {
      options: store.state.options,
      comment: "",
      option: ""
    }
  },
  methods:{
    unsubscribe(){
      // VALIDAR INFORMAÇÕES
      if((this.option == "") ||
        (this.option == "Outro" && this.comment == "") ||
        (this.comment.length > 150)){
        // FEEDBACK/ALERTA
        return alert('Informe um valor válido!')
      }else{
        // LIMPAR FORULÁRIO
        this.comment = ""
        this.option = ""
        // FEEDBACK
        return alert('Obrigado por preencher nossa pesquisa')
      }
    }
  },
  watch: {
    option: function(val, old) {
      // QUANDO O RÁDIOBUTTON FOR ALTERADO, LIMPAR O DADO DO COMENTÁRIO
      this.comment = ""
    },
  }
}

</script>

<style scoped>

  #unsubscribe{
    background: #fff;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    padding: 80px 65px 30px 80px;
    display: flex;
    gap: 75px
  }

  h1.title{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 30px;
    color: rgba(0, 0, 0, 0.6);
    margin: 0px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  h2.subtitle{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 19.376px;
    line-height: 22px;
    color: #474747;
    margin: 0px;
    margin-bottom: 27px;
  }

  .logo-companhia{
    height: 60px;
    margin-bottom: 50px;
  }

  .icon{
    height: 40px;
  }

  .unsubscribe-message,
  .unsubscribe-form{
    width: 100%;
  }

  @media (max-width: 768px){
    #unsubscribe{
      padding: 25px 20px;
      display: block;
    }
    .logo-companhia{
      margin-bottom: 20px;
    }
    h1.title,
    h2.subtitle{
      margin-bottom: 20px;
    }
    .unsubscribe-message{
      margin-bottom: 30px;
    }
  }

</style>

