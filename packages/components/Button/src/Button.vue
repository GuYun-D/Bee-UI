<template>
  <button
    ref="_ref"
    class="bee-button"
    :class="beeButtonClasses"
    v-bind="_props"
    @click="handleClick"
    @mouseleave="custormConfig.onMouseLeave(_ref)"
    :style="buttonStyles"
    @mouseenter="custormConfig.onMouseEnter(_ref)"
  >
    <div class="t-button__inner">
      <span v-if="$slots.default">
        <slot />
      </span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { withDefaults, computed, ref, getCurrentInstance } from 'vue'
import { type ButtonProps, buttonEmits } from './button'
import useButton from './useButton'
import useCustomStyles from './useCustomStyles'

const baseButtonClassName = 'bee-button'
const instance = getCurrentInstance()

const props = withDefaults(defineProps<ButtonProps>(), {
  size: ''
})
const emits = defineEmits(buttonEmits)

const { _ref, _props, handleClick } = useButton(props, emits)

let custormConfig = useCustomStyles(props)

const defaultStyles = ref({
  'background-color': props.bg
})

const beeButtonClasses = computed(() => {
  return {
    [`bee-button__${props.type}`]: props.type !== 'default',
    [`bee-button__${props.size}`]: !!props.size,
    [`bee-button__plain`]: props.plain,
    'bee-button__round': props.round,
    'bee-button__disabled': props.disabled
  }
})

const buttonStyles = ref({
  ...custormConfig.value.styles,
  'background-color': props.bg
})
</script>

<style scoped lang="scss">
@import '../../../theme-chalk/bee-button.scss';
</style>
