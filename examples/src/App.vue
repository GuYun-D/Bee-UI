<script setup lang="ts">
import Mobile from '../../docs/.vitepress/theme/Mobile/index.vue'
</script>

<template>
  <div style="display: flex; align-items: center; width: 100vw; height: 100vh; background-color: #8b8b8b">
    <Mobile>
      <div style="box-sizing: border-box; margin: 10px">
        <BeeButton size="mini" style="margin-bottom: 10px">mini</BeeButton>
        <BeeButton size="small" style="margin-bottom: 10px" type="primary">small</BeeButton>
        <BeeButton size="" style="margin-bottom: 10px" type="success">normal</BeeButton>
        <BeeButton size="large" style="margin-bottom: 10px" type="info">large</BeeButton>
      </div>

      <hr />

      <div style="padding: 0 10px; box-sizing: border-box; margin: 10px 0">
        <BeeButton style="margin-bottom: 10px">default</BeeButton>
        <BeeButton style="margin-bottom: 10px" type="primary">primary</BeeButton>
        <BeeButton style="margin-bottom: 10px" type="success">success</BeeButton>
        <BeeButton style="margin-bottom: 10px" type="info">info</BeeButton>
        <BeeButton style="margin-bottom: 10px" type="warning">warning</BeeButton>
        <BeeButton style="margin-bottom: 10px" type="danger">danger</BeeButton>
        <BeeButton style="margin-bottom: 10px" type="text">text</BeeButton>
      </div>
    </Mobile>
  </div>
</template>

<style scoped></style>
