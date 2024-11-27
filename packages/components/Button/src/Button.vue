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
    <i v-if="icon && iconPosition === 'left'" class="bee-icon" :class="`bee-${icon}`"></i>
    <span v-if="$slots.default">
      <slot />
    </span>
    <i v-if="icon && iconPosition === 'right'" class="bee-icon" :class="`bee-${icon}`"></i>
    <i :style="loadingStyle" v-if="loading" class="bee-icon bee-loading"></i>
  </button>
</template>

<script setup lang="ts">
import { withDefaults, computed, ref } from 'vue'
import { type ButtonProps, buttonEmits } from './button'
import useButton from './useButton'
import useCustomStyles from './useCustomStyles'

const props = withDefaults(defineProps<ButtonProps>(), {
  size: '',
  iconPosition: 'right',
  type: 'default'
})
const emits = defineEmits(buttonEmits)

const { _ref, _props, handleClick, loadingStyle } = useButton(props, emits)

let custormConfig = useCustomStyles(props)

const beeButtonClasses = computed(() => {
  return {
    [`bee-button__${props.type}`]: props.type !== 'default',
    [`bee-button__${props.size}`]: !!props.size,
    [`bee-button__plain`]: props.plain,
    'bee-button__round': props.round,
    'bee-button__disabled': props.disabled,
    'bee-button__loading': props.loading,
    'bee-button__inline': props.inline || props.circle,
    'bee-button__circle': props.circle
  }
})

const buttonStyles = ref({
  ...custormConfig.value.styles,
  'background-color': props.bg
})
</script>
