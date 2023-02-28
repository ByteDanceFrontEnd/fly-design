import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Layout from './Layout.vue'

describe('Layout Test', () => {
  it('should render prop', () => {
    const demoLayout = mount(Layout, {
      props: {
        direction: 'vertical',
      },
    })
    expect(demoLayout.find('div').attributes().class).toBe(
      'f-layout is-vertical',
    )
  })
})
