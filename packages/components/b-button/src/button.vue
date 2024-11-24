<template>
  <button
    class="t-button"
    :class="[
      `t-button__${type}`,
      `${size && 't-button--' + size}`,
      { 'is-round': round },
    ]"
    :disabled="disabled"
  >
    <div class="t-button__inner">
      <span v-if="$slots.default">
        <slot />
      </span>
    </div>
  </button>
</template>

<script setup>
import { ButtonProps } from "./button";

defineOptions({
  name: "t-button",
});

const BUTTON_TYPE = ["primary", "success", "warning", "info", "danger"];
const BUTTON_SIZE = ["", "small", "mini"];

defineProps(ButtonProps);
</script>

<style scoped lang="scss">
@import '../../../theme-chalk/bee-button.scss';
</style>
