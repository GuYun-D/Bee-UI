import { ref, computed, type SetupContext } from 'vue'
import { ButtonEmits, ButtonProps } from './button'

const useButton = (props: ButtonProps, emits: SetupContext<ButtonEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>()

  const _props = computed(() => {
    return {
      disabled: props.disabled || props.loading,
      type: props.navtiveType
    }
  })

  const handleClick = (evt: MouseEvent) => {
    if (_props.value.disabled) {
      return evt.stopPropagation()
    }
    if (props.navtiveType === 'reset') {
      // TODO: 表单重置
    }
    emits('click', evt)
  }

  const loadingStyle = {
    color: (props.type === 'default' || props.plain) ? '#ccc' : props.color ? props.color : '#fff'
  }

  return { _ref, _props, handleClick, loadingStyle }
}

export default useButton
