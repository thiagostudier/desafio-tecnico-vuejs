import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // PEGAR AS OPÇÕES DO LOCALSTORAGE
    options: localStorage.getItem('options') ? JSON.parse(localStorage.getItem('options')) : [],
  },
  mutations: {
    // VERIFICAR SE EXISTE O VALOR NO STORAGE, SE NÃO EXISTIR, CRIAR UM ARRAY VAZIO
    checkOptions(state) {
      if(state.options == '' || state.options == null){
        localStorage.setItem('options', '');
        state.options = []
      }
    },
    // FUNÇÃO PARA ADICIONAR UMA OPÇÃO AO LOCALSTORAGE
    addOption(state,{ data }) {
      state.options.push(data.option)
      localStorage.setItem("options", JSON.stringify(state.options));
    },
  },
  actions: {
    addOption({ commit }, data){
      commit('addOption', { data })
    },
    checkOptions({ commit }) {
      commit('checkOptions')
    },
  },
  getters: {
    options: state => !!state.options,
  },
});

export default store;
