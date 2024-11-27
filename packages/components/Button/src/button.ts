/**
 * @description button 属性
 */
export interface ButtonProps {
  /**
   * 按钮尺寸
   */
  size?: '' | 'small' | 'mini' | 'large'
  /**
   * 按钮类型
   */
  type?: 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text'
  /* 按钮是否禁用 */
  disabled?: boolean
  /* 是否圆角按钮 */
  round?: boolean
  /* 按钮文本颜色 */
  color?: string
  /* button 的 原生类型 */
  navtiveType?: 'button' | 'submit' | 'reset'
  /* 是否朴素按钮 */
  plain?: boolean
  /* 是否原型按钮 */
  circle?: boolean
  /* 是否加载中 */
  loading?: boolean
  /**
   * 原生的属性autofocus
   */
  autofocus?: boolean
  /**
   * 按钮背景色
   */
  bg?: string
  /**
   * 按钮图标
   */
  icon?: string
  /**
   * 按钮位置
   */
  iconPosition?: 'left' | 'right'
}

/**
 * @description 按钮事件
 */
export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent
}

export type ButtonEmits = typeof buttonEmits
