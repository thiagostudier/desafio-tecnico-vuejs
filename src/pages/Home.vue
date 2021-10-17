<template>
  <site-template>
    <bread-crump :links="links"/>
    <new-justification class="spacing" />
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

