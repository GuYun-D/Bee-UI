<template>
  <div class="bee-message" :class="[`bee-message__${type}`, customClass]" ref="messageRef">
    <i class="bee-icon" :class="`bee-icon-${icon || type}`"></i>
    <span class="bee-message__text">{{ message }}</span>
    <i v-if="showClose" class="bee-icon bee-icon-close bee-message_close_icon" @click="handleClose"></i>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, ref } from 'vue'
import type { MessageProps } from './message'
import { destoryMessageElement } from './utils'
import * as messagePositionConfig from './contants'
import { messageInstanceList } from '..'

const messageRef = ref<HTMLDivElement>()
defineOptions({ name: 'bee-message' })
const props = withDefaults(defineProps<MessageProps>(), { type: 'info', duration: 3000, showClose: false, icon: '', customClass: '' })

/**
 * 关闭提示
 */
const handleClose = () => {
  const container = messageRef.value?.parentElement as HTMLDivElement
  container && destoryMessageElement(container, messageInstanceList, props.onClose, { ...messagePositionConfig })
}
</script>
