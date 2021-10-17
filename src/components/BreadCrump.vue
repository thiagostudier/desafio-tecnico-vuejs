<template>
  <div id="bread-crump">
    <span class="bread-crump-item" v-for="link in links" v-bind:key="link.text">
      {{link.text}}
    </span>
  </div>
</template>

<script>

export default {
  name: 'BreadCrump',
  props: ['links']
}

</script>

<style scoped>

.bread-crump-item{
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  color: #7F7F7F;
  position: relative;
  margin-right: 10px;
  padding-right: 10px;
}

.bread-crump-item:not(:last-child):after {
  content: "";
  display: inline-block;
  border-right: 1px solid #C2C2C2;
  border-bottom: 1px solid #C2C2C2;
  width: 6px;
  height: 6px;
  -webkit-transform: rotate(-45deg) translateY(-50%);
  transform: rotate(-45deg) translateY(-50%);
  position: absolute;
  top: 47%;
  right: 0px;
}

.bread-crump-item:last-child{
  color: #E0414B;
  font-weight: 500;
}

</style>

