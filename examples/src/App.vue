<script setup lang="ts">
import Mobile from '../../docs/.vitepress/theme/Mobile/index.vue'
</script>

<template>
  <div style="display: flex; align-items: center; width: 100vw; height: 100vh; background-color: #8b8b8b">
    <Mobile>
      <div style="box-sizing: border-box; margin: 10px">
        <BeeButton inline style="margin-bottom: 10px">default</BeeButton>
        <BeeButton size="mini" inline style="margin-bottom: 10px" type="primary">primary</BeeButton>
        <BeeButton size="small" inline style="margin-bottom: 10px" type="success">success</BeeButton>
        <BeeButton size="large" inline style="margin-bottom: 10px" type="info">info</BeeButton>
        <BeeButton inline style="margin-bottom: 10px" type="warning">warning</BeeButton>
        <BeeButton inline style="margin-bottom: 10px" type="danger">danger</BeeButton>
        <BeeButton inline style="margin-bottom: 10px" type="text">text</BeeButton>
      </div>

      <hr />
      <div style="box-sizing: border-box; margin: 10px">
        <BeeButton icon="sousuo" style="margin-bottom: 10px" type="primary">primary</BeeButton>
        <BeeButton loading icon="sousuo" style="margin-bottom: 10px" type="primary">primary</BeeButton>
        <BeeButton icon-position="left" icon="message"  round  style="margin-bottom: 10px">default</BeeButton>
        <BeeButton loading icon-position="left" icon="message"  round  style="margin-bottom: 10px">default</BeeButton>
      </div>

      <hr />

      <div style="box-sizing: border-box; margin: 10px">
        <BeeButton bg="#f00" round style="margin-bottom: 10px" type="primary">primary</BeeButton>
        <BeeButton disabled bg="#098" round color="#333" style="margin-bottom: 10px">default</BeeButton>
      </div>

      <hr />

      <div style="box-sizing: border-box; margin: 10px">
        <BeeButton disabled round style="margin-bottom: 10px">default</BeeButton>
        <BeeButton disabled round style="margin-bottom: 10px" type="primary">primary</BeeButton>
        <BeeButton disabled round style="margin-bottom: 10px" type="success">success</BeeButton>
        <BeeButton disabled round style="margin-bottom: 10px" type="info">info</BeeButton>
        <BeeButton disabled round style="margin-bottom: 10px" type="warning">warning</BeeButton>
        <BeeButton disabled round style="margin-bottom: 10px" type="danger">danger</BeeButton>
        <BeeButton disabled round style="margin-bottom: 10px" type="text">text</BeeButton>
      </div>

      <hr />
      <div style="box-sizing: border-box; margin: 10px">
        <BeeButton color="#543" style="margin-bottom: 10px" type="primary">custorm</BeeButton>
        <BeeButton color="#f40" plain style="margin-bottom: 10px" type="primary">custorm</BeeButton>
        <BeeButton disabled color="#789" style="margin-bottom: 10px" type="primary">custorm</BeeButton>
      </div>

      <hr />
      <div style="box-sizing: border-box; margin: 10px">
        <BeeButton round style="margin-bottom: 10px">default</BeeButton>
        <BeeButton round style="margin-bottom: 10px" type="primary">primary</BeeButton>
        <BeeButton round style="margin-bottom: 10px" type="success">success</BeeButton>
        <BeeButton round style="margin-bottom: 10px" type="info">info</BeeButton>
        <BeeButton round style="margin-bottom: 10px" type="warning">warning</BeeButton>
        <BeeButton round style="margin-bottom: 10px" type="danger">danger</BeeButton>
        <BeeButton round style="margin-bottom: 10px" type="text">text</BeeButton>
      </div>

      <hr />
      <div style="box-sizing: border-box; margin: 10px">
        <BeeButton plain style="margin-bottom: 10px">default</BeeButton>
        <BeeButton plain style="margin-bottom: 10px" type="primary">primary</BeeButton>
        <BeeButton plain style="margin-bottom: 10px" type="success">success</BeeButton>
        <BeeButton plain style="margin-bottom: 10px" type="info">info</BeeButton>
        <BeeButton plain style="margin-bottom: 10px" type="warning">warning</BeeButton>
        <BeeButton plain style="margin-bottom: 10px" type="danger">danger</BeeButton>
        <BeeButton plain style="margin-bottom: 10px" type="text">text</BeeButton>
      </div>

      <hr />
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
