import type { Ref } from 'vue'

// 删除message
export const destoryMessageElement = (
  element: HTMLDivElement,
  messageInstanceList: Ref<HTMLDivElement[]>,
  onClose: Function | undefined,
  config: {
    MESSAGE_START_TOP: number
    MESSAGE_HEIGHT: number
    MESSAGE_GAP: number
  }
) => {
  const { MESSAGE_GAP, MESSAGE_HEIGHT, MESSAGE_START_TOP } = config
  if (!element.parentElement?.contains(element)) return
  const tag = onClose?.() || true
  if (tag) {
    element.parentElement?.removeChild(element)
    messageInstanceList.value = messageInstanceList.value.filter((item) => item !== element)
    messageInstanceList.value.forEach((item, index) => {
      item.style.top = MESSAGE_START_TOP + index * (MESSAGE_HEIGHT + MESSAGE_GAP) + 'px'
    })
  }
}
