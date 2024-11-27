import { describe, expect, it, test } from 'vitest'
import { mount } from '@vue/test-utils'
import BeeButton, { ButtonProps } from '..'

const createBeeButton = (props?: ButtonProps) => {
  return mount(() => <BeeButton {...props}></BeeButton>)
}

const getButtonClassName = (attributeName: string) => {
  return `bee-button__${attributeName}`
}

const testButtonText = 'GuYun-D'

describe('bee-button', () => {
  it('测试按钮组件挂载', () => expect(createBeeButton().exists()).toBeTruthy())
  it('测试type属性', () => expect(createBeeButton({ type: 'primary' }).classes()).toContain(getButtonClassName('primary')))
  it('测试size属性', () => expect(createBeeButton({ size: 'small' }).classes()).toContain(getButtonClassName('small')))
  it('测试禁用状态', async () => {
    const wrapper = createBeeButton({ disabled: true })
    const classList = wrapper.classes()
    expect(classList).toContain(getButtonClassName('disabled'))
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
  it('测试round属性', () => expect(createBeeButton({ round: true }).classes()).toContain(getButtonClassName('round')))
  it('测试nativeType属性', () => {
    const nativeType = 'reset'
    const wrapper = createBeeButton({ nativeType })
    expect(wrapper.attributes('type')).toBe(nativeType)
  })
  it('测试circle属性', () => expect(createBeeButton({ circle: true }).classes()).toContain(getButtonClassName('circle')))
  it('测试plain朴素按钮', () => expect(createBeeButton({ plain: true }).classes()).toContain(getButtonClassName('plain')))
  it('测试loading状态', () => {
    const wrapper = createBeeButton({ loading: true })
    expect(wrapper.classes()).toContain(getButtonClassName('loading'))
    const loadingEl = wrapper.find('i')
    expect(loadingEl.exists()).toBeTruthy()
    expect(loadingEl.classes()).toContain('bee-icon-loading')
  })

  it('测试icon', () => {
    const wrapper = createBeeButton({ icon: 'sousuo' })
    const iconElList = wrapper.findAll('i')
    expect(iconElList.length).toEqual(1)
    expect(iconElList[0].classes()).toContain('bee-icon-sousuo')
  })

  test('测试组件渲染按钮文本', () => {
    const wrapper = mount(() => <BeeButton v-slots={{ default: () => testButtonText }}></BeeButton>)
    expect(wrapper.text()).toEqual(testButtonText)
  })

  it('测试icon的显示位置', () => {
    const wrapper = mount(() => <BeeButton icon="sousuo" icon-postion="left" v-slots={{ default: () => testButtonText }}></BeeButton>)
    const iconEl = wrapper.find('i').element
    const textSpanEl = wrapper.find('span').element
    const { x: iconPosition } = iconEl.getBoundingClientRect()
    const { y: spanPosition } = textSpanEl.getBoundingClientRect()
    expect(iconPosition).toBeLessThanOrEqual(spanPosition)
  })

  test('测试按钮被点击', async () => {
    const wrapper = mount(() => <BeeButton v-slots={{ default: () => testButtonText }}></BeeButton>)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeDefined()
  })

  test('测试loading时，无法点击按钮', async () => {
    const wrapper = mount(() => <BeeButton loading v-slots={{ default: () => testButtonText }}></BeeButton>)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
