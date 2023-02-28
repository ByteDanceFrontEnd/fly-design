import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button Test', () => {
  it('should render slot', () => {
    const demoButton1 = mount(Button, {
      props: {
        type: 'default',
      },
      slots: {
        default: 'Hello World',
      },
    })
    expect(demoButton1.text()).toBe('Hello World')
    expect(demoButton1.find('div').attributes().class).toBe(
      'f-button f-button-default f-button-',
    )

    const demoButton2 = mount(Button, {
      props: {
        disabled: true,
      },
    })
    expect(demoButton2.find('div').attributes().class).toBe(
      'f-button f-button-default f-button-disabled',
    )
  })
})
