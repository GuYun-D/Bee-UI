<template>
  <div class="preview-mobile-container">
    <div class="off-btn"></div>
    <div class="top-btn"></div>
    <div class="down-btn"></div>
    <div class="inner">
      <div class="status-bar">
        <div class="time">9:50</div>
      </div>
      <slot></slot>
    </div>
    <div class="home"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.preview-mobile-container {
  position: relative;
  display: inline-block;
  border-radius: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 8px;
  background-color: #dcdcdc;
  cursor: pointer;
  margin-left: 50px;

  .status-bar {
    /* height: 40px; */

    font-size: 14px;
    padding: 8px;
    box-sizing: border-box;
  }

  .off-btn,
  .top-btn,
  .down-btn {
    position: absolute;
    width: 8px;
    height: 40px;
    border-radius: 100px;
    background-color: #545454;
    right: 0;
    top: 40%;
  }

  .top-btn {
    top: 20%;
  }

  .down-btn {
    top: 27%;
  }

  .home {
    width: 30%;
    height: 5px;
    border-radius: 100px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    background-color: #000;
    transform: translateX(-50%);
  }

  .inner {
    width: 375px;
    height: 667px;
    background-color: #f1f1f1;
    border-radius: 20px;
  }
}
</style>
