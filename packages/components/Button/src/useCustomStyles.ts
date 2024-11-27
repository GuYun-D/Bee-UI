import { computed } from 'vue'
import { ButtonProps } from './button'

const useCustomStyles = (props: ButtonProps) => {
  return computed(() => {
    if (!props.color) return { styles: {}, onMouseEnter: () => {}, onMouseLeave: () => {} }
    const styles: Partial<CSSStyleDeclaration> = { color: props.color }

    if (props.plain) {
      styles.borderColor = props.color
    } else {
      styles.border = 'none'
      styles.backgroundColor = props.bg || props.color
      styles.color = '#fff'
    }

    /**
     * 当鼠标移上去的样式
     */
    const onMouseEnter = (buttonInstance: HTMLButtonElement | undefined) => {
      if (!buttonInstance || !props.color) return
      if (props.plain) {
        buttonInstance.style.backgroundColor = props.color!
        buttonInstance.style.color = '#fff'
      }
    }

    /**
     * 当鼠标移开
     */
    const onMouseLeave = (buttonInstance: HTMLButtonElement | undefined) => {
      if (!buttonInstance || !props.color) return
      if (props.plain) {
        buttonInstance.style.backgroundColor = 'transparent'
        buttonInstance.style.color = props.color!
      }
    }

    return { styles, onMouseEnter, onMouseLeave }
  })
}

export default useCustomStyles
