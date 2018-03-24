<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar">
      </div>
    </div>
  </div>
</template>

<script>
export default{
    props:{
      seller:{
        type:Object
      }
    }
}
</script>

<style>

</style>