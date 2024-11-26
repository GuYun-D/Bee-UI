<template>
  <button ref="_ref" class="bee-button" :class="beeButtonClasses" v-bind="_props" @click="handleClick" :style="buttonStyles">
    <div class="t-button__inner">
      <span v-if="$slots.default">
        <slot />
      </span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { withDefaults, computed } from 'vue'
import { type ButtonProps, buttonEmits } from './button'
import useButton from './useButton'
import useCustomStyles from './useCustomStyles'

const props = withDefaults(defineProps<ButtonProps>(), {
  size: ''
})
const emits = defineEmits(buttonEmits)

const { _ref, _props, handleClick } = useButton(props, emits)
const buttonStyles = useCustomStyles(props)

const beeButtonClasses = computed(() => {
  return {
    [`bee-button__${props.type}`]: props.type !== 'default',
    [`bee-button__${props.size}`]: !!props.size
  }
})
</script>

<style scoped lang="scss">
@import '../../../theme-chalk/bee-button.scss';
</style>
