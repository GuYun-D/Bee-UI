export interface MessageProps {
  /**
   * 提示类型
   */
  type?: 'success' | 'info' | 'error' | 'warning'
  /**
   * 提示内容
   */
  message?: string
  /**
   * 是否显示关闭按钮
   */
  showClose?: boolean
  /**
   * 停留时长
   */
  duration?: number
  /**
   * 自定义类名
   */
  customClass?: string
  /**
   * 自定义图标
   */
  icon?: string
  /**
   * 当message关闭时触发
   */
  onClose?: () => boolean
}
