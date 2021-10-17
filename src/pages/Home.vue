<template>
  <site-template>
    <!-- BREADCRUMP - LINKS -->
    <bread-crump :links="links"/>
    <!-- ADICIONAR NOVA OPÇÕES/JUSTIFICATIVA -->
    <new-justification />
    <!-- FORMULÁRIO DE DESCADASTRO -->
    <unsubscribe />
  </site-template>
</template>

<script>

import SiteTemplate from '@/template/SiteTemplate'
import BreadCrump from '@/components/BreadCrump'
import NewJustification from '@/components/NewJustification'
import Unsubscribe from '@/components/Unsubscribe'

export default {
  name: 'Home',
  components: {
    SiteTemplate,
    BreadCrump,
    NewJustification,
    Unsubscribe
  },
  data(){
    return {
      // LINKS PARA O BREADCRUMP
      links: [
        {
          link: "#",
          text: "Home"
        },
        {
          link: "#",
          text: "Administração do sistema"
        },
        {
          link: "#",
          text: "Adicionar nova justificativa"
        }
      ]
    }
  }
}

</script>

