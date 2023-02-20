import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from './Input.vue'

describe('Input Test', () => {
  it('should render prop', () => {
    const demoInput = mount(Input, {
      props: {
        type: '',
        size: 'small',
      },
    })
    expect(demoInput.find('input').attributes().style).toBe('height: 24px;')
  })
})
