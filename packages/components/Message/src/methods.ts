import { h, render, ref, type Ref } from 'vue'
import Message from './Message.vue'
import { MessageProps } from './message'
import { destoryMessageElement } from './utils'
import { MESSAGE_HEIGHT, MESSAGE_START_TOP, MESSAGE_GAP } from './contants'

// 当前的消息列表
export let messageInstanceList: Ref<HTMLDivElement[]> = ref([])

const setDestoryClock = (container: HTMLDivElement, duration: MessageProps['duration'] = 3000, onClose: Function | undefined) => {
  setTimeout(() => {
    destoryMessageElement(container, messageInstanceList, onClose, {
      MESSAGE_GAP,
      MESSAGE_HEIGHT,
      MESSAGE_START_TOP
    })
  }, duration)
}

const BeeMessage = (config: MessageProps = {}) => {
  const onClose = config.onClose
  
  const vnode = h(Message, { ...config })
  console.log(vnode);
  
  const messageContainer = document.createElement('div')
  messageContainer.setAttribute('class', 'bee-message__container')
  document.body.append(messageContainer)

  messageInstanceList.value.push(messageContainer)

  messageContainer.style.top = MESSAGE_START_TOP + (messageInstanceList.value.length - 1) * (MESSAGE_HEIGHT + MESSAGE_GAP) + 'px'
  render(vnode, messageContainer)
  // 渲染完成之后创建销毁定时器
  setDestoryClock(messageContainer, config.duration, onClose)
}

export default BeeMessage
export { BeeMessage }
