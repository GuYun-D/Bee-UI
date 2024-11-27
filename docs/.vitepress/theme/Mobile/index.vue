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

<script setup lang="ts">
</script>

<style lang="scss" scoped>
/* 滚动条整体样式 */
::-webkit-scrollbar {
  width: 3px; /* 纵向滚动条宽度 */
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background-color: transparent;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 5px;
}

/* 滚动条滑块悬浮样式 */
::-webkit-scrollbar-thumb:hover {
  background-color: #2aeb23;
}

.preview-mobile-container {
  position: relative;
  display: inline-block;
  border-radius: 20px;
  overflow: hidden;
  padding: 8px;
  background-color: #dcdcdc;
  cursor: pointer;
  margin-left: 50px;

  background: url('https://img1.baidu.com/it/u=2358111707,2967358694&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=834') no-repeat;
  background-size: cover;

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
    overflow-y: auto;
  }
}
</style>
