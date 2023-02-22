import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button Test', () => {
  it('should render slot', () => {
    const demoButton = mount(Button, {
      slots: {
        default: 'Hello World',
      },
    })
    expect(demoButton.text()).toBe('Hello World')
  })
})
