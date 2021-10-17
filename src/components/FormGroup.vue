<template>
  <div id="form-group" v-bind:style="{ marginBottom: marginBottom + 'px' }">
    <slot />
    <span v-if="characters" class="characters">{{value.length}}/{{characters}} caracteres</span>
  </div>
</template>

<script>

export default {
  name: 'FormGroup',
  props: ['value','characters', 'marginBottom']
}

</script>

<style scoped>

label{
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #474747;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

input[type=text]{
  border: none;
  border-bottom: 1px solid #474747;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  padding: 7px 0px;
  display: block;
  width: 100%;
  color: #474747;
}

label.button{
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #474747;
}

::placeholder {
  color: #C2C2C2;
}

.characters{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #7F7F7F;
  text-align: right;
  display: block;
  margin-top: 7px;
}

/* CHECKBOX */

.checkbox-dark {
  all: unset;
  width: 13px;
  height: 13px;
  border-radius: 3px;
  border: 1px solid #B1ADAD !important;
  display: inline-block;
  cursor: pointer !important;
  position: relative;
  background: #fff;
}

.checkbox-dark:focus,
.checkbox-dark:hover{background: #fff !important;}

.checkbox-dark:checked {
  background: #453E3E !important;
  border: 1px solid #453E3E !important;
}

.checkbox-dark:before{
  content: "\F00C";
  font-family: "FontAwesome";
  font-size: 11px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* end CHECKBOX */

/* RADIOBUTTON */

input[type=radio] {
  all: unset;
  width: 13px;
  height: 13px;
  border-radius: 100%;
  border: 1px solid #A6A6A6;
  display: inline-block;
  cursor: pointer;
  position: relative;
  background: #fff;
}

input[type=radio]:checked {
  border: 1px solid #fff;
  background: #4569EF;
}

/* end RADIOBUTTON */

</style>



