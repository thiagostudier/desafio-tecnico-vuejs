<template>
  <div id="site-template">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteTemplate'
}
</script>

<style scoped>

#site-template{
  background: #e5e5e5;
  min-height: 100vh;
  padding: 25px 35px 48px 35px;
}

#site-template .container{
  max-width: 1019px;
  margin: 0px auto;
}

@media (max-width: 768px){
  #site-template{
    padding: 20px;
  }
}

</style>
