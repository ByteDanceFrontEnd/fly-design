import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from './Input.vue'

describe('Input Test', () => {
  it('should render prop', () => {
    const demoInput1 = mount(Input, {
      props: {
        type: '',
        size: 'small',
      },
    })
    expect(demoInput1.find('input').attributes().class).toBe('f-input-small')

    const demoInput2 = mount(Input, {
      props: {
        type: 'textarea',
        placeholder: 'Hello World',
      },
    })
    expect(demoInput2.find('textarea').attributes().placeholder).toBe(
      'Hello World',
    )
  })
})
